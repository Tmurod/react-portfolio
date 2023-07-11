import group from "../../../assets/icons/Group.svg"
import group1 from "../../../assets/icons/Group (1).svg";
import group2 from "../../../assets/icons/Group (2).svg"
import group3 from "../../../assets/icons/Group (3).svg"
import group4 from "../../../assets/icons/Group (4).svg";

const Logos = () => {
  return (
    <div className="container d-flex justify-content-between">
      <img src={group} />
      <img src={group1} />
      <img src={group2} />
      <img src={group3} />
      <img src={group4} />
    </div>
  );
}

export default Logos;