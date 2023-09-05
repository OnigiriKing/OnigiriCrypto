import React from "react";
import "./style.css";
import OnigiriIcon from "./img/OnigiriIcon.png";
import btcImg from "./img/BTC.png";
import ethImg from "./img/ETH.png";
import signInImg from "./img/sign-in.png";
import signOutImg from "./img/sign-out.png";
import balanceImg from "./img/balance.png";
import CryptoPrice from "../API/FetchCryptoPrice";
import { Link, NavLink } from "react-router-dom";

function DropBoxItems({ change }) {
  const cryptoTypes = [
    { Name: "Bitcoin", Type: "BTC", Img: btcImg },
    { Name: "Ethereum", Type: "ETH", Img: ethImg },
  ];

  return cryptoTypes.map((el, index) => {
    return (
      <li key={index} onClick={() => change(el.Type)}>
        <img src={el.Img} />
        <h4 style={{ marginLeft: "5px" }}>{el.Name}</h4>
      </li>
    );
  });
}

function Wallet({ state, change }) {
  const walletOptions = [
    { Name: "Balance", Link: "Balance", Img: balanceImg },
    { Name: "Sign out", Link: "SignOut", Img: signOutImg },
  ];

  const deff = (
    <li onClick={(a) => change(true)} className="wallet-list-element">
      <a href="SignIn">
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
              if (el.Name === "Sign out") change(false);
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


  return (
    <header className="headerWrapper">
      <div className="iconWrapper">
        <Link to="/graph">
          <img src={OnigiriIcon} />
          <h4>Onigiri Crypto</h4>
        </Link>
      </div>
      <div
        className="btcPriceHeader"
        onMouseEnter={() => changeCryptoDrop(true)}
        onMouseLeave={() => changeCryptoDrop(false)}
      >
        <CryptoPrice crypto={crypto} />
        <ul
          className={`dropBox crypto-price-drop-box ${
            cryptoDropped ? "dropBoxOpen" : "dropBoxClosed"
          }`}
        >
          <DropBoxItems change={setCrypto} />
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
        <span>
          <NavLink to={"/graph"} state={"graph"}>
            <h4 style={{ color: "black" }}>Trading</h4>
          </NavLink>
        </span>
        <span>
          <NavLink to={"/about"}>
            <h4 style={{ color: "black" }}>About</h4>
          </NavLink>
        </span>
      </div>
    </header>
  );
}
