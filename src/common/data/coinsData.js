import btcImg from "img/crypto/btc.png"
import ethImg from "img/crypto/eth.png"
import leoImg from "img/crypto/leo.png"
import avaxImg from "img/crypto/avax.png"
import xrpImg from "img/crypto/xrp.png"
import linkImg from "img/crypto/link.png"
import adaImg from "img/crypto/ada.png";
import solImg from "img/crypto/sol.png";
import ltcImg from "img/crypto/ltc.png";
import dotImg from "img/crypto/dot.png";

export const welcomeCoins = {
  BTC: {
    name: "Bitcoin",
    sigh: "BTC",
    img: btcImg,
  },
  ETH: {
    name: "Ethereum",
    sigh: "ETH",
    img: ethImg,
  },
  LEO: {
    name: "Leo",
    sigh: "LEO",
    img: leoImg,
  },
  AVAX: {
    name: "Avalanche",
    sigh: "AVAX:",
    img: avaxImg,
  },
};


export const coinList = {
  BTC: {
    name: "Bitcoin",
    sigh: "BTC",
    img: btcImg,
    des: "Bitcoin is a cryptocurrency launched in January 2009, where the first genesis block was mined on 9th January 2009. It is a decentralized digital currency that is based on cryptography.",
    rank: "1",
  },
  ETH: {
    name: "Ethereum",
    sigh: "ETH",
    img: ethImg,
    des: "Ethereum is a Proof-of-Stake blockchain that powers decentralized applications (dApps) through smart contracts, without being controlled by a centralized entity.",
    rank: "2",
  },
  AVAX: {
    name: "Avalanche",
    sigh: "AVAX:",
    img: avaxImg,
    des: "Avalanche is a high throughput smart contract blockchain platform. Validators secure the network through a proof-of-stake consensus protocol. It is said to be fast, low cost, and environmental friendly.",
    rank: "23",
  },
  LEO: {
    name: "Leo",
    sigh: "LEO",
    img: leoImg,
    des: "UNUS SED LEO is a utility token designed to empower the Bitfinex community and provide utility for those seeking to maximize the output and capabilities of the Bitfinex trading platform.",
    rank: "21",
  },
  XRP: {
    name: "XRP",
    sigh: "XRP",
    img: xrpImg,
    des: "Ripple is a privately-held fintech company that provides a global payment solution via its patented payment network called Ripple Network (also known as RippleNet).",
    rank: "5",
  },
  LINK: {
    name: "Chainlink",
    sigh: "LINK:",
    img: linkImg,
    des: "Chainlink is a framework for building Decentralized Oracle Networks (DONs) that bring real-world data onto blockchain networks, enabling the creation of hybrid smart contracts. These DONs provide decentralized services such as Price Feeds, Proof of Reserve, Verifiable Randomness, Keepers, and the ability to connect to any web API. ",
    rank: "18",
  },
  ADA: {
    name: "Cardano",
    sigh: "ADA",
    img: adaImg,
    des: "Cardano is a proof-of-stake blockchain network that supports decentralized applications (dApps) with a multi-asset ledger and smart contracts. Unlike many other blockchains, Cardano does not build on top of technical foundations from Bitcoin or other blockchains. Instead Cardano works with leading academics on research to develop new and innovative solutions, which are subjected to academic peer review and presented at major international conferences. The team then builds a prototype to understand real-world technical and functional implementation issues, enabling the creation of technical specifications before formal development begins.",
    rank: "9",
  },
  SOL: {
    name: "Solana",
    sigh: "SOL",
    img: solImg,
    des: "Solana is a blockchain network for payments and decentralized applications. SOL is its native token, used to pay transaction fees and help secure the network through staking.",
  },
  LTC: {
    name: "Litecoin",
    sigh: "LTC",
    img: ltcImg,
    des: "Litecoin is a peer-to-peer cryptocurrency designed for digital payments. Its network uses proof of work to confirm transactions without a central authority.",
  },
  DOT: {
    name: "Polkadot",
    sigh: "DOT",
    img: dotImg,
    des: "Polkadot is a blockchain network designed to connect specialized blockchains so they can share data and security. DOT is its native token, used for staking and network governance.",
  },
};
