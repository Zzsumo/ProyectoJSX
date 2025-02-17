import { useState } from "react";

function itemCount() {
  let [count, setCount] = useState(1);
  const handleAdd = () => {
    let cont = setCount(count + 1);
  };
  const handleSubstract = () => {
    count > 1 && setCount(count - 1);
  };
  return (
    <div>
      <button className="btnMas" onClick={handleSubstract}>
        -
      </button>
      <span>{count}</span>
      <button className="btnMenos" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}
export default itemCount;
