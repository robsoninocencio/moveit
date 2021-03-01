import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengeContext);
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
          Level {level}
        </p>
      </div>
    </div>
  );
}
