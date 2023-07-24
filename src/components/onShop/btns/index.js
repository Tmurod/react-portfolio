import { useState } from "react";

const Btns = (props) => {
  const [btns, setData] = useState(false);
  const btnsClasses = btns ? "btn m-3 btn-success" : "btn m-3 btn-danger";
  return (
    <button className={btnsClasses}
      onClick={() => setData(prev => !prev)}
    >
      {props.val}
    </button>
  );
}

export default Btns;