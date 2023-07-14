import icon from "../../../assets/images/Icon 001.png"
import icon1 from "../../../assets/images/Icon 002.png"
import icon2 from "../../../assets/images/Icon 003.png"
import classes from "./index.module.scss";

const IconCards = () => {
  return (
    <div className="container d-flex justify-content-between py-5 ">
        <div className="">
          <img src={icon} className={classes.img} />
          <h3 className={classes.title}>
            Benchmarks
          </h3>
          <p className={classes.text}>
            See how you stack up against comparable companies in similar stages.
          </p>
        </div>
        <div>
          <img src={icon1} />
          <h3 className={classes.title}>
            Pricing Audit
          </h3>
          <p className={classes.text}>
            Benchmark the health of your monetization and pricing strategy.
          </p>
        </div>
        <div>
          <img src={icon2} />
          <h3 className={classes.title}>
            Retention Audit
          </h3>
          <p className={classes.text}>
            Audit where revenue leakage exists and where you can increase retention.
          </p>
        </div>
    </div>
  );
}

export default IconCards