import "./App.css";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListCont from "./components/ItemListCont";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListCont greeting="Bienvenido a mi E-commerce" />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
