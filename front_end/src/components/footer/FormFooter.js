import styles from "./FormFooter.module.css";

export default function FormFooter() {
  return (
    <div className={styles.mail}>
      <h1 className={styles.mailTitle}>Tiết kiệm thời gian và tiền bạc !</h1>
      <span className={styles.mailDesc}>
        Hãy đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn
      </span>
      <div className={styles.mailInputContainer}>
        <input type="text" placeholder="Địa chỉ e-mail của bạn" />
        <button>Đăng ký</button>
      </div>
    </div>
  );
}
