import React from "react";


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




  return (
    <header className="header-page">

    </header>
  );
}

