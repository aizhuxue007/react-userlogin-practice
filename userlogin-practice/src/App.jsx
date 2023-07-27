import SignIn from "./SignIn";
import { useEffect, useState } from "react";
import "./App.css";

function App() {

  useEffect(() => {
    logInViaServer()
  }, [])

  const logInViaServer = async () => {

  }

  return (
    <>
      <div className="main-container w-full h-screen flex justify-center items-center text-white font-sans">
        <SignIn />
      </div>
    </>
  );
}

export default App;
