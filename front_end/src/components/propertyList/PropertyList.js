import styles from "./PropertyList.module.css";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import { useState } from "react";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PropertyList = () => {
  const { data, loading, error, reFetch } = useFetch(
    "http://localhost:8800/api/v1/hotels/countByType"
  );

  const images = [
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
      index: 0,
    },
    {
      src: "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o=",
      index: 1,
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
      index: 2,
    },
    {
      src: "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o=",
      index: 3,
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
      index: 4,
    },
    {
      src: "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=",
      index: 5,
    },
  ];

  const imagesPerPage = 4; // Số lượng ảnh hiển thị trong mỗi lần
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(imagesPerPage - 1);

  // Hàm xử lý khi nhấn vào nút bên phải (đến trang kế tiếp)
  const handleNextPage = () => {
    // Nếu đã đến trang cuối cùng thì không làm gì
    if (endIndex >= images.length - 1) {
      return;
    }
    setStartIndex(startIndex + 1);
    setEndIndex(endIndex + 1);
  };
  // Hàm xử lý khi nhấn vào nút bên trái (quay lại trang trước đó)
  const handlePrevPage = () => {
    // Nếu đã đến trang đầu tiên thì không làm gì
    if (startIndex <= 0) {
      return;
    }
    setStartIndex(startIndex - 1);
    setEndIndex(endIndex - 1);
  };

  // Lấy mảng ảnh hiển thị trong trang hiện tại
  const displayedImages = images.slice(startIndex, endIndex + 1);

  return (
    <div className={styles.pList}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {startIndex <= 0 ? (
            ""
          ) : (
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className={styles.arrowL}
              onClick={() => {
                handlePrevPage();
              }}
            />
          )}
          {data.length > 0 && (
            <>
              {displayedImages.map((dataImg) => (
                <div className={styles.pListItem} key={dataImg.index}>
                  <img src={dataImg.src} alt="" className={styles.pListImg} />
                  <div className={styles.pListTitles}>
                    <h1>{data[dataImg.index]?.type}</h1>
                    <h2>
                      {data[dataImg.index]?.count} {data[dataImg.index]?.type}
                    </h2>
                  </div>
                </div>
              ))}
            </>
          )}
          {endIndex >= images.length - 1 ? (
            ""
          ) : (
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className={styles.arrowR}
              onClick={(e) => {
                handleNextPage();
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default PropertyList;
