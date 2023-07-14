import intro from "../../../assets/images/intro.png";
import classes from "./index.module.scss";

export const Intro = () => {
  return (
    <div className="d-flex container my-5">
      <div className="py-5">
        <h1 className="py-4">
          Grow your
          subscription
          business
        </h1>
        <p>
          Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.
        </p>
        <button className={classes.btnText}>Get Started</button>
        <button className={classes.btnArrow}>&#8595;</button>
      </div>
      <div>
        <img src={intro} />
      </div>
    </div>
  );
}