import "./css/TicketTable.css";
import AddNewTicket from "./AddNewTicket";
import EditTicket from "./EditTicket";
import DeleteTicket from "./DeleteTicket";

import { useEffect, useState } from "react";
import tickets from "../../data";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const TicketTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allTickets, setAllTickets] = useState(tickets);
  const [isTicketsModified, setIsTicketsModified] = useState(false);

  const [activeEdit, setActiveEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(0);
  const [editInfo, setEditInfo] = useState({
    id: -1,
    type: "",
    description: "",
  });

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const addNewTicket = (newTicketType, newTicketDescription) => {
    const newTicket = {
      id: allTickets.length + 1,
      type: newTicketType,
      description: newTicketDescription,
    };
    setAllTickets((prevTickets) => {
      return [...prevTickets, newTicket];
    });
  };

  const editHandler = (id, type, description) => {
    setEditInfo({
      id: id,
      type: type,
      description: description,
    });
    setActiveEdit(true);
  };

  const editTicket = (ticketId, editedTicketType, editedTicketDescription) => {
    const updatedTickets = allTickets.map((ticket) => {
      if (ticket.id === ticketId) {
        return {
          id: ticketId,
          type: editedTicketType,
          description: editedTicketDescription,
        };
      }
      return ticket;
    });

    setAllTickets(updatedTickets);
  };

  const deleteHandler = (id) => {
    const updatedTickets = allTickets.filter((ticket) => ticket.id !== id);

    setAllTickets(updatedTickets);
    setIsDelete(0);
  };

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(allTickets.length / 4) &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <>
      <div className="new-ticket">
        {isModalOpen && (
          <AddNewTicket
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            onAddNewTicket={addNewTicket}
          />
        )}
        <button
          className="add-new-btn btn"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add New Ticket
        </button>
      </div>
      <div className="ticket-table">
        <div className="header">
          <div className="type">Ticket Type</div>
          <div className="description">Description</div>
          <div className="action">Action</div>
        </div>
        {/* Rendering Tickets  slice(page * 4 - 4, page * 4).*/}
        {allTickets.slice(page * 4 - 4, page * 4).map((ticket) => {
          const { id, type, description } = ticket;
          return (
            <div className="row" key={id}>
              <div className="type">{type}</div>
              <div className="description">{description}</div>
              <div className="action">
                <div className="action-button__container">
                  <button
                    type="button"
                    onClick={() => editHandler(id, type, description)}
                  >
                    <span className="changeColorEdit">
                      <FaEdit size={20} />
                    </span>
                  </button>
                  <button type="button" onClick={() => setIsDelete(id)}>
                    <span className="changeColorDelete">
                      <RiDeleteBin6Line size={20} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {activeEdit && (
          <EditTicket
            openEdit={activeEdit}
            setOpenEdit={setActiveEdit}
            prevType={editInfo.type}
            prevDescription={editInfo.description}
            ticketId={editInfo.id}
            editTicket={editTicket}
          />
        )}
        {isDelete !== 0 && (
          <DeleteTicket
            isDelete={isDelete}
            setIsDelete={setIsDelete}
            deleteHandler={deleteHandler}
          />
        )}
        {isTicketsModified && (
          <TaskCompleted
            isTicketsModified={isTicketsModified}
            setIsTicketsModified={setIsTicketsModified}
          />
        )}
      </div>
      {allTickets.length > 0 && (
        <div className="pagination">
          <span className="next" onClick={() => selectPageHandler(page - 1)}>
            <GrLinkPrevious
              className="next"
              size={35}
              width={"100%"}
              style={{ strokeWidth: "1" }}
            />
          </span>
          {[...Array(Math.ceil(allTickets.length / 4))].map((_, index) => {
            return (
              <span
                className={
                  page === index + 1
                    ? "pagination__numbers pagination__selected"
                    : "pagination__numbers"
                }
                key={index}
                onClick={() => selectPageHandler(index + 1)}
              >
                {index + 1}
              </span>
            );
          })}
          <span className="prev" onClick={() => selectPageHandler(page + 1)}>
            <GrLinkNext
              className="prev"
              size={35}
              width={"100%"}
              style={{ strokeWidth: "50" }}
            />
          </span>
        </div>
      )}
    </>
  );
};
export default TicketTable;
