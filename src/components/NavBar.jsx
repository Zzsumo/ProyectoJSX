import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav class="navbar">
      <div class="logo">REACT</div>
      <ul class="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div class="cart">
        <CartWidget />
        &#128722;
      </div>
    </nav>
  );
}
