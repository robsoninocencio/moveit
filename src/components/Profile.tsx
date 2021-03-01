import * as React from "react";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/robsoninocencio.png"
        alt="Robson Inocêncio"
      />
      <div>
        <strong>Robson Inocêncio</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
