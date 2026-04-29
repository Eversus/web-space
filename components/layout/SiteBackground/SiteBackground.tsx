"use client";

import BackgroundMesh from "./BackgroundMesh";
import styles from "./SiteBackground.module.scss";

export default function SiteBackground() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.clouds}>
        <span className={`${styles.cloud} ${styles.cloudPurple}`} />
        <span className={`${styles.cloud} ${styles.cloudCyan}`} />
        <span className={`${styles.cloud} ${styles.cloudGold}`} />
        <span className={`${styles.cloud} ${styles.cloudGreen}`} />
      </div>

      <div className={styles.mesh}>
        <BackgroundMesh />
      </div>
    </div>
  );
}