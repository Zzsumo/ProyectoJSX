import Item from "./Item";
import FlexContainer from "./FlexContainer";

function ItemList(props) {
  return (
    <div>
      <h2 className="greeting">{props.greeting}</h2>

      <FlexContainer>
        {props.products.map((prod) => (
          <Item
            key={prod.id}
            id={prod.id}
            name={prod.name}
            price={`$${prod.price}`}
            img={prod.img}
            text={prod.text}
          />
        ))}
      </FlexContainer>
    </div>
  );
}

export default ItemList;
