import React, { useState, createContext, useEffect, Children } from "react";
import axios from "axios";
import Featured from "./component/Featured";
import Index from "./component";

const AppContext = createContext();

const ProjectContext = () => {
  const [featured, setFeatured] = useState([]);
  const [newArrival, setNewArrival] = useState([]);
  const [inventory, setInventory] = useState([]);
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
            console.log(f);
            console.log(n);
            setFeatured(f);
            setNewArrival(n);
          }
        });
    } catch (error) {}
  };

  return (
    <AppContext.Provider
      value={{
        featured,
        newArrival,
      }}
    >
      <Index />
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
