import { useEffect, useState } from "react";
import "./css/AddNewTicket.css";
import { RxCross1 } from "react-icons/rx";
import { FaAsterisk } from "react-icons/fa";

const AddNewTicket = ({ isModalOpen, setIsModalOpen, onAddNewTicket }) => {
  // const [shouldRenderModal, setShouldRenderModal] = useState(false);
  const [ticketType, setTicketType] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");

  const [isTypeEmpty, setIsTypeEmpty] = useState(false);
  const [isDescriptionEmpty, setIsDescriptionEmpty] = useState(false);

  // Setting ticket type
  const typeChangeHandler = (event) => {
    setTicketType(event.target.value);
    setIsTypeEmpty(false);
  };

  // Setting ticket description
  const descriptionChangeHandler = (event) => {
    setTicketDescription(event.target.value);
  };

  // Handling Form Submission
  const submitHandler = (event) => {
    if (ticketType === "" && ticketDescription === "") {
      event.preventDefault();
      setIsTypeEmpty(true);
    } else if (ticketType === "" && ticketDescription !== "") {
      event.preventDefault();
      setIsTypeEmpty(true);
    } else {
      onAddNewTicket(ticketType, ticketDescription);

      // Clearing the input field after submission (maybe optional)
      setTicketType("");
      setTicketDescription("");

      // Closing the modal simultaneous of form submission
      setIsModalOpen(false);
    }
  };

  return (
    <div className="modal-background">
      <div className={`modal ${isModalOpen ? "open-modal" : ""}`}>
        <button className="close-btn" onClick={() => setIsModalOpen(false)}>
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
              value={ticketType}
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
              value={ticketDescription}
              onChange={descriptionChangeHandler}
            ></textarea>
          </div>
          <div className="form-btn__container">
            <button
              className="cancel-btn btn"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button type="submit" className="add-btn btn">
              Add New Ticket
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
export default AddNewTicket;
