import React, { useState } from "react";
import "../Css/Contact.css";

const Contact = () => {
  const [state, setstate] = useState("");

  const changeHandler = (e) => {
    setstate(e.target.value);
  };

  const submitted = (e) => {
    alert("Thanks for your feedback.");
    e.preventDefault();
  };
  return (
    <div className="contact">
      <div className="text-center">
        <h1
          className=" mt-5 pt-4"
          style={{ "font-family": "'Roboto Slab', serif" }}
        >
          Contact
        </h1>
        <hr className="hr1" />
        <p className="mx-2">
          Feel free to contact with me. Ask your query, give your suggestion.
        </p>
      </div>

      {/* main content */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto my-5">
            <div className="row">
              <div className="col-md-12 col-lg-4 mx-md-auto">
                <div>
                  <h4>Email:</h4>
                  <p className="link">hasnainsadid@gmail.com</p>
                </div>
                <div>
                  <h4>Phone:</h4>
                  <p className="link">+880 1991 638 639</p>
                </div>
                <div>
                  <h4>Facebook:</h4>
                  <p>
                    <a
                      className="link"
                      href="https://facebook.com/hasnain.sadid"
                      target="_blank"
                    >
                      Hasnain Sadid
                    </a>
                  </p>
                </div>
                <div>
                  <h4>Instagram:</h4>
                  <p>
                    <a
                      className="link"
                      href="https://instagram.com/_sadid_rafi/"
                      target="_blank"
                    >
                      _sadid_rafi
                    </a>
                  </p>
                </div>
                <div>
                  <h4>Github:</h4>
                  <p>
                    <a
                      className="link"
                      href="https://github.com/hasnainsadid"
                      target="_blank"
                    >
                      hasnainsadid
                    </a>
                  </p>
                </div>
                <div>
                  <h4>LinkedIn:</h4>
                  <p>
                    <a
                      className="link"
                      href="https://linkedin.com/in/hasnain-sadid-738463217/"
                      target="_blank"
                    >
                      Hasnain Sadid
                    </a>
                  </p>
                </div>
              </div>
              {/* right side/ Form part */}
              <div className="col-md-12 col-lg-8">
                <form action="" onSubmit={submitted}>
                  <div className="row mt-lg-4">
                    <div className="col-md-6">
                      <input
                        onChange={changeHandler}
                        type="text"
                        placeholder="Name"
                        className="form-control mt-4"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        onChange={changeHandler}
                        type="email"
                        placeholder="Email"
                        className="form-control mt-4"
                        required
                      />
                    </div>
                  </div>
                  <input
                    onChange={changeHandler}
                    type="text"
                    placeholder="Subject"
                    className="form-control my-4"
                    required
                  />
                  <textarea
                    onChange={changeHandler}
                    classname="form-group mt-4"
                    rows="7"
                    placeholder="Your Message"
                  ></textarea>

                  <button
                    type="submit"
                    className="btn btn-info form-control w-50 mx-auto d-block mt-3 text-light"
                    disabled={state ? false : true}
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
