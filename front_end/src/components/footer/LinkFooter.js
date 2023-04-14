import React from "react";
import styles from "./LinkFooter.module.css";
import datasFooter from "../../data/footer.json";
import Colfooter from "./Colfooter";

export default function LinkFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.fLists}>
        <div>
          {datasFooter[0].col_values.map((value) => (
            <Colfooter value={value} key={Math.random().toString()} />
          ))}
        </div>
        <div>
          {datasFooter[1].col_values.map((value) => (
            <Colfooter value={value} key={Math.random().toString()} />
          ))}
        </div>
        <div>
          {datasFooter[2].col_values.map((value) => (
            <Colfooter value={value} key={Math.random().toString()} />
          ))}
        </div>

        <div>
          {datasFooter[3].col_values.map((value) => (
            <Colfooter value={value} key={Math.random().toString()} />
          ))}
        </div>

        <div>
          {datasFooter[4].col_values.map((value) => (
            <Colfooter value={value} key={Math.random().toString()} />
          ))}
        </div>
      </div>
      <div className={styles.fText}>Copyright © 2023 Mikeybooking</div>
    </div>
  );
}
