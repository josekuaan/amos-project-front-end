import React, { useState, createContext, useEffect, Children } from "react";
import axios from "axios";
import Featured from "./component/Featured";
import Home from "./pages/Home";

const AppContext = createContext();

const ProjectContext = ({ children }) => {
  const [featured, setFeatured] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      //   Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    getData();
    let local = JSON.parse(localStorage.getItem("Kcart"));
    setCart(local);
  }, []);
  const getData = async () => {
    try {
      axios
        .get(
          `https://amos-project.herokuapp.com/api/inventory/get-inventories`,
          config
        )
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
    let localCart = JSON.parse(localStorage.getItem("Kcart"));
    console.log(localCart);

    if (localCart === null || localCart.length === 0) {
      localStorage.setItem(
        "Kcart",
        JSON.stringify(
          localCart == null ? addCart : localCart.concat(...addCart)
        )
      );
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

    // let newLocalCart = JSON.stringify(
    //   localCart == null ? addCart : localCart.concat(...addCart)
    // );
    // console.log(newLocalCart);

    console.log("local");
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
    setTotal(tot);

    // cart.reduce((acc, curr) => ({ total: acc.prize + curr.prize }));
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { ProjectContext, AppContext };

// {appContext.featured.map((item, index) => (
//   <div class="col-sm-3" key={index}>
//     <div class="single-feature">
//       <img src={item.file} alt="feature" />
//       <div class="single-feature-txt text-center">
//         <p>
//           <i class="fa fa-star"></i>
//           <i class="fa fa-star"></i>
//           <i class="fa fa-star"></i>
//           <i class="fa fa-star"></i>
//           <span class="spacial-feature-icon">
//             <i class="fa fa-star"></i>
//           </span>
//           <span class="feature-review">(45 review)</span>
//         </p>
//         <h3>
//           <a href="#">dinning table </a>
//         </h3>
//         <h5>${item.prize}</h5>
//       </div>
//     </div>
//   </div>
// ))}
