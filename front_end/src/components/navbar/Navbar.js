import {
  faCircleQuestion,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate("/");
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <h2 className={styles.logo} onClick={handleHomePage}>
          Mikeybooking.com
        </h2>
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

          <button className={styles.navButton}>Đăng ký</button>
          <button className={styles.navButton}>Đăng nhập</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
