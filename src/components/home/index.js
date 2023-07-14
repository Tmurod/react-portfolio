import { Intro } from "./intro";
import Logos from "./logos";
import Counter from "./counter";
import Onshop from "./onshop";
import IconCards from "./iconCard";
import Cards from "./cards";
import card from "../../utils/cards";
import classes from "./index.module.scss"
import CardTitle from "./cards/index.jsx";

const Home = () => {
  return (
    <div>
      <Intro />
      <Logos />
      <Counter />
      <Onshop />
      <IconCards />
      <div className="container d-flex flex-column py-5">
        <div>
          <CardTitle />
        </div>
        <div className="d-flex justify-content-between py-5">
          {
            card.map(val => {
              return (
                <Cards val={val} key={val.id} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Home;