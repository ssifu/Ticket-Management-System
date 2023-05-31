import "./css/DeleteTicket.css";

const DeleteTicket = ({ isDelete, setIsDelete, deleteHandler }) => {
  return (
    <div className={isDelete ? "delete-popup fade-in" : "delete-popup"}>
      {isDelete && (
        <div className="delete-popup-inner">
          Are you sure want to Delete?
          <div className="popup-inner__buttons">
            <button onClick={() => setIsDelete(false)}>No</button>
            <button onClick={() => deleteHandler(isDelete)}>Yes</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default DeleteTicket;
