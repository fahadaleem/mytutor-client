import "./App.css";
import React, { useEffect, useState } from "react";
import AppRoutes from "./Routes";
import CombineContext from "./Contexts/CombineContext";

import Error from "./Screens/NoInternetError";

function App() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    console.log(
      "Initially " + (window.navigator.onLine ? "on" : "off") + "line"
    );

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
