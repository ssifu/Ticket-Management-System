import TicketTable from "./TicketTable";
import Navbar from "../Other_Components/Navbar";
import "./css/TicketTypes.css";

const TicketTypes = () => {
  return (
    <>
      <Navbar />
      <div className="ticket-types">
        <TicketTable />
      </div>
    </>
  );
};
export default TicketTypes;
