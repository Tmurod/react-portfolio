import { BrowserRouter, Navigate, Route, Routes, Redirect } from 'react-router-dom';
// import Home from '../components/home';
// import classes from './index.module.scss'
import Navbar from '../components/navbar';
import navbar from '../utils/navbar';
import MyRoutes from '../utils/newRoutes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <Routes> */}
          <MyRoutes />
          {/* {
            navbar.map(val => {
              return (
                <Route key={val.id} path={val.path} element={val.element} />
              );
            })
          } */}
          {/* <Route path="*" element={<h1>404 not found</h1>} />
          <Route path="/" element={<Navigate to={"/home"} />} /> */}
          {/* <Navigate from="/" to="/home" /> */}
        {/* </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
