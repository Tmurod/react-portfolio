import classes from "./index.module.scss";

const CardTitle = () => {
  return(
    <div className="d-flex justify-content-between py-5">
      <div>
        <h1 className={classes.title}>
          Get the right plan for future product.
        </h1>
      </div>
      <div className="btn-group align-items-center">
        <button className={classes.yearly}>Yearly</button>
        <button className={classes.monthly}>Monthly</button>
      </div>
    </div>
  );
}

export default CardTitle