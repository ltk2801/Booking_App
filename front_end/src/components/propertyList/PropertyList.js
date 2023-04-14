import styles from "./PropertyList.module.css";

const PropertyList = () => {
  return (
    <div className={styles.pList}>
      <div className={styles.pListItem}>
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
          alt=""
          className={styles.pListImg}
        />
        <div className={styles.pListTitles}>
          <h1>Khách sạn</h1>
          <h2>956 khách sạn</h2>
        </div>
      </div>
      <div className={styles.pListItem}>
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o="
          alt=""
          className={styles.pListImg}
        />
        <div className={styles.pListTitles}>
          <h1>Căn hộ </h1>
          <h2>233 căn hộ</h2>
        </div>
      </div>
      <div className={styles.pListItem}>
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
          alt=""
          className={styles.pListImg}
        />
        <div className={styles.pListTitles}>
          <h1>Resort</h1>
          <h2>114 resort</h2>
        </div>
      </div>
      <div className={styles.pListItem}>
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o="
          alt=""
          className={styles.pListImg}
        />
        <div className={styles.pListTitles}>
          <h1>Biệt thự</h1>
          <h2>90 biệt thự</h2>
        </div>
      </div>
      <div className={styles.pListItem}>
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o="
          alt=""
          className={styles.pListImg}
        />
        <div className={styles.pListTitles}>
          <h1>Nhà nghỉ thôn dã</h1>
          <h2>321 nhà nghỉ thôn dã</h2>
        </div>
      </div>
      <div className={styles.pListItem}>
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o="
          alt=""
          className={styles.pListImg}
        />
        <div className={styles.pListTitles}>
          <h1>Nhà nghỉ mát</h1>
          <h2>132 nhà nghỉ mát</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
