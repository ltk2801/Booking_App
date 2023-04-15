import {
  faBed,
  faCalendar,
  faCar,
  faHotel,
  faPlane,
  faTaxi,
  faTree,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("Thành phố Hồ Chí Minh");
  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    // lấy ra state trước đó
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div className={styles.header}>
      <div
        className={`${styles.headerContainer} ${
          type === "list" ? styles.listMode : ""
        }`}
      >
        <div className={styles.headerList}>
          <div className={`${styles.headerListItem} + ${styles.active}`}>
            <FontAwesomeIcon icon={faHotel} />
            <span>Lưu trú</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faPlane} />
            <span>Chuyến bay</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faCar} />
            <span>Thuê xe</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faTree} />
            <span>Địa điểm tham quan</span>
          </div>
          <div className={styles.headerListItem}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi sân bay</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <div className={styles.headerContent}>
              <h1 className={styles.headerTitle}>Vi vu theo cách của bạn</h1>
              <p className={styles.headerDesc}>
                Tiết kiệm ít nhất 15% cho lưu trú toàn cầu, từ nghỉ dưỡng đến
                phiêu lưu hoang dã
              </p>
              <button className={styles.headerBtn}>
                Tìm Ưu Đãi Mùa Du Lịch
              </button>
            </div>
            <div className={styles.headerSearch}>
              <div className={styles.headerSearchItem}>
                <FontAwesomeIcon icon={faBed} className={styles.headerIcon} />
                <input
                  type="text"
                  placeholder={destination}
                  className={styles.headerSearchInput}
                  onChange={(e) => setDestination(e.target.value)}
                  value={destination}
                />
              </div>
              <div className={styles.headerSearchItem}>
                <FontAwesomeIcon
                  icon={faCalendar}
                  className={styles.headerIcon}
                />
                <span
                  onClick={() => {
                    setOpenDate(!openDate);
                    setOpenOptions(false);
                  }}
                  className={styles.headerSearchText}
                >
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )} `}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className={styles.date}
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className={styles.headerSearchItem}>
                <FontAwesomeIcon icon={faUser} className={styles.headerIcon} />
                <span
                  className={styles.headerSearchText}
                  onClick={() => {
                    setOpenOptions(!openOptions);
                    setOpenDate(false);
                  }}
                >
                  {`${options.adult} người lớn • ${options.children} trẻ em • ${options.room} phòng`}
                </span>
                {openOptions && (
                  <div className={styles.options}>
                    <div className={styles.optionItem}>
                      <span className={styles.optionText}>Người lớn</span>
                      <div className={styles.optionCounter}>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("adult", "d")}
                          disabled={options.adult <= 1}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNumber}>
                          {options.adult}
                        </span>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className={styles.optionItem}>
                      <span className={styles.optionText}>Trẻ em</span>
                      <div className={styles.optionCounter}>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("children", "d")}
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNumber}>
                          {options.children}
                        </span>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className={styles.optionItem}>
                      <span className={styles.optionText}>Phòng</span>
                      <div className={styles.optionCounter}>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("room", "d")}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <span className={styles.optionCounterNumber}>
                          {options.room}
                        </span>
                        <button
                          className={styles.optionCounterButton}
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.headerSearchItem}>
                <button
                  className={styles.headerBtnSearch}
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
