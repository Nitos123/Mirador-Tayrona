import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import "../styles/Login.scss";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(initialState);

  const { login, loginWithGoogle, resetPassword } = useAuth();
  const navigate = useNavigate(); // Es un Hook que se puede usar para controlar el redirect a otra página
  const [error, setError] = useState(); // Con este estado se puede controlar los errores generados al momento de registrarse un nuevo usuario
  
  const [info, setInfo] = useState(); // Con este estado se puede controlar los erros generados al momento de registrarse un nuevo usuario

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [property]: value,
    });
  };

  // Login con usuario y contraseña
  const submitHandle = async (event) => {
    event.preventDefault();
    setError(""); // Reseteando los errores.
    try {
      await login(user.email, user.password);
      navigate("/"); // Al registrarse un usuario, se redirecciona al Home
    } catch (error) {
      setError(error.message);
    }
  };

  // login con Google
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  // Para recuperar la contraseña
  const handleResetPassword = async () => {
    if(!user.email) setError('Please enter your email');

    try {
      await resetPassword(user.email);
      setError('');
      setInfo('We sent you an email with a link to reset you password');      
    } catch (error) {
      setError(error.message);
    }
  }

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

            <div className="form">
              {error && <p className="error">{error}</p>}
              {info && <p className="info">{info}</p>}
              <form className="login-form" onSubmit={submitHandle}>
                <label>Email: </label>
                <div>
                  <div>
                    <input name="email" type="email" onChange={changeHandler} />
                  </div>

                  <label>Password: </label>
                  <div>
                    <input
                      name="password"
                      type="password"
                      onChange={changeHandler}
                    />
                  </div>

                  <a href="#!" onClick={handleResetPassword}>Forgot Password?</a>

                  <div>
                    <button>Log in</button>
                  </div>
                </div>
              </form>
            </div>

            <div>
              <p>Or</p>
              <button onClick={handleGoogleSignIn}>Log in with Google</button>
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
