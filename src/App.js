import "./App.css";
import React, { useEffect, useState } from "react";
import AppRoutes from "./Routes";
import CombineContext from "./Contexts/CombineContext";
import axios from "axios"
import baseUrl from "./mytutor-backend"

import Error from "./Screens/NoInternetError";
import set from "date-fns/set";

function App() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  const handleCheckIsConnectionOnline = ()=>{
    console.log("check")
    axios.get(baseUrl).then().catch(error=>{
      console.log(error)
      setIsOnline(false)
    })
  }

  

  useEffect(() => {
    console.log(
      "Initially " + (window.navigator.onLine ? "on" : "off") + "line"
    );

    setInterval(handleCheckIsConnectionOnline(), 10000)

    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    return () => {
      window.removeEventListener("offline", () => {
        setIsOnline(false);
      });
      window.addEventListener("online", () => {
        setIsOnline(true);
      });
    };
  }, []);

  return (
    <>
      {isOnline ? (
        <CombineContext>
          <AppRoutes />
        </CombineContext>
      ) : (
        <Error />
      )}
    </>
  );
}

export default App;
