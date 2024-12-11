import "./App.css";
import ItemListCont from "./components/ItemListCont";

import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListCont text="Bienvenido a mi Proyecto JSX!" color="brown" />
    </>
  );
}

export default App;
