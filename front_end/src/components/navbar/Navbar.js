import {
  faCircleQuestion,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = ({ type }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  // console.log(type);
  const handleHomePage = () => {
    navigate("/");
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>
          <h2 onClick={handleHomePage}>Mikeybooking.com</h2>
        </Link>
        {type === "login_register" ? (
          <div className={styles.navItems}>
            <div className={styles.navService}>
              <span className={styles.navItem}>
                <FontAwesomeIcon icon={faLanguage} />
              </span>
              <span className={styles.navItem}>
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
            </div>
          </div>
        ) : (
          <div className={styles.navItems}>
            <div className={styles.navService}>
              <span className={styles.navItem}>VND</span>
              <span className={styles.navItem}>
                <FontAwesomeIcon icon={faLanguage} />
              </span>
              <span className={styles.navItem}>
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
              <span className={styles.navItem}>Đăng chỗ nghỉ của Quý vị</span>
            </div>
            {user ? (
              <div className={styles.user}>
                <span>Xin chào {user.username}</span>
                <button className={styles.navButton}>Đăng xuất</button>
              </div>
            ) : (
              <>
                <button
                  className={styles.navButton}
                  onClick={(e) => {
                    navigate("/register");
                  }}
                >
                  Đăng ký
                </button>
                <button
                  className={styles.navButton}
                  onClick={(e) => {
                    navigate("/login");
                  }}
                >
                  Đăng nhập
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
