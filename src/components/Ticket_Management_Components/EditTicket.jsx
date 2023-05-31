import { useState } from "react";
import "./css/EditTicket.css";
import { FaAsterisk } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const EditTicket = ({
  openEdit,
  setOpenEdit,
  prevType,
  prevDescription,
  ticketId,
  editTicket,
}) => {
  const [updatedTicketType, setUpdatedTicketType] = useState(prevType);
  const [updatedTicketDescription, setUpdatedTicketDescription] =
    useState(prevDescription);

  const [isTypeEmpty, setIsTypeEmpty] = useState(false);
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);

  const typeChangeHandler = (event) => {
    setUpdatedTicketType(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setUpdatedTicketDescription(event.target.value);
  };

  const submitHandler = (event) => {
    if (updatedTicketType === "" && updatedTicketDescription === "") {
      event.preventDefault();
      setIsTypeEmpty(false);
    } else if (updatedTicketType === "" && updatedTicketDescription !== "") {
      event.preventDefault();
      setIsTypeEmpty(true);
    } else {
      editTicket(ticketId, updatedTicketType, updatedTicketDescription);

      setUpdatedTicketType("");
      setUpdatedTicketDescription("");

      setOpenEdit(false);
    }
  };

  // return (
  //   <div className="modal-background">
  //     <div className={`modal ${openEdit ? "open-modal" : ""}`}>
  //       <button onClick={() => setOpenEdit(false)}> X </button>
  //       <form onSubmit={submitHandler} className="form">
  //         <div className="form-input">
  //           <label htmlFor="ticketType">Ticket type</label>
  //           <input
  //             type="text"
  //             name="type"
  //             id="ticketType"
  //             value={updatedTicketType}
  //             onChange={typeChangeHandler}
  //           />
  //         </div>
  //         <div className="form-input">
  //           <label htmlFor="ticket-desc">Description</label>
  //           <textarea
  //             name="description"
  //             id="ticketDescription"
  //             cols="30"
  //             rows="10"
  //             value={updatedTicketDescription}
  //             onChange={descriptionChangeHandler}
  //           ></textarea>
  //         </div>
  //         <button type="submit" className="form-btn">
  //           Edit
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // );

  return (
    <div className="modal-background">
      <div className={`modal ${openEdit ? "open-modal" : ""}`}>
        <button className="close-btn" onClick={() => setOpenEdit(false)}>
          <RxCross1 />
        </button>
        <form onSubmit={submitHandler} className="form">
          <div className="form-input">
            <div className="form-label">
              <label htmlFor="ticketType">Ticket type</label>
              <FaAsterisk className="asterisk" />
            </div>
            <input
              type="text"
              name="type"
              id="ticketType"
              placeholder="Ticket Type"
              className={isTypeEmpty ? "input-border-red" : ""}
              value={updatedTicketType}
              onChange={typeChangeHandler}
            />
          </div>
          <div className="form-input">
            <label htmlFor="ticket-desc">Description</label>
            <textarea
              name="description"
              id="ticketDescription"
              cols="30"
              rows="5"
              placeholder="Description"
              className="input-border-red"
              value={updatedTicketDescription}
              onChange={descriptionChangeHandler}
            ></textarea>
          </div>
          <div className="form-btn__container">
            <button
              className="cancel-btn btn"
              onClick={() => setOpenEdit(false)}
            >
              Cancel
            </button>
            <button type="submit" className="add-btn btn">
              Edit Ticket
            </button>
          </div>
        </form>
        {isTypeEmpty && (
          <div
            className={
              isTypeEmpty ? "type-popup fade-in" : "type-popup fade-out"
            }
            onAnimationEnd={() => {}}
          >
            <div className="inner">Please Insert Ticket Type</div>
          </div>
        )}
        {isDescriptionEmpty && (
          <div className="description-popup active-popup">
            <div className="inner">Please Insert Your Description</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default EditTicket;
