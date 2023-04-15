import { useNavigate } from "react-router-dom";
import styles from "./SearchItem.module.css";
const SearchItem = () => {
  const navigate = useNavigate();

  const handleDetailHotel = () => {
    navigate("/hotels/NganHotel");
  };
  return (
    <div className={styles.searchItem}>
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/407424319.webp?k=e3d6f4f914a19e63b840b2714a8dcf4c3b72862f0bd7d2cf39084d28119a4f42&o=&s=1"
        alt=""
        className={styles.siImg}
        onClick={handleDetailHotel}
      />
      <div className={styles.siDesc}>
        <h1 className={styles.siTitle} onClick={handleDetailHotel}>
          Tower Street Apartments
        </h1>
        <span className={styles.siDistance}>500m from center</span>
        <span className={styles.siTaxiOp}>Free airport taxi</span>
        <span className={styles.siSubtitle}>
          Studio Apartment with Air conditioning
        </span>
        <span className={styles.siFeatures}>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className={styles.siCancelOp}>Free cancellation</span>
        <span className={styles.siCancelOpSubtitle}>
          You can cancel later, so lock in this great price today !
        </span>
      </div>
      <div className={styles.siDetails}>
        <div className={styles.siRating}>
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className={styles.siDetailTexts}>
          <span className={styles.siPrice}>$123</span>
          <span className={styles.siTaxOp}>Includes taxes and fees </span>
          <button className={styles.siCheckButton} onClick={handleDetailHotel}>
            Hiển thị giá
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
