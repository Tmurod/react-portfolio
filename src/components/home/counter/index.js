import classes from "./index.module.scss";
import man from "../../../assets/images/counter-man.png";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  const navigate = useNavigate();
  return (
    <div className="container d-flex py-5 my-5 justify-content-around align-items-center">
      <div>
        <img src={man} />
      </div>
      <div>
        <h1 className={classes.title}>
          Subscription index
        </h1>
        <p>
          A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.
        </p>
        <a className="text-primary text-decoration-none" onClick={() => navigate('/blog')} >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default Counter;