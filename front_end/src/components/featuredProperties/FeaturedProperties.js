import styles from "./FeaturedProperties.module.css";

const FeaturedProperties = () => {
  return (
    <div className={styles.fp}>
      <div className={styles.fpItem}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className={styles.fpImg}
        />
        <span className={styles.fpName}>ApartHotel Stare Miasto </span>
        <span className={styles.fpCity}>Madrid </span>
        <span className={styles.fpPrice}>
          Bắt đầu từ <strong>VND 4.101.502</strong>{" "}
        </span>
        <div className={styles.fpRating}>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className={styles.fpItem}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className={styles.fpImg}
        />
        <span className={styles.fpName}>ApartHotel Stare Miasto </span>
        <span className={styles.fpCity}>Madrid </span>
        <span className={styles.fpPrice}>
          Bắt đầu từ VND <strong>VND 4.101.502</strong>
        </span>
        <div className={styles.fpRating}>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className={styles.fpItem}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className={styles.fpImg}
        />
        <span className={styles.fpName}>ApartHotel Stare Miasto </span>
        <span className={styles.fpCity}>Madrid </span>
        <span className={styles.fpPrice}>
          Bắt đầu từ <strong>VND 4.101.502</strong>{" "}
        </span>
        <div className={styles.fpRating}>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className={styles.fpItem}>
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className={styles.fpImg}
        />
        <span className={styles.fpName}>ApartHotel Stare Miasto </span>
        <span className={styles.fpCity}>Madrid </span>
        <span className={styles.fpPrice}>
          Bắt đầu từ <strong>VND 4.101.502</strong>{" "}
        </span>
        <div className={styles.fpRating}>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
