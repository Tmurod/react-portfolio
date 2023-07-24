import { useState } from "react"

export const Blog = () => {
  const [count, setCount] = useState(0);
  const [select, setSelect] = useState(0);
  const onSelect = () => {
    setSelect()
  }
  return (
    < div className="container text-center py-5 my-5 border">
      <select className="my-5">
        <option value={1}>{select}</option>
        <option value={2}>{select}</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <h1>{count}</h1>
      <div className="d-flex justify-content-center gap-5">
        <button onClick={() => setCount(count + 1)}
          className="btn btn-success"
        >inc</button>
        <button onClick={() => setCount(count - 1)}
          className="btn btn-danger"
        >dec</button>
      </div>
    </ div>
  );
}