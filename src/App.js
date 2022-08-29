import React from "react";
import InputForm from "./InputForm.js";
import Giphy from "./Giphy.js";
const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
function App() {
  console.log("apiKey=", apiKey);
  const [giphyUrl, setGiphyUrl] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  function handleTranslate(e) {
    e.preventDefault();
    setError(null);
    setGiphyUrl(null);
    setIsLoading(true);
    let success_callback = (response) => {
      console.log(response);
      if (response.status != 200) {
        setError(
          `Server responded an error. Status code= ${response.status}. Status text=${response.statusText}`
        );
        setIsLoading(false);
        return;
      }

      response.json().then((jsonData) => {
        setGiphyUrl(jsonData.data.embed_url);
      });
    };
    let failure_callback = (error) => {
      setError("Connection error when fetching");
    };

    let url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${
      document.getElementById("text").value
    }&weirdness=0`;
    fetch(url).then(success_callback, failure_callback);
  }

  return (
    <div style={{ margin: "2em" }}>
      <InputForm handleTranslate={handleTranslate} />

      <br />
      {isLoading ? (
        <p style={{ fontSize: "2em", textAlign: "center" }}>Loading...</p>
      ) : (
        ""
      )}
      <Giphy giphyUrl={giphyUrl} error={error} setIsLoading={setIsLoading} />
    </div>
  );
}
export default App;
