import { useNavigate } from "react-router-dom";
import styles from "./SearchItem.module.css";
import { Link } from "react-router-dom";
const SearchItem = ({ item }) => {
  const navigate = useNavigate();

  const handleDetailHotel = () => {
    navigate(`/hotels/${item._id}`);
  };
  return (
    <div className={styles.searchItem}>
      <img
        src={item.photos[0]}
        alt={item._id}
        className={styles.siImg}
        onClick={handleDetailHotel}
      />
      <div className={styles.siDesc}>
        <h1 className={styles.siTitle} onClick={handleDetailHotel}>
          {item.name}
        </h1>
        <span className={styles.siDistance}>{item.distance}m from center</span>
        <span className={styles.siTaxiOp}>Free airport taxi</span>
        <span className={styles.siSubtitle}>
          Studio Apartment with Air conditioning
        </span>
        <span className={styles.siFeatures}>{item.desc}</span>
        <span className={styles.siCancelOp}>Free cancellation</span>
        <span className={styles.siCancelOpSubtitle}>
          You can cancel later, so lock in this great price today !
        </span>
      </div>
      <div className={styles.siDetails}>
        {item.rating && (
          <div className={styles.siRating}>
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className={styles.siDetailTexts}>
          <span className={styles.siPrice}>${item.cheapestPrice}</span>
          <span className={styles.siTaxOp}>Includes taxes and fees </span>
          <Link to={`/hotels/${item._id}`}>
            <button
              className={styles.siCheckButton}
              onClick={handleDetailHotel}
            >
              Hiển thị giá
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
