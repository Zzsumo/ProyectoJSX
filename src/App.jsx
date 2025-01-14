import "./App.css";
import CardProduct from "./components/CardProduct";

import FlexContainer from "./components/FlexContainer";
import ItemListCont from "./components/ItemListCont";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListCont text="Bienvenido a mi Proyecto JSX!!!" color="brown" />
      <section>
        <FlexContainer>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
          <CardProduct></CardProduct>
        </FlexContainer>
      </section>
    </>
  );
}

export default App;
