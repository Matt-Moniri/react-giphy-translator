import React from "react";
// const url = // create the url based on the API of newsapi.org
//   "https://newsapi.org/v2/everything?" +
//   `q=${"apple"}&` + // these properties are captured by the listeners set on #queryForm
//   `from=${"2022-7-01"}&` +
//   `to=${"2022-7-02"}&` +
//   "apiKey=7bfdc32cdfe64d96b00bb916d1c41d9d" +
//   "pageSize=100";
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=${apiKey}`;
//const url2 = `https://api.openweatherdfdfmap.org/data/2.5/weather?q=london&units=metric&appid=1284e08ee36b9b7b69a0eeca0f788b05`;

console.log(url);

function App() {
  const [data, setData] = React.useState(null);

  function fetchNews() {
    let success_callback = (response) => {
      console.log("success");
      //console.log(response);
      response.json().then((jsonData) => {
        console.log(jsonData);
        setData(jsonData);
      });
    };

    let failure_callback = (error) => {
      console.log("Failed");

      console.log(error);
    };
    console.log("before fetch");
    fetch(url).then(success_callback, failure_callback);
    // after fetch is logged before the success_callback is run
    // The success_callback is run only when the promise is that produced by fetch(url) is fulfilled
    console.log("after fetch");
  }
  //--
  return (
    <div>
      <button onClick={fetchNews}>Fetch News</button>
      <div>{data ? data.main.temp : ""}</div>
    </div>
  );
}

// fetch(url) => outputs a promise
// a promise may not fulfilled yet
//    the promise will be in a pending state
//    once the data is retrieved from the server, the promise will be in a fulfilled
// while the promise is in a pending state we attach a subscriber which is the success_callback

export default App;
