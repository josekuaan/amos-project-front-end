import React, { useEffect, useState } from "react";
import axios from "axios";

export const Sale = () => {
  const [currentInvent, setCurrentInvent] = useState([]);
  const [loading, setloading] = useState(false);
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      //   Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    setloading(true);
    fetchData();
    setloading(false);
  }, []);
  const fetchData = () => {
    // axios
    //   .get(`${BASE_URL}/api/user/auth/get-users`, config)
    //   .then(function (response) {
    //     if (response.data.success) {
    //       setUsers(response.data.msg);
    //     }
    //   });
    axios
      .get(`http://localhost:5000/api/inventory/get-inventories`, config)
      .then(function (response) {
        if (response.data.success) {
          console.log(response.data.inventory);
          setCurrentInvent(response.data.inventory);
        }
      });
  };
  return <div>Sale</div>;
};
