import ItemList from "./ItemList";
import getAsyncData from "../data/getAsyncData";
import { useState, useEffect } from "react";

export default function ItemListCont(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const respuestaPromise = getAsyncData();

    respuestaPromise
      .then((respuesta) => setProducts(respuesta))
      .catch((error) => alert(error));
  }, []);
  return (
    <div>
      <ItemList greeting={props.greeting} products={products} />
    </div>
  );
}
