import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import styles from "./List.module.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Footer from "../../components/footer/Footer";

import {
  faCalendarDays,
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchItem from "../../components/searchItem/SearchItem";

function List() {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  console.log(setDestination, setOptions);

  const timeDifference = date[0].endDate - date[0].startDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return (
    <div>
      {" "}
      <Navbar />
      <Header type="list" />
      <div className={styles.listContainer}>
        <div className={styles.listWrapper}>
          <div className={styles.listSearch}>
            <h1 className={styles.lsTitle}>Tìm kiếm</h1>
            <div className={styles.lsItem}>
              <label>Tên chỗ nghỉ/ điểm đến</label>
              <div className={styles.lsInput}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className={styles.lsIcon}
                />
                <input placeholder={destination} type="text" />
              </div>
            </div>
            <div className={styles.lsItem}>
              <label>Ngày nhận phòng - Ngày trả phòng</label>
              <div className={styles.lsInput}>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className={styles.lsIcon}
                />
                <span onClick={() => setOpenDate(!openDate)}>
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )} `}
                </span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={styles.lsIcon}
                />
              </div>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className={styles.date}
                />
              )}
            </div>
            <div className={styles.lsItem}>
              <label>Nghỉ {daysDifference} đêm</label>
              <div className={styles.options}>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Người lớn</span>
                  <input
                    type="number"
                    className={styles.lsOptionInput}
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Trẻ em</span>
                  <input
                    type="number"
                    className={styles.lsOptionInput}
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>Phòng</span>
                  <input
                    type="number"
                    className={styles.lsOptionInput}
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Tìm kiếm</button>
          </div>
          <div className={styles.listResult}>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default List;
