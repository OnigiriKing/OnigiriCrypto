import React from "react";
import "./style.css";
import OnigiriIcon from "./img/OnigiriIcon.png";
import btc from "./img/BTC.png";
import eth from "./img/ETH.png";
import signInImg from "./img/sign-in.png";
import signOutImg from "./img/sign-out.png";
import balanceImg from "./img/balance.png";

function changeCrypto(answer, change) {
  answer === "ETH" ? change("ETH") : change("BTC");
}

function DropBoxItems({ type, change }) {
  const image = type.toLowerCase() == "btc" ? btc : eth;

  const cryptoName = type === "BTC" ? "Bitcoin" : "Ethereum";
  return (
      <li onClick={() => changeCrypto(type, change)}>
        <img src={image} />
        <h4 style={{ marginLeft: "5px" }}>{cryptoName}</h4>
      </li>
  );
}

function Wallet({ state, change }) {
  const walletOptions = [
    { Name: "Balance", Link: "Balance", Img: balanceImg },
    { Name: "Sign out", Link: "Sign", Img: signOutImg },
  ];

  const deff = (
    <li onClick={(a) => change(true)} className="wallet-list-element">
      <a href="#">
        <img src={signInImg}></img>
        Sign in
      </a>
    </li>
  );

  return state
    ? walletOptions.map((el, index) => {
        return (
          <li
            onClick={(a) => {
              if (el.Name === "Sign out") change(false)
            }}
            key={index}
            className="wallet-list-element"
          >
            <a href={el.Link}>
              <img src={el.Img}></img>
              {el.Name}
            </a>
          </li>
        );
      })
    : deff;
}

export default function Header() {
  // Crypto price state
  const [crypto, setCrypto] = React.useState(
    window.localStorage.getItem("Crypto") || "BTC"
  );

  React.useEffect(() => {
    window.localStorage.setItem("Crypto", crypto);
  }, [crypto]);

  const [cryptoDropped, changeCryptoDrop] = React.useState(false);

  // wallet state
  const [wallet, setWallet] = React.useState(
    JSON.parse(window.localStorage.getItem("Wallet")) || false
  );

  React.useEffect(() => {
    window.localStorage.setItem("Wallet", wallet);
  }, [wallet]);

  const [walletDropped, changeWalletDrop] = React.useState(false);

  const cryptoPrice =
    crypto === "BTC" ? "BTC price: 26,000" : "ETH price: 2,000";

  return (
    <header className="headerWrapper">
      <div className="iconWrapper">
        <a href="http://localhost:3000/">
          <img src={OnigiriIcon} />
          <h4>Onigiri Exchange</h4>
        </a>
      </div>
      <div
        className="btcPriceHeader"
        onMouseEnter={() => changeCryptoDrop(true)}
        onMouseLeave={() => changeCryptoDrop(false)}
      >
        <h3>{cryptoPrice}</h3>
          <ul
            className={`dropBox crypto-price-drop-box ${
              cryptoDropped ? "dropBoxOpen" : "dropBoxClosed"
            }`}
          >
            <DropBoxItems type="BTC" change={setCrypto} />
            <DropBoxItems type="ETH" change={setCrypto} />
          </ul>
      </div>

      <div className="pageLinks">
        <span
          className="walletHeader"
          onMouseEnter={() => changeWalletDrop(true)}
          onMouseLeave={() => changeWalletDrop(false)}
        >
          <h4 style={{ color: "black" }}>Wallet ⌄</h4>
          <ul
            className={`dropBox walletDrop ${
              walletDropped ? "dropBoxOpen" : "dropBoxClosed"
            }`}
          >
            <Wallet state={wallet} change={setWallet} />
          </ul>
        </span>
      </div>
    </header>
  );
}
