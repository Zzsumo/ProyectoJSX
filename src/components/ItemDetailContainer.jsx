import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAsyncItemById } from "../data/getAsyncData";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const params = useParams();
  useEffect(() => {
    async function getProduct() {
      const data = await getAsyncItemById(params.id);
      setProduct(data);
    }
    getProduct();
  }, []);
  return <ItemDetail {...product} />;
}
