import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  //Handle change to store update data in state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  //Handle submit to send data
  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert("Under construction");
    // if (
    //   data.username == "" ||
    //   data.email == "" ||
    //   data.contactnumber == "" ||
    //   data.password == ""
    // ) {
    //   alert("You have empty feild");
    // } else {
    try {
      // console.log("data", data);
      // Assuming 'yourApiEndpoint' is the actual endpoint to send data to
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        data,
        { withCredentials: true }
      );
      // console.log("res", response);
      if (response.data.message == "Login Successful") {
        localStorage.setItem('token', response.data.token)
        alert(response.data.message);
        setData({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        // The request failed
        alert(response.data.message);
      }
    } catch (error) {
      console.error(`Registration page error ${error}`);
    }
    // }
  };
  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img
                src="./images/login.avif"
                alt="login image"
                width="500"
                height="500"
              />
            </div>
            <div className="registration-form">
              <h1 className="main-heading mb-3">
                <span className="highlight-text">login form</span>
              </h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={data.password}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  login Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Login;
