import "./App.css";
import NavBar from "./components/NavBar";
import products from "../data";
import CardProduct from "./components/CardProduct";
import FlexContainer from "./components/FlexContainer";

function App() {
  const list = products.map((prod) => (
    <CardProduct key={prod.id} name={prod.name} price={prod.price} />
  ));
  return (
    <>
      <NavBar />
      <FlexContainer>{list}</FlexContainer>
    </>
  );
}

export default App;
