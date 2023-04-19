import axios from "axios";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import styles from "./Login.module.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:8800/api/v1/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  return (
    <React.Fragment>
      <Navbar type={"login_register"} />
      <div className={styles.login}>
        <div className={styles.lContainer}>
          <h1 className={styles.title}>Đăng nhập tài khoản </h1>
          <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className={styles.lInput}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className={styles.lInput}
          />
          <button
            disabled={loading}
            className={styles.lButton}
            onClick={handleLogin}
          >
            Đăng nhập
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Login;
