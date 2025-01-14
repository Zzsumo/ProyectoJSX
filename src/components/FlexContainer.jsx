function FlexContainer(props) {
  const styleFlex = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    gap: "20px",
  };

  return <div style={styleFlex}>{props.children}</div>;
}

export default FlexContainer;
