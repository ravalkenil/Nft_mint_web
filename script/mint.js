require("dotenv").config({path: '../.env'});
const API_URL=process.env.API_URL
console.log(API_URL);
const Public_key=process.env.PUBLIC_KEY
console.log(Public_key);
const Private_key=process.env.PRIVATE_KEY
const { createAlchemyWeb3 }=require("@alch/alchemy-web3")
const web3=createAlchemyWeb3(API_URL)
const Abi=require("../build/contracts/MyToken.json")

const contractaddress="0x41874ab9B6f08fCC6ae63253A3d0C9D824bC06d2";
const nftcontract= new web3.eth.Contract(Abi.abi,contractaddress)

async function Mintnft(tokenurl){
    const nonce= await web3.eth.getTransactionCount(Public_key,"latest");
    const tx={
        'form':Public_key,
        'to' :contractaddress,
        'nonce':nonce,
        'gas':500000,
        'data':nftcontract.methods.safeMint(Public_key,tokenurl).encodeABI(),
    }

    const signPromise = web3.eth.accounts.signTransaction(tx, Private_key);
    signPromise.then((signedTx) => {
      web3.eth.sendSignedTransaction(
        signedTx.rawTransaction,
        function (err, hash) {
          if (!err) {
            console.log(
              "The hash of your transaction is: ",
              hash,
              "\nCheck Alchemy's Mempool to view the status of your transaction!"
            );
          } else {
            console.log(
              "Something went wrong when submitting your transaction:",
              err
            );
          }
        }
      );
    })
    .catch((err) => {
      console.log(" Promise failed:", err);
    });
  }
    Mintnft("https://bafkreihke6upixetkrmywmqdbk472ph3jdrr72ji3dyunklbstgfv6is6m.ipfs.nftstorage.link/"
  );
// }

