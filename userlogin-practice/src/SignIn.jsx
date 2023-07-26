import { useState, useEffect } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    console.log(`success: ${success}`)
  }, [success])

  const submitLogin = async (e) => {
    e.preventDefault();
    handleLogin()
  };

  const handleLogin = () => {
    consoleLogin()
    resetLoginForm()
    authenticateLogin()
  }

  const consoleLogin = () => {
    console.log(`email input: ${email}`);
    console.log(`password input: ${pwd}`);
  }

  const resetLoginForm = () => {
    setEmail("");
    setPwd("");
  }

  const authenticateLogin = () => {
    const storedEmail = localStorage.getItem('email')
    const storedPassword = localStorage.getItem('pwd')
    console.log(storedEmail===email, storedPassword===pwd)
    if (email === storedEmail && pwd === storedPassword) {
        setSuccess(true)
        setErrMsg('')
    } else {
        setErrMsg('Wrong email or password')
    }
  }

  return (
    <section className="card box-border w-3/5 min-h-fit bg-red-500 rounded-md p-10">
        
      {success ? (
        <div className="text-white">Success Login!</div>
      ) : (
        <>
          <h1 className="text-white text-2xl font-serif">Sign In</h1>
          {errMsg && <><p className="my-5 text-yellow-200">{errMsg}</p></>}
          <form className="mt-5 flex justify-center" onSubmit={submitLogin}>
            <div className="w-full h-full flex-col justify-between">
              <div className="input-container">
                <div className="email-input w-full mb-5 flex justify-center items-center">
                  {/* <label htmlFor="email" className="mr-12">
                    Email:
                  </label> */}
                  <input
                    className="rounded-md p-2 text-red-700 placeholder:text-red-400"
                    type="email"
                    autoComplete="off"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className="password-input w-full flex justify-center items-center">
                  {/* <label htmlFor="password" className="label mr-5">
                    Password:
                  </label> */}
                  <input
                    className="rounded-md p-2 text-red-700 placeholder:text-red-400"
                    type="password"
                    placeholder="Password"
                    value={pwd}
                    onChange={(e) => {
                      setPwd(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="form-buttons mt-10">
                <button
                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 mr-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  type="submit"
                >
                  Sign Up
                </button>
                <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                  Login
                </button>
              </div>
              <p className="text-yellow-200 my-5">Demo email: aizhu@gmail.com, pwd: hotdog123</p>
            </div>
          </form>
        </>
      )}
    </section>
  );
};

export default SignIn;
