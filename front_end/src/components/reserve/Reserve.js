import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import styles from "./Reserve.module.css";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
  const { data } = useFetch(
    `http://localhost:8800/api/v1/hotels/room/${hotelId}`
  );
  // lưu danh sách phòng đã chọn vào state
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { dates } = useContext(SearchContext);

  // Hàm để lấy ra ngày đã book phòng
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];
    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  // Kiểm tra phòng đã chọn vào những ngày đó còn trống hay không
  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
    return !isFound;
  };
  // Lưu giá trị vào state
  const handleSelect = (e) => {
    const check = e.target.checked;
    const value = e.target.value;
    // Nếu check vào box, thì thêm room vào state, còn không check thì sẽ loại room ra khỏi state
    setSelectedRooms(
      check
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  const navigate = useNavigate();
  // Khi ấn vào btn đặt phòng
  const handleClick = async (e) => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `http://localhost:8800/api/v1/rooms/availability/${roomId}`,
            { dates: alldates }
          );
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (error) {}
  };
  return (
    <div className={styles.reserve} onClick={() => setOpen(false)}>
      <div
        className={styles.rContainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={styles.rClose}
          onClick={() => setOpen(false)}
        />
        <span>Chọn phòng của bạn </span>
        {data.map((item) => (
          <div className={styles.rItem} key={item._id}>
            <div className={styles.rItemInfo}>
              <div className={styles.rTitle}>{item.title}</div>
              <div className={styles.rDesc}>{item.desc}</div>
              <div className={styles.rMax}>
                Số người tối đa : <b>{item.maxPeople}</b>
              </div>
              <div className={styles.rPrice}> Giá : {item.price} $</div>
            </div>
            <div className={styles.rSelectRooms}>
              {item.roomNumber.map((roomNumber) => (
                <div className={styles.room} key={roomNumber._id}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className={styles.rButton}>
          Đặt phòng ngay !
        </button>
      </div>
    </div>
  );
};

export default Reserve;
