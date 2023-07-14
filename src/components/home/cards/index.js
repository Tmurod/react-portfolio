import classes from "./index.module.scss";

const Cards = ({ val }) => {
  return (
    <div className={classes.cards}>
      <p className={classes.info}>
        {val.title}
      </p>
      <h1 className={classes.price}>
        {val.price}
      </h1>
      <p className={classes.info}>
        {val.site}
      </p>
      <p className={classes.info}>
        {val.hosting}
      </p>
      <p className={classes.info}>
        {val.limit}
      </p>
      <button className={classes.btn}>
        {val.button}
      </button>
    </div>
  );
}

export default Cards;