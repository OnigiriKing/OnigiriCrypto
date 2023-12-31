export default function homeSvg(width) {
  const svg = {
    wallet: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.28A2 2 0 0 0 22 15V9a2 2 0 0 0-1-1.72V5a2 2 0 0 0-2-2H5m0 2h14v2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6v2H5V5m8 4h7v6h-7V9m3 1.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5Z"
        />
      </svg>
    ),

    btc: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 14 14"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M7.88 6.66h0a1.37 1.37 0 0 0 1.39-1.37h0A1.37 1.37 0 0 0 7.9 3.92H5.79a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h2.09a1.62 1.62 0 1 0 0-3.24Zm.02 0H5.29m.95-2.74V3m1.54.92V3m-1.54 8V9.9M7.78 11V9.9" />
          <circle cx="7" cy="7" r="6.5" />
        </g>
      </svg>
    ),

    tool: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M5.329 3.272A3.5 3.5 0 0 1 9.8 7.745L20.646 18.59l-2.121 2.122L7.679 9.867a3.5 3.5 0 0 1-4.472-4.474L5.443 7.63a1.5 1.5 0 0 0 2.122-2.121L5.329 3.272Zm10.367 1.883l3.182-1.768l1.415 1.415l-1.768 3.182l-1.768.353l-2.121 2.121l-1.415-1.414l2.122-2.121l.353-1.768Zm-7.07 7.778l2.12 2.122l-4.95 4.95a1.5 1.5 0 0 1-2.218-2.015l.097-.107l4.95-4.95Z"
        />
      </svg>
    ),
    nft: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 14 14"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="8.5" cy="4" r="1" />
          <circle cx="4.5" cy="9.5" r=".5" />
          <circle cx="4.5" cy="5.5" r="1" />
          <path d="M9.52 12.28a1 1 0 0 0-.65-.88a2 2 0 0 1 .63-3.9h1.87a2 2 0 0 0 1.89-2.67a6.5 6.5 0 1 0-6.13 8.67a6.3 6.3 0 0 0 1.74-.24a.9.9 0 0 0 .65-.98Z" />
        </g>
      </svg>
    ),
    global: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 20 20"
      >
        <path
          fill="currentColor"
          d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0Zm0 1.395a8.605 8.605 0 1 0 0 17.21a8.605 8.605 0 0 0 0-17.21Zm2.048 2.093a6.702 6.702 0 0 1 1.802 1.024c.125.096.245.198.363.307c.022.019.041.039.062.06c.328.303.626.644.89 1.01c.037.051.076.098.11.147c.064.094.124.192.184.29a6.024 6.024 0 0 1 .285.51c.053.1.1.209.149.315c.033.073.07.148.1.226c.073.182.138.365.197.552c.019.062.034.128.052.19a6.726 6.726 0 0 1 .215 1.087c.007.066.017.136.022.201c.02.215.033.432.033.65a7.186 7.186 0 0 1-.117 1.27c-.014.073-.026.147-.04.217c-.04.19-.086.376-.14.56c-.509-.233-1.107-.576-1.263-.953c-.284-.68-1.04-1.02-1.348-1.896c-.507-1.45.166-1.412.26-2.312c.044-.422-.26-.51-.661-.338c-.936.393-1.253.242-1.442-.463c-.189-.703 0-.899 0-.899c-.638.07-.662-.707-.331-.903c.23-.132.425-.537.618-.852ZM9.374 7.797c.59-.27 1.135-.367 1.063-.831c-.07-.459-.236-.801-1.158-.801c-.922 0-.52 1.265-1.276.51c-.756-.75.165-.556.543-.727c.379-.172.757-.877.095-.927c-.661-.047-.52.292-1.04.1c-.52-.196-.756.679-1.088.557c-.218-.082-.803-.532-1.191-.975a7 7 0 0 0-1.834 2.51c.113 1.307.804 1.993.804 1.993s.355.851 2.483 1.897c0 0 .4.024-.072-.461c-.472-.487-.993-1.095-.402-1.41c.59-.319.757-.292.899.293c.141.584.615.24.661-.319c.048-.557.922-1.14 1.513-1.41Zm-.45 2.94c1.018 0 .923.317 1.727 1.025c.803.704.378 1.409-.025 1.945c-.401.534-.756 1.14-.945 2.238c-.19 1.094-.686.314-.85.047c-.166-.269-.426-.511-.354-1.63c.07-1.118-.687-.46-.946-1.92c-.26-1.458.378-1.704 1.394-1.704Zm4.977.964c.271-.173.92.278.78.753c-.143.475-.591.207-.816 0c-.225-.206-.237-.583.036-.753Z"
        />
      </svg>
    ),
    profit: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8l6.5 3.78Z"
        />
      </svg>
    ),
  };

  return svg;
}
