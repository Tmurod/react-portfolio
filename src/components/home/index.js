import Navbar from "../navbar";
import classes from "./index.module.scss"

const Home = () => {
  return (
    <div>
      <h1 className={classes.cla}>
        hello react
      </h1>
      <Navbar />
    </div>
  );
};

export default Home;