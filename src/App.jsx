import TicketTypes from "./components/Ticket_Management_Components/TicketTypes";
import Sidebar from "./components/Other_Components/Sidebar";

function App() {
  return (
    <div className="container">
      <div className="left-content">
        <Sidebar />
      </div>
      <div className="right-content">
        <TicketTypes />
      </div>
    </div>
  );
}

export default App;
