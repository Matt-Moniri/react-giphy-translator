function Giphy(props) {
  return (
    <div style={{ textAlign: "center" }}>
      {props.giphyUrl ? (
        <iframe
          onLoad={() => {
            props.setIsLoading(false);
          }}
          title="giphyGif"
          src={props.giphyUrl}
          width="475"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      ) : (
        ""
      )}
      {props.error ? <h3>{props.error}</h3> : ""}
    </div>
  );
}
export default Giphy;
