import ItemCount from "./ItemCount";
import Button from "./Button";
import "./card.css";
import { Link } from "react-router-dom";

function Item(props) {
  const { image, name, description, price, id } = props;
  return (
    <div className="card">
      <img src={image} alt="" width="150" height="150" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
        <div>
          <p className="card-price">{price}</p>
        </div>
        <Link to={`/item/${id}`}>
          <Button>Detalle</Button>
        </Link>
      </div>
    </div>
  );
}
export default Item;

//CardProduct
