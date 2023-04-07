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

const LoginCreate = () => {
  const [user, setUser] = useState(initialState);

  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate(); // Es un Hook que se puede usar para controlar el redirect a otra página
  const [error, setError] = useState(); // Con este estado se puede controlar los erros generados al momento de registrarse un nuevo usuario

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [property]: value,
    });
  };

  // Registro de usuarios por correo y contraseña
  const submitHandle = async (event) => {
    event.preventDefault();
    setError(""); // Reseteando los errores.
    try {
      await signup(user.email, user.password, user.name);
      navigate("/login"); // Al registrarse un usuario, se redirecciona al Login para que pueda iniciar sesión
    } catch (error) {
      setError(error.message);
    }
  };

  // Registro de usuario con Google
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
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
              <button onClick={handleGoogleSignIn}>Sing up with Google</button>
              <h2>- Or -</h2>
            </div>

            <div className="form">
              {error && <p>{error}</p>}
              <form className="login-form" onSubmit={submitHandle}>
                <div>
                  <div>
                  <label>Name: </label>
                </div>

                <div>
                  <input name="name" type="text" onChange={changeHandler} />
                </div>

                  <label>Email: </label>
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
        </div>
      </section>
    </div>
  );
};

export default LoginCreate;
