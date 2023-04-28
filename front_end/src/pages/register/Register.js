import React, { useRef, useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Register.module.css";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

const Register = ({ isAuthenticated }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/v1/auth/register", {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      navigate("/login", {
        state: { message: "Đăng ký thành công ! Hãy thử đăng nhập ngay" },
      });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    // Nếu isAuthenticated = true, chuyển hướng đến trang home
    return <Navigate to="/" />;
  }

  return (
    <React.Fragment>
      <Navbar type={"login_register"} />
      <div className={styles.login}>
        <div className={styles.lContainer}>
          <h1 className={styles.title}>Đăng ký tài khoản </h1>
          <input
            type="text"
            placeholder="username"
            id="username"
            className={styles.lInput}
            ref={usernameRef}
          />
          <input
            type="email"
            placeholder="email"
            id="email"
            className={styles.lInput}
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            className={styles.lInput}
            ref={passwordRef}
          />
          <button className={styles.lButton} onClick={handleSubmit}>
            Đăng ký
          </button>
          {error && <span>{error}</span>}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Register;
