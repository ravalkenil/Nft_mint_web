// import '@rainbow-me/rainbowkit/styles.css';

// import {
//   getDefaultWallets,
//   RainbowKitProvider,
// } from '@rainbow-me/rainbowkit';
// import { configureChains, createClient, WagmiConfig } from 'wagmi';
// import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
// // import { alchemyProvider } from 'wagmi/providers/alchemy';
// // import { publicProvider } from 'wagmi/providers/public';

// const { chains, provider } = configureChains(
//     [mainnet, polygon, optimism, arbitrum],
//     [
//       // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
//       // publicProvider()
//     ]
//   );
  
//   const { connectors } = getDefaultWallets({
//     appName: 'My RainbowKit App',
//     chains
//   });
  
//   const wagmiClient = createClient({
//     autoConnect: true,
//     connectors,
//     provider
//   })


// const App1 = () => {
//     return (
//       <WagmiConfig client={wagmiClient}>
//         <RainbowKitProvider chains={chains}>
//           <App/>
//         </RainbowKitProvider>
//       </WagmiConfig>
//     );
//   };

// export default App1;

import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';
import Image from "../image/crypto.gif"
import Ztext from 'react-ztext'
import App1 from "../new"
// import { ethers } from "ethers";
// import Abi from "./MyToken.json"
export const YourComponent = ({state}) => {
  const [text, setfirst] = useState('');
  const [set, setid] = useState('');

  const addRecentTransaction = useAddRecentTransaction();
  const Mintnft=async(e)=>{
    e.preventDefault()
    console.log("xsadx");
      const {contract}=state;
      const Seturi="https://bafkreihke6upixetkrmywmqdbk472ph3jdrr72ji3dyunklbstgfv6is6m.ipfs.nftstorage.link/"
      console.log("this is text",text);
      const mint= await contract.safeMint(text,Seturi)
      const mint2=await mint.wait();
      // console.log();
      const tokenid=Number(mint2.events[0].args.tokenId)
      setid(tokenid)
      // const iface= new ethers.utils.Interface(Abi.abi)
      // const parselog=iface.parseLog(mint2.logs)
      // console.log(parselog);
      console.log("transection is done"); 


  }



  return (
    <>

    <div class="row w-100 ">
    
    <div className="col-sm-7 w-25 " style={{marginTop:"15%",marginLeft:"10%"}}>
      <form onSubmit={Mintnft}>
        <input className="form-control" type="text" id="text" placeholder="Enter account address" value={text} onChange={(e)=>setfirst(e.target.value)}></input>
        <br></br>
        <h3 style={{color:"white"}}>Your token id is :{set}</h3>
        <button  className="btn btn-primary" type="submit">Transfer</button>
      </form>
    </div>
    <div className="col-sm-6">
      <img style={{width:"80%",marginTop:"15%",marginLeft:"25%",boxShadow: "20px 20px 35px 0 rgba(255,255,255, 0.9)" ,transition: "box-shadow 100ms"}} src={Image} alt=""/>
    </div>
    {/* <App1/> */}
  
  
   
  </div>
  
    </>
    

  );
};