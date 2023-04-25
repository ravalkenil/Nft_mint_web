import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

import CryptoContext from "./Componets/Tredingcoin/CryptoContext";
import App from "./App";
import 'react-alice-carousel/lib/alice-carousel.css';


// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <>
//   <CryptoContext>
//     <Router>
//       <App />
//     </Router>
//   </CryptoContext>
//   </>
ReactDOM.render(
  <>
    <CryptoContext>
    <Router>
      <App />
    </Router>
    </CryptoContext>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
