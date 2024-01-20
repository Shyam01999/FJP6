import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [data, setData] = useState({
    username: "",
    email: "",
    message: "",
  });

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
    if (data.username == "" || data.email == "" || data.message == "") {
      alert("You have empty feild");
    } else {
      try {
        // console.log("data", data);
        // Assuming 'yourApiEndpoint' is the actual endpoint to send data to
        const response = await axios.post(
          "http://localhost:8080/api/form/contact",
          data,
          { withCredentials: true }
        );
        // console.log("res", response);
        if (response.data.message == "Message Sent Successfully'") {
          alert(response.data.message);
          // navigate("/");
        } else {
          // The request failed
          alert(response.data.message);
        }
        setData({
          username: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.error(`Contact page error ${error}`);
      }
      // }
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img
                src="./images/contact.jpg"
                alt="contact form image"
                width="500"
                height="500"
              />
            </div>
            <div className="registration-form">
              <h1 className="main-heading mb-3">
                <span className="highlight-text">contact f</span>orm
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
                  <label htmlFor="message">message</label>
                  <textarea
                    name="message"
                    id="message"
                    value={data.message}
                    onChange={handleChange}
                    rows="6"
                    cols="30"
                    required
                  ></textarea>
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Contact;
