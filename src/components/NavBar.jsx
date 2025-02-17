import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav class="navbar">
      <div class="logo">REACT</div>
      <ul class="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/item/">Detalle</Link>
        </li>
      </ul>
      <div class="cart">
        <CartWidget />
        &#128722;
      </div>
    </nav>
  );
}
