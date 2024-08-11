import logo from "../assets/images/logo.svg";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />

      <div className="links">
        <ul>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Sevices</a>
          </li>
          <li>
            <a href="">Partners</a>
          </li>
        </ul>
        <div className="btn">Contact us</div>
      </div>
    </div>
  );
};

export default NavBar;
