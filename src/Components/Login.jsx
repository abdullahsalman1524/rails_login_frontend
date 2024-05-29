import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    // har key jo ke name ha ue ke against value stoore kar rhy hain
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const loginBtn = async (e) => {
    e.preventDefault();
    const { email, password } = loginUser;
    //todo yaha pe hum ne data send kiya ha
    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      mode: "cors",

      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      // todo if key value are same donot write then again
      // ? humin server ko sirf string ma data send karna ha
      body: JSON.stringify({
        user: {
          email: email,
          password: password
        }
      }),
    });
    const data = await res.json();
    // console.log("the data is", data[0].type);
    if (res.status > 400 || !data) {
      console.log(data)
      window.alert("Registration failed");
    } else {
      //todo when user is found
      console.log(res.headers.get('Authorization'))

      // dispatch({ type: user, payload: "admin" });
      const authToken = res.headers.get('Authorization');
      if (authToken) {
        console.log(res)
        document.cookie = `authToken=${authToken}; path=/; secure; samesite=strict`;
      }

      window.alert("Registration succesfull");
      navigate("/");
    }
  };

  return (
    <div className="bg-gray-800 text-white p-20 h-[93vh]">
      <h1 className="text-center text-3xl font-extrabold">Login Form</h1>
      <form
        method="POST"
        className="flex-col p-10 justify-center
       items- "
      >
        <div class="text-3xl font-bold mb-4">
          <label class="pr-4">
            Email address:
          </label>
          <input
            value={loginUser.email}
            onChange={handleInputs}
            name="email"
            type="email"
            class="font-bold text-black px-4 text-2xl"
          />
        </div>

        <div class="text-3xl font-bold mb-4">
          <label class="pr-6">
            Password:
          </label>
          <input
            value={loginUser.password}
            onChange={handleInputs}
            name="password"
            type="text"
            class="font-bold text-black px-4 text-2xl"
          />
        </div>

        <div class="col">
          <a href="#!">Forgot password?</a>
        </div>

        <button
          onClick={loginBtn}
          type="submit"
          class="bg-orange-600 text-4xl font-ex px-10 py-2"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
