import "./css/Navbar.css";
import img from "../../assets/Samiul Baree Sifat.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-img">
        <p>22</p>
        <img src={img} alt="Samiul Baree Sifat" />
      </div>
    </div>
  );
};
export default Navbar;
