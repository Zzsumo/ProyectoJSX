export default function ItemListCont(props) {
  const { text, color } = props;

  return <h1 className={`h1-${color}`}>{text}</h1>;
}
