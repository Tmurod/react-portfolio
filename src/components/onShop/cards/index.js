import { useState } from "react";

const CardShop = ({ val }) => {
  const [info, setInfo] = useState(false);
  const btnClasses = info ? "btn btn-danger my-2" : "btn btn-success my-2";
  return (
    <div className="container text-center border my-5 w-75 rounded">
      <h3 className="text-center py-5">
        {val.title}
      </h3>
      <img src={val.image} className="w-25" />
      <h5 className="my-5">
        {
          info &&
          val.description
        }
      </h5>
      <button
        className={btnClasses}
        onClick={() => setInfo(prev => !prev)}
      >
        Show info
      </button>
    </div>
  );
}

export default CardShop;