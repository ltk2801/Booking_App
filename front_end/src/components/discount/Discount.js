import styles from "./Discount.module.css";

const Discount = () => {
  return (
    <div className={styles.discountContainer}>
      <h1>Ưu đãi</h1>
      <p>Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn</p>
      <div className={styles.discountItem}>
        <img
          src="https://tinybeans.com/wp-content/uploads/2021/11/Hawks-Cay-Resort.png"
          alt="aba"
          className={styles.discountImg}
        />
        <div className={styles.discountTitles}>
          <h3>Đổi gió một thời gian</h3>
          <p>Tận hưởng sự tự do với kỳ nghỉ theo tháng trên Mikeybooking.com</p>
          <button className={styles.discountBtn}>
            Khám phá kỳ nghỉ theo tháng
          </button>
        </div>
      </div>
      <span className={styles.dot}>•</span>
    </div>
  );
};

export default Discount;
