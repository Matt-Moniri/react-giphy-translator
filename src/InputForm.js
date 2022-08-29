function InputForm(props) {
  return (
    <form
      onSubmit={props.handleTranslate}
      style={{ textAlign: "center", fontSize: "1.5em" }}
    >
      <input
        type="text"
        id="text"
        style={{ fontSize: "1.5em", marginRight: "0.5em" }}
      ></input>
      <input type="submit" value="Translate" style={{ fontSize: "1.5em" }} />{" "}
    </form>
  );
}
export default InputForm;
