import ItemCount from "./ItemCount";
import Button from "./Button";
import "./card.css";

function CardProduct(props) {
  const { image, name, description, stock, price } = props;
  return (
    <div className="card">
      <img src={image} alt="" width="150" height="150" />
      <div className="cad-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
        <div>
          <p className="card-price">{price}</p>
        </div>
        <Button>Agregar al carrito</Button>
        <ItemCount />
      </div>
    </div>
  );
}
export default CardProduct;
