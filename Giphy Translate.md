## GIPHY Translate

Create a React app that uses the GIPHY Translate API - https://developers.giphy.com/docs/api/endpoint#translate (you will need to get an API key to use the API).

Your app should have a text box, and a button for "Translate".

A user can enter a phrase, and your app should use the API to fetch the right gif for that phrase.

**Remember:** Do not store your API key in your code. Create a file called `.env.local` and put your key there:
```
REACT_APP_GIPHY_API_KEY=apikeygoeshere
```

You can use the API key in your code like this:
```js
const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY
```

### Extensions

#### 1. Weirdness

The Translate API also has an option for specifying a "weirdness" value from 1 to 10.

Add a drop-down select box that lets the user specify the weirdness. Make sure that it re-fetches from the GIPHY API when the weirdness changes.

#### 2. Search with infinite scroll

The API also has a search endpoint which returns multiple gifs in the response, load the first 20 gifs and display them. If the user scrolls down the bottom of the list, load the next page of results. If the user keeps scrolling, keep loading more search results until the API doesn't return any more pages of results.