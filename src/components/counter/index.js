import { useState } from "react"
import { Value } from "sass";

export const Blog = () => {
  const [count, setCount] = useState(1);
  const [select, setSelect] = useState(0);

  const onSelect = ({ target: { value } }) => {
    setSelect(value);
    setCount(value)
  }

  return (
    < div className="container text-center py-1 my-1 border">
      <select className="my-5 form-select text-center mb-5" onClick={onSelect}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <h1 className="my-3 py-3 mt-5">{count}</h1>
      <div className="d-flex justify-content-center gap-5 pb-5">
        <button onClick={() => setCount(+count + +select)}
          className="btn btn-success"
        >inc</button>
        <button onClick={() => setCount(+count - +select)}
          className="btn btn-danger"
        >dec</button>
      </div>
    </ div>
  );
}