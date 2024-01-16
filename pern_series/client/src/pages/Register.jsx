import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    contactnumber: "",
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
        "http://localhost:8080/api/auth/register",
        data,
        { withCredentials: true }
      );
      // console.log("res", response);
      if (response.data.message == "Registration Successful") {
        alert(response.data.message);
        setData({
          username: "",
          email: "",
          password: "",
          contactnumber: "",
        });
        navigate("/login");
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
                src="./images/register.jpg"
                alt="registration image"
                width="500"
                height="500"
              />
            </div>
            <div className="registration-form">
              <h1 className="main-heading mb-3">
                <span className="highlight-text">registration f</span>orm
              </h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={data.username}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>
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
                <div>
                  <label htmlFor="contactnumber">contact number</label>
                  <input
                    type="number"
                    name="contactnumber"
                    id="contact number"
                    value={data.contactnumber}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Register;
