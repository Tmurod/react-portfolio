import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import navbar from "../../utils/navbar";
import classes from "./index.module.scss";
import logo from "../../assets/icons/Logo Color.svg"

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="container d-flex justify-content-between py-3 align-items-center">
        <img src={logo} onClick={() => navigate("/home")} className={classes.logo} />
        <nav className="d-flex gap-5">
          {
            navbar.map(val => {
              return (
                <NavLink key={val.id} to={val.path}>
                  {val.name}
                </NavLink>
              );
            })
          }
        </nav>
        <button className={classes.button}>
          Get Started
        </button>
      </div>
      {/* <Outlet /> */}
    </div>
  );
}

export default Navbar;