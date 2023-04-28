import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./Featured.module.css";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const { data, loading } = useFetch(
    "http://localhost:8800/api/v1/hotels/countByCity?cities=Thành phố Hồ Chí Minh,Hà Nội,Đà Nẵng,Vũng Tàu,Đà Lạt"
  );

  const dates = [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ];
  const options = {
    adult: 2,
    children: 0,
    room: 1,
  };

  const navigate = useNavigate();

  const tpHcmSearch = (des) => {
    const destination = des;
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <React.Fragment>
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <div className={styles.featuredFirst}>
            {/* item 1 */}
            <div
              className={styles.featuredItem}
              onClick={(e) => tpHcmSearch("Thành phố Hồ Chí Minh")}
            >
              <img
                src="https://img6.thuthuatphanmem.vn/uploads/2022/02/09/hinh-anh-thanh-pho-ho-chi-minh-ve-dem_031033761.jpg"
                alt="aba"
                className={styles.featuredImg}
              />
              <div className={styles.featuredTitles}>
                <h2>TP. Hồ Chí Minh</h2>

                <span>
                  {" "}
                  <img
                    src="https://investone-law.com/wp-content/uploads/2019/06/quoc-ky-viet-nam.jpg"
                    alt="cờ Việt Nam"
                    className={styles.flag}
                  />{" "}
                </span>
              </div>
              <div className={styles.featuredProperties}>
                <h2>{data[0]} Điểm lưu trú</h2>
              </div>
            </div>
            {/* item 2 */}
            <div
              className={styles.featuredItem}
              onClick={(e) => tpHcmSearch("Hà Nội")}
            >
              <img
                src="https://vcdn1-dulich.vnecdn.net/2022/05/11/hoan-kiem-lake-7673-1613972680-1508-1652253984.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=2wB1cBTUcNKuk68nrG6LMQ"
                alt="aba"
                className={styles.featuredImg}
              />
              <div className={styles.featuredTitles}>
                <h2>Hà Nội</h2>
                <span>
                  {" "}
                  <img
                    src="https://investone-law.com/wp-content/uploads/2019/06/quoc-ky-viet-nam.jpg"
                    alt="cờ Việt Nam"
                    className={styles.flag}
                  />{" "}
                </span>
              </div>
              <div className={styles.featuredProperties}>
                <h2>{data[1]} Điểm lưu trú</h2>
              </div>
            </div>
          </div>
          <div className={styles.featuredSecond}>
            {/* item 1 */}
            <div
              className={styles.featuredItem}
              onClick={(e) => tpHcmSearch("Đà Nẵng")}
            >
              <img
                src="https://cdn.tgdd.vn/Files/2022/02/16/1415816/10-bai-bien-da-nang-dep-say-long-nguoi-202202160903004409.jpg"
                alt="aba"
                className={styles.featuredImg}
              />
              <div className={styles.featuredTitles}>
                <h2>Đà Nẵng</h2>
                <span>
                  {" "}
                  <img
                    src="https://investone-law.com/wp-content/uploads/2019/06/quoc-ky-viet-nam.jpg"
                    alt="cờ Việt Nam"
                    className={styles.flag}
                  />{" "}
                </span>
              </div>
              <div className={styles.featuredProperties}>
                <h2>{data[2]} Điểm lưu trú</h2>
              </div>
            </div>
            {/* item 2 */}
            <div
              className={styles.featuredItem}
              onClick={(e) => tpHcmSearch("Vũng Tàu")}
            >
              <img
                src="https://bloghomestay.vn/wp-content/uploads/2023/02/hinh-anh-vung-tau_1.jpg"
                alt="aba"
                className={styles.featuredImg}
              />
              <div className={styles.featuredTitles}>
                <h2>Vũng Tàu</h2>
                <span>
                  {" "}
                  <img
                    src="https://investone-law.com/wp-content/uploads/2019/06/quoc-ky-viet-nam.jpg"
                    alt="cờ Việt Nam"
                    className={styles.flag}
                  />{" "}
                </span>
              </div>
              <div className={styles.featuredProperties}>
                <h2>{data[3]} Điểm lưu trú</h2>
              </div>
            </div>
            {/* item 3 */}
            <div
              className={styles.featuredItem}
              onClick={(e) => tpHcmSearch("Đà Lạt")}
            >
              <img
                src="https://haycafe.vn/wp-content/uploads/2022/01/Hinh-nen-Da-Lat-4K.jpg"
                alt="aba"
                className={styles.featuredImg}
              />
              <div className={styles.featuredTitles}>
                <h2>Đà Lạt</h2>
                <span>
                  {" "}
                  <img
                    src="https://investone-law.com/wp-content/uploads/2019/06/quoc-ky-viet-nam.jpg"
                    alt="cờ Việt Nam"
                    className={styles.flag}
                  />{" "}
                </span>
              </div>
              <div className={styles.featuredProperties}>
                <h2>{data[4]} Điểm lưu trú</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default Featured;
