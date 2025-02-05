function FlexContainer(props) {
  const styleFlex = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    gap: "40px",
    margin: "15vh",
  };

  return <div style={styleFlex}>{props.children}</div>;
}

export default FlexContainer;
