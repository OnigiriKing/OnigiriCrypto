<h1 align="center">Onigiri Crypto ⚡️</h1>

A React app for checking cryptocurrency prices with data from Bitfinex.

[Live demo](https://onigiri-crypto.netlify.app)

## Features

- A paginated market list with prices in USD and daily percentage changes.
- Coin pages with descriptions, prices, trading volume, and links to Bitfinex.
- Prices that refresh every five seconds while the page is open.
- Loading and unavailable states, plus a fallback for unknown coins.
- A responsive layout built with SCSS.

## Built with

React 18, React Router, Axios, SCSS, Netlify Functions, and the Bitfinex public API.

## Run locally

Requires Node.js and npm.

```bash
git clone https://github.com/OnigiriKing/OnigiriCrypto.git
cd OnigiriCrypto
npm ci
npm start
```

Open [localhost:3000](http://localhost:3000) in your browser.

Local startup uses the hosted price endpoint at `onigiri-crypto.netlify.app`.
No API key or separate local server is needed. A network connection is required
to load market data.

## How the data works

The price hook in `src/hooks/useCoinTicker.js` calls the deployed Netlify
function in `netlify/functions/fetchCoin.js`. That function requests a coin's
ticker from Bitfinex and returns its market data to the app.

The market list shares one ticker response across each row's price, daily
change, and volume. The footer checks Bitfinex's public platform-status endpoint
directly.

## Build

```bash
npm run build
```

The production files are generated in `build/`.

## Styling

The app imports the checked-in stylesheet at `src/dist/style.css`. Its SCSS
sources are in `src/Styles/` and the component folders. Recompile the stylesheet
after editing SCSS; `npm start` and `npm run build` use the existing CSS file.

## Screenshot

![Onigiri Crypto home page](docs/screenshots/home.jpg)
