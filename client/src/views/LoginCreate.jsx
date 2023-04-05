import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.scss";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const LoginCreate = () => {
  const [loginForm, setLoginForm] = useState(initialState);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setLoginForm({
      ...loginForm,
      [property]: value,
    });
  };

  return (
    <div>
      <section className="">
        <div className="columns-login">
          <div className="image-container">
            <Link to="/home">
              <button className="back">Back to home</button>
            </Link>
          </div>

          <div className="txt-container">
            <div>
              <h1>Create your account</h1>
            </div>

            <div>
              <button>Sing up with Google</button>
              <h2>Or</h2>
            </div>

            <form className="login-form">
              <div>
                <div>
                  <label>Name: </label>
                </div>

                <div>
                  <input name="name" type="text" onChange={changeHandler} />
                </div>

                <label>Email: </label>
                <div>
                  <input name="email" type="text" onChange={changeHandler} />
                </div>

                <label>Password: </label>
                <div>
                  <input name="password" type="text" onChange={changeHandler} />
                </div>

                <div>
                  <button>Create account</button>
                </div>
              </div>

              <div>
                Already have a account?
                <Link to="/login"> Log in</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginCreate;
