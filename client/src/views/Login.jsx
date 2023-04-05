import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.scss";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
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
              <h1>Log In</h1>
            </div>

            <form className="login-form">
              <label>Email: </label>
              <div>
                <div>
                  <input name="name" type="text" onChange={changeHandler} />
                </div>

                <label>Password: </label>
                <div>
                  <input name="password" type="text" onChange={changeHandler} />
                </div>

                <div>
                  <button>Log in</button>
                </div>
              </div>
            </form>

            <div>
              <p>Or</p>
              <button>Log in with Google</button>
            </div>

            <div>
              Don't have an account?
              <Link to="/loginCreate"> Create account</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
