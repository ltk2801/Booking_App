import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/navbar/Navbar";
import Reserve from "../../components/reserve/Reserve";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import styles from "./Hotel.module.css";

function Hotel() {
  // Mở đóng modal hình ảnh phòng
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  // Mở đóng modal đặt phòng
  const [openModal, setOpenModal] = useState(false);

  // lấy ra id của hotel
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];

  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/v1/hotels/find/${id}`
  );
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { dates, options } = useContext(SearchContext);

  const timeDifference = dates[0].endDate - dates[0].startDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

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

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        <Loading />
      ) : (
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
                  src={data.photos[slideNumber]}
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
            <h1 className={styles.hotelTitle}>{data.name}</h1>
            <div className={styles.hotelAddress}>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className={styles.hotelDistance}>
              Excellent location - {data.distance}m from center
            </span>
            <span className={styles.hotelPriceHighlight}>
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className={styles.hotelImages}>
              {data.photos?.map((photo, i) => (
                <div className={styles.hotelImgWrapper} key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className={styles.hotelImg}
                  />
                </div>
              ))}
            </div>
            <div className={styles.hotelDetails}>
              <div className={styles.hotelDetailsTexts}>
                <h1 className={styles.hotelTitle}>{data.title}</h1>
                <p className={styles.hotelDesc}>{data.desc}</p>
              </div>
              <div className={styles.hotelDetailsPrice}>
                <h1>Perfect for a {daysDifference}-night stay!</h1>
                <span>
                  Nằm ngay trung tâm TP. Hồ Chí Minh, khách sạn này có điểm vị
                  trí tuyệt vời 9,2
                </span>
                <h2>
                  <b>${daysDifference * data.cheapestPrice * options.room}</b> (
                  {daysDifference} nights)
                </h2>
                <button onClick={handleClick}>Đặt ngay</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
      <Footer />
    </div>
  );
}

export default Hotel;
