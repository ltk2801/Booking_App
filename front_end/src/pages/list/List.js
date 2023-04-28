import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import styles from "./List.module.css";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";

import {
  faCalendarDays,
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchItem from "../../components/searchItem/SearchItem";
import Loading from "../../components/Loading/Loading";
import { SearchContext } from "../../context/SearchContext";

function List() {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const timeDifference = dates[0].endDate - dates[0].startDate;
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const { data, loading, reFetch } = useFetch(
    `http://localhost:8800/api/v1/hotels?city=${destination}&min=${
      min || 0
    }&max=${max || 999}`
  );
  // Sử dụng dispatch
  const { dispatch } = useContext(SearchContext);
  const handleClick = () => {
    reFetch();
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
  };

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
                <input
                  placeholder={destination}
                  type="text"
                  onChange={(e) => setDestination(e.target.value)}
                />
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
                  {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                    dates[0].endDate,
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
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                  className={styles.date}
                  editableDateInputs={true}
                  // moveRangeOnFirstSelection={false}
                />
              )}
            </div>
            <div className={styles.lsItem}>
              <label>Nghỉ {daysDifference} đêm</label>
              <div className={styles.options}>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>
                    Giá thấp nhất ( $/ 1 ngày )
                  </span>
                  <input
                    type="number"
                    className={styles.lsOptionInput}
                    min={1}
                    onChange={(e) => setMin(e.target.value)}
                  />
                </div>
                <div className={styles.lsOptionItem}>
                  <span className={styles.lsOptionText}>
                    Giá cao nhất ( $/ 1 ngày )
                  </span>
                  <input
                    type="number"
                    className={styles.lsOptionInput}
                    min={1}
                    onChange={(e) => setMax(e.target.value)}
                  />
                </div>
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
            <button onClick={handleClick}>Tìm kiếm</button>
          </div>
          <div className={styles.listResult}>
            {loading ? (
              <Loading />
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default List;
