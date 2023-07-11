import { Intro } from "./intro";
import Navbar from "../navbar";
import classes from "./index.module.scss"
import Logos from "./logos";
import Counter from "./counter";
import Onshop from "./onshop";

const Home = () => {
  return (
    <div>
      <Intro />
      <Logos />
      <Counter />
      <Onshop />
    </div>
  );
};

export default Home;