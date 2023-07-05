import { Route, Routes } from "react-router-dom";
import navbar from "../../utils/navbar";

const Navbar = () => {
  return (
    <div>
      {
        navbar.map(val => {
          return (
            <Routes>
              <Route path={val.path} element={val.element} />
            </Routes>
          )
        })
      }
    </div>
  );
}

export default Navbar;