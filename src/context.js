import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";
import { contractAbi, contractAddress, base_url } from "./utils/constants";

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
  const [currentAccount, setCurrentAccount] = useState("hi");
  const [user, setCurrentUser] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

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

      console.log(accounts);
    } catch (error) {
      console.log(error);
      throw Error("No ethereum object.");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install metamask");
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
        // const parsedAmount = ethers.utils.parseEther(amount);
        console.log("total:", total);
        console.log("convertCurrency:", convertCurrency);
        console.log("parsedAmount:", parsedAmount);
        console.log("addressTo:", addressTo);
        console.log("currentAccount:", currentAccount);

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
        console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
        console.log(currentAccount);
        console.log(parsedAmount);
        console.log(addressTo);
        console.log(message);
        console.log(keyword);
        const transactionHash = await transactionsContract.addToblockchain(
          addressTo,
          0.005,
          message,
          keyword
        );
        console.log(transactionHash);
        setisLoading(true);
        console.log(`loading:${transactionHash.hash}`);

        await transactionHash.wait();
        setisLoading(false);
        console.log(`success:${transactionHash.hash}`);

        const transactionCoount =
          await transactionsContract.getAllTransactions();
        setTransactionCount(transactionCoount.toNumber());
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
  const addToCart = (id) => {
    let addCart = newArrival.filter((byId) => byId._id === id);
    let localCart =
      localStorage.getItem("Kcart") === ""
        ? ""
        : JSON.parse(localStorage.getItem("Kcart"));
    console.log(localCart);

    if (localCart === null || localCart === "" || localCart.length === 0) {
      localStorage.setItem("Kcart", JSON.stringify(addCart));
    } else {
      for (var i = 0; i < localCart.length; i++) {
        if (addCart[0]._id === localCart[i]._id) return;
        localStorage.setItem(
          "Kcart",
          JSON.stringify(
            localCart == null ? addCart : localCart.concat(...addCart)
          )
        );
      }
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

  const calTotal = (local) => {
    // console.log(cart);
    if (local.length < 1) return;
    let tot = local.map((a) => a.prize).reduce((a, b) => a + b);
    console.log(tot);
    localStorage.setItem("total", JSON.stringify(tot));
    // setTotal(tot);

    // cart.reduce((acc, curr) => ({ total: acc.prize + curr.prize }));
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
        deleteItem,
        logout,
        connectWallet,
        sendTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { ProjectContext, AppContext };
