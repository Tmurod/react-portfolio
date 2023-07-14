import { useNavigate } from "react-router-dom";
import man from "../../../assets/images/Content Image.png";

const Onshop = () => {
  const navigate = useNavigate()
  return (
    <div className="container d-flex justify-content-around align-items-center">
      <div>
        <h2>
          In-depth metrics
        </h2>
        <p>
          Accurate, real-time reporting at your fingertips. Getting data has never been easier.
        </p>
        <a className="text-primary text-decoration-none" onClick={() => navigate("/pricing")}>
          Learn more
        </a>
      </div>
      <img src={man} />
    </div>
  );
}

export default Onshop;