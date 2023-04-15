import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import styles from "./Hotel.module.css";

function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/407424317.jpg?k=691f26bf8b9f2999dc0ddc311471b9b78e421b337910702babc54a48d7c5fa18&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/407424315.jpg?k=977fc4d2d00d3822b6115a2bde2591b0e18a5f51151ec1a0aff6e5238e04ae68&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/407424312.jpg?k=88f284596ea3cb96062827c3d30f33dd3a95e363e10bc24dc8fc088220bc9530&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/407424320.jpg?k=704f99fefa5463e1448c66a29093b6d20c8beca915807b241f573e314b16fa8d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/407424318.jpg?k=99207b21537dc55ff2959e0b677ea60c9f1dc233b72394eb28a386eb8241c99d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/438917226.jpg?k=a1d2c7930c2f1e1b232751853026563fe5e08658e7b2251ee66fa7a2369d1ce2&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className={styles.hotelContainer}>
        {open && (
          <div className={styles.slider} onClick={() => setOpen(false)}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={styles.close}
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className={styles.arrow}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleMove("l");
              }}
            />
            <div className={styles.sliderWrapper}>
              <img
                src={photos[slideNumber].src}
                alt=""
                className={styles.sliderImg}
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className={styles.arrow}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleMove("r");
              }}
            />
          </div>
        )}
        <div className={styles.hotelWrapper}>
          <button className={styles.bookNow}>Đặt ngay</button>
          <h1 className={styles.hotelTitle}>Grand Hotel</h1>
          <div className={styles.hotelAddress}>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className={styles.hotelDistance}>
            Excellent location - 500m from center
          </span>
          <span className={styles.hotelPriceHighlight}>
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className={styles.hotelImages}>
            {photos.map((photo, i) => (
              <div className={styles.hotelImgWrapper}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className={styles.hotelImg}
                />
              </div>
            ))}
          </div>
          <div className={styles.hotelDetails}>
            <div className={styles.hotelDetailsTexts}>
              <h1 className={styles.hotelTitle}>Nicecy Boutique Hotel</h1>
              <p className={styles.hotelDesc}>
                Tọa lạc tại vị trí thuận tiện ở Thành phố Hồ Chí Minh, Nicecy
                Boutique Hotel nằm cách khu trung tâm thành phố 1 phút đi bộ và
                Chợ Bến Thành 200 m. Chỗ nghỉ này cung cấp các phòng tiện nghi
                với WiFi miễn phí. Phòng nghỉ gắn máy điều hòa tại Metro Poinds
                HCM Hotel- Bến Thành Market được trang bị TV truyền hình vệ tinh
                và phòng tắm riêng. Du khách có thể sử dụng máy pha trà/cà phê,
                tủ lạnh và minibar. Metro Poinds HCM Hotel- Bến Thành Market
                cung cấp dịch vụ văn phòng và cho thuê phương tiện đi lại. Chỗ
                nghỉ cũng cung cấp dịch vụ giặt là. Du khách có thể dùng bữa tại
                nhà hàng trong khuôn viên hoặc thư giãn với đồ uống tại quán
                café. Nhà thờ Đức Bà và vô số thắng cảnh khác đều nằm cách khách
                sạn 15 phút đi bộ. Chỗ nghỉ cũng nằm cách Sông Sài Gòn 15 phút
                tản bộ. Sân bay quốc tế Tân Sơn Nhất cách đó 15 phút lái xe. Đây
                là khu vực ở TP. Hồ Chí Minh mà khách yêu thích, theo các đánh
                giá độc lập.
              </p>
            </div>
            <div className={styles.hotelDetailsPrice}>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Nằm ngay trung tâm TP. Hồ Chí Minh, khách sạn này có điểm vị trí
                tuyệt vời 9,2
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Đặt ngay</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hotel;
