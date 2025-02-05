import { useState } from "react";

function itemCount() {
  let [count, setCount] = useState(1);
  const handleAdd = () => {
    let cont = setCount(count + 1);
  };
  const handleSubstract = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button className="btnMas" onClick={handleAdd}>
        +
      </button>
      <span>{count}</span>
      <button className="btnMenos" onClick={handleSubstract}>
        -
      </button>
    </div>
  );
}
export default itemCount;
