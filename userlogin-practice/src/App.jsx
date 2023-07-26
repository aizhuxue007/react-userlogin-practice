import SignIn from "./SignIn";
import { useEffect } from "react";
import "./App.css";


function App() {
  const demoEmail = 'aizhu@gmail.com'
  const demoPwd = 'hotdog123'
  const user = {
    email: demoEmail,
    pwd: demoPwd
  }

  useEffect(() => {
    localStorage.setItem('email', user.email)
    localStorage.setItem('pwd', user.pwd)
  }, [])

  return (
    <>
      <div className="main-container w-full h-screen flex justify-center items-center text-white font-sans">
        <SignIn />
      </div>
    </>
  );
}

export default App;
