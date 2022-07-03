import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";
import { contractAbi, contractAddress, base_url } from "./utils/constants";
import { SiOpenaccess } from "react-icons/si";

const { ethereum } = window;
const AppContext = createContext();

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );
  return transactionContract;
};

const ProjectContext = ({ children }) => {
  const [featured, setFeatured] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(localStorage.getItem("total"));
  const [total, setTotal] = useState(
    JSON.parse(
      localStorage.getItem("total") === "" ? 0 : localStorage.getItem("total")
    )
  );
  const [formData, setFormData] = useState({
    addressTo: "0xFAE11733125aFa5C87532569858618eb324cBd72",
    amount: "",
    message: "sold gloccery",
    keyword: "checkout",
  });
  const [currentAccount, setCurrentAccount] = useState("");
  const [user, setCurrentUser] = useState([]);
  const [connected, setConnected] = useState(true);
  const [val, setValue] = useState(1);
  const [isLoading, setisLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [convertedCurrency, setConvertedCurrency] = useState(
    JSON.parse(localStorage.getItem("convertCurrency"))
  );
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      console.log(accounts);

      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
      }

      //getAllTransactions()
    } catch (error) {
      throw Error("No ethereum object.");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
      console.log("accounts");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts[0]);
      localStorage.setItem("account", JSON.stringify(accounts[0]));
      setCurrentAccount(accounts[0]);
      setConnected(!connected);

      console.log(accounts);
    } catch (error) {
      console.log(error);
      throw Error("No ethereum object.");
    }
  };

  const disConnectWallet = async () => {
    // window.ethereum.clearCachedProvider();
    // await window.ethereum.request({
    //   method: "wallet_requestPermissions",
    //   params: [
    //     {
    //       eth_accounts: { from: currentAccount },
    //     },
    //   ],
    // });
    console.log("disconnect");
    setConnected(!connected);
  };

  const sendTransaction = async () => {
    try {
      let sales = JSON.parse(localStorage.getItem("Kcart"));

      if (!ethereum) return alert("Please install metamask");

      if (currentAccount === "") {
        return setConnected(false);
      } else {
        setConnected(true);
        console.log(currentAccount);
        const { addressTo, amount, keyword, message } = formData;

        const transactionsContract = getEthereumContract();
        console.log(transactionsContract);
        if (total) {
          const equivalence = await axios.get(
            "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
          );

          console.log(equivalence.data.USD);

          let convertCurrency = total / equivalence.data.USD;

          const parsedAmount = ethers.utils.parseEther(
            // convertCurrency.toString()
            "0.005"
          );

          await ethereum.request({
            method: "eth_sendTransaction",
            params: [
              {
                from: currentAccount,
                to: addressTo,
                gas: "0x5208", //21000 GWEI
                value: parsedAmount._hex,
              },
            ],
          });

          const transactionHash = await transactionsContract.addToblockchain(
            addressTo,
            parsedAmount._hex,
            message,
            keyword
          );
          console.log(transactionHash);
          return transactionHash;
        }
      }
    } catch (error) {
      console.log(error);
      throw Error("No ethereum object.");
    }
  };

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    getData();
    let local = JSON.parse(
      localStorage.getItem("Kcart") === "" ? [] : localStorage.getItem("Kcart")
    );
    setCart(local);
  }, []);
  const getData = async () => {
    try {
      axios
        .get(`${base_url}/api/inventory/get-inventories`, config)
        .then(function (response) {
          console.log(response.data.inventory);
          if (response.data.success) {
            var f = response.data.inventory.filter(
              (item) => item.type === "featured"
            );
            var n = response.data.inventory.filter(
              (item) => item.type === "new"
            );

            setFeatured(f);
            setNewArrival(n);
          }
        });
    } catch (error) {}
  };

  const handleChange = (e, id) => {
    let val = e.target.value;

    var tempArray = [];
    var obj = {};
    let localCart = JSON.parse(localStorage.getItem("Kcart"));
    for (var j = 0; j < localCart.length; j++) {
      if (id === localCart[j]._id) {
        obj["prize"] = localCart[j].prize;
        obj["qty"] = val;
        obj["totalPrize"] = localCart[j].prize * val;
        obj["_id"] = localCart[j]._id;
        obj["title"] = localCart[j].title;
        obj["type"] = localCart[j].type;
        obj["file"] = localCart[j].file;
        tempArray.push(obj);
      }
    }

    let finalArray = localCart.map(
      (item) => tempArray.find((o) => o._id === item._id) || item
    );

    localStorage.setItem("Kcart", JSON.stringify(finalArray));
    calTotal(finalArray);
    // localCart.concat(...finalArray)
  };
  const addToCart = (id) => {
    var tempArray = [];
    var obj = {};
    let addCart = newArrival.filter((byId) => byId._id === id);
    let localCart =
      localStorage.getItem("Kcart") === ""
        ? ""
        : JSON.parse(localStorage.getItem("Kcart"));

    if (localCart === null || localCart === "" || localCart.length === 0) {
      for (var i = 0; i < addCart.length; i++) {
        obj["prize"] = addCart[i].prize;
        obj["qty"] = i + 1;
        obj["totalPrize"] = addCart[i].prize;
        obj["_id"] = addCart[i]._id;
        obj["title"] = addCart[i].title;
        obj["type"] = addCart[i].type;
        obj["file"] = addCart[i].file;
        tempArray.push(obj);
      }

      localStorage.setItem("Kcart", JSON.stringify(tempArray));
    } else {
      console.log(localCart);
      console.log(addCart);
      for (var j = 0; j < localCart.length; j++) {
        if (localCart[j]._id === id) return;

        if (addCart[0]._id === id) {
          console.log(addCart[j]);
          obj["prize"] = addCart[0].prize;
          obj["qty"] = j + 1;
          obj["totalPrize"] = addCart[0].prize;
          obj["_id"] = id;
          obj["title"] = addCart[0].title;
          obj["type"] = addCart[0].type;
          obj["file"] = addCart[0].file;
          tempArray = obj;
        }
      }
      localStorage.setItem(
        "Kcart",
        JSON.stringify(localCart == null ? tempArray : localCart.concat(obj))
      );
    }

    let local = JSON.parse(localStorage.getItem("Kcart"));
    setCart(local);
    calTotal(local);
  };
  const deleteItem = (id) => {
    let deleteCart = JSON.parse(localStorage.getItem("Kcart"));
    console.log(deleteCart);
    let newCart = deleteCart.filter((byId) => byId._id !== id);
    console.log(newCart);
    localStorage.setItem("Kcart", JSON.stringify(newCart));
    let local = JSON.parse(localStorage.getItem("Kcart"));
    console.log(local);
    setCart(local);
    calTotal(local);
  };

  const calTotal = async (local) => {
    if (local.length < 1) {
      localStorage.setItem("total", JSON.stringify(0.0));
      localStorage.setItem("convertCurrency", JSON.stringify(0.0));
      return;
    }
    let tot = local.map((a) => a.totalPrize).reduce((a, b) => a + b);
    const equivalence = await axios.get(
      "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD"
    );

    console.log(equivalence.data.USD);

    let convertCurrency = total / equivalence.data.USD;
    console.log(tot);
    localStorage.setItem("total", JSON.stringify(tot));
    localStorage.setItem(
      "convertCurrency",
      JSON.stringify(convertCurrency.toFixed(5))
    );
    setConvertedCurrency(convertCurrency);
    setTotal(tot);
  };

  const logout = () => {
    try {
      axios
        .get(`${base_url}/api/user/auth/logout`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        })
        .then(function (response) {
          if (response.data.success) {
            window.localStorage.clear("userId");
            window.localStorage.clear("loggedIn");
            window.localStorage.clear("token");
            localStorage.clear("total");
            localStorage.clear("Kcart");
            localStorage.clear("qty");
            localStorage.clear("convertCurrency");
          }
        });
    } catch (error) {}
  };

  return (
    <AppContext.Provider
      value={{
        featured,
        newArrival,
        addToCart,
        cart,
        total,
        convertedCurrency,
        val,
        deleteItem,
        logout,

        connectWallet,
        disConnectWallet,
        sendTransaction,
        connected,
        setConnected,
        success,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { ProjectContext, AppContext };
