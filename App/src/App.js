// import "./App.css";
// import Abi from "./MyToken.json"
// // const Abi=require("../build/contracts/MyToken.json")
// import { useState ,useEffect } from "react";
// // const { ethers } = require("ethers");
// import {ethers} from "ethers";
// // const eth= new ethers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/r4vhnw7sqCu54awQJQENXGemhNnGrFhj")
// import { ConnectButton } from '@rainbow-me/rainbowkit';

// function App() {
//   // const Metamaskopen=async()=>{
//   //   if(window.ethereum){
//   //     window.ethereum.request({method: 'eth_requestAccounts'})
//   //   }
//   // }
//   const [state, setState] = useState({
//     provider: null,
//     signer: null,
//     contract: null,
//   });
//   useEffect(()=>{
//     const connectWallet = async () => {
//       const contractaddres="0x41874ab9B6f08fCC6ae63253A3d0C9D824bC06d2";
//       const contrcatAbi=Abi.abi;
//       try{
//         const {ethereum}=window;
//         if(ethereum){
//           const account= await ethereum.request({
//             method: 'wallet_requestPermissions',
//             params: [{ eth_accounts: {} }],
//           })
//           // const account1= await ethereum.request({method:"eth_requestAccounts"})
//         }
//         const provider = new ethers.providers.Web3Provider(ethereum)
//         console.log(provider);
//         const signer=provider.getSigner();
//         const contract= new ethers.Contract(contractaddres,contrcatAbi,signer);
//         setState({provider,signer,contract})
//       }
//       catch(error){ 
//         console.log(error);
//       }
//     }
//     connectWallet();
//   },[])
//   return (
//     <>
//       <h1>Hello World</h1>
//       {/* <button type="submit" onClick="" >Connect</button> */}
      
//       <ConnectButton/>
//     </>
//   );
// }

// export default App;



import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
// import { YourComponent } from "../src/Componets/YourComponent";
import { useState ,useEffect } from "react";
import Abi from "./MyToken.json";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App1 from "./new"
import Layout from "./Componets/Layout";
const { ethers } = require("ethers");

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum,chain.polygonMumbai,chain.goerli],
  [alchemyProvider({ alchemyId: "https://polygon-mumbai.g.alchemy.com/v2/r4vhnw7sqCu54awQJQENXGemhNnGrFhj" }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

export default function App() {
  const [state, setState] = useState({provider: null,signer: null,contract: null});
  useEffect(()=>{
    const connectWallet = async () => {
      const contractaddres="0x7951cE708EFA995C7ae6D5cE443932F84Ec93de4";
      const contrcatAbi=Abi.abi;
      try{
        const {ethereum}=window;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer=provider.getSigner();
        const contract= new ethers.Contract(contractaddres,contrcatAbi,signer);
        setState({provider,signer,contract})
      }
      catch(error){
        console.log(error);
      }
    }
    connectWallet();
  },[])

  return (
    <div>
      {/* <img src={image} alt="" height="803" width=""/> */}
      <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider  showRecentTransactions={true} coolMode chains={chains}>
       
          <Layout state={state} />
       
      </RainbowKitProvider>
     </WagmiConfig>
    </div>
    
  );
}