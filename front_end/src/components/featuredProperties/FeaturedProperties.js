import styles from "./FeaturedProperties.module.css";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";

const FeaturedProperties = () => {
  const { data, loading } = useFetch(
    "http://localhost:8800/api/v1/hotels?featured=true&limit=4"
  );

  return (
    <div className={styles.fp}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {data.map((item) => (
            <div className={styles.fpItem} key={item._id}>
              <img
                src={item.photos[0]}
                alt={item._id}
                className={styles.fpImg}
              />
              <span className={styles.fpName}>{item.name}</span>
              <span className={styles.fpCity}>{item.city} </span>
              <span className={styles.fpPrice}>
                Bắt đầu từ <strong> ${item.cheapestPrice}</strong>{" "}
              </span>
              {item.rating && (
                <div className={styles.fpRating}>
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
