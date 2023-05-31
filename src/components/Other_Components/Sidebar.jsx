import "./css/Sidebar.css";

import { BsGraphUp } from "react-icons/bs";
import { GiTicket } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineLaptop } from "react-icons/ai";
import { IoTicketSharp } from "react-icons/io5";

// Logo
import logo from "../../assets/icons/logo-dark.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="#">
        <img src={logo} alt="logo-dark" />
      </a>
      <ul className="item-list">
        <li className="items">
          <BsGraphUp size={25} style={{ strokeWidth: "1" }} />
          <p>Dashboard</p>
        </li>
        <li className="items">
          <GiTicket size={25} style={{ strokeWidth: "1" }} />
          <p>My Tickets</p>
        </li>
        <li className="items">
          <CgProfile size={25} style={{ strokeWidth: "1" }} />
          <p>My Profile</p>
        </li>
        <li className="items">
          <HiOutlineUsers size={25} style={{ strokeWidth: "1" }} />
          <p>Users</p>
        </li>
        <li className="items">
          <AiOutlineLaptop size={25} style={{ strokeWidth: "1" }} />
          <p>Assets</p>
        </li>
        <li className="items active">
          <IoTicketSharp size={25} style={{ strokeWidth: "1" }} />
          <p>Tickets Type</p>
        </li>
        <li className="items">
          <IoTicketSharp size={25} style={{ strokeWidth: "1" }} />
          <p>Tickets Queue</p>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
