import CardProduct from "./CardProduct";

export default function ItemListCont(props) {
  return (
    <section className="sectionCards">
      <CardProduct name="Laptop" price={450} />
      <CardProduct name="Teléfono " price={299.99} />
      <CardProduct name="Auriculares Bluetooth" price={59.99} />
      <CardProduct name="Mochila" price={39.5} />
      <CardProduct name="Reloj Deportivo" price={75} />
      <CardProduct name="Zapatillas Deportivas" price={89.99} />
      <CardProduct name="Remera Overzice" price={15} />
      <CardProduct name="Botella Térmica" price={25} />
      <CardProduct name="Cafetera" price={120} />
      <CardProduct name="Silla de Oficina" price={150} />
    </section>
  );
}
