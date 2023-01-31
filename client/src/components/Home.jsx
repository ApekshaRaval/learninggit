import axios from "axios";
import React, { useEffect, useState } from "react";
import "../index.css";
const Home = ({ mode }) => {
  const [damta, setdata] = useState([]);

  const getdata = () => {
    const options = { method: "GET", url: "http://localhost:3000/" };
    axios
      .request(options)
      .then(function (response) {
        console.log(response);
        setdata(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="conatiner">
      {damta.map((v, i) => {
        return (
         
            <div className={`cardcontent-${mode}`} key={i}>
              <h2> Name: {v.name}</h2>
              <h5> Job title: {v.title}</h5>
            </div>
          
        );
      })}
    </div>
  );
};

export default Home;
