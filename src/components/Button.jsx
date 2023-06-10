import React from "react";

import styles from "../styles/Global";

const Button = ({ assetUrl, link }) => {
  return (
    <a className={styles.btnBlack} href={link} download="LilMan">
      <img src={assetUrl} alt="expo_icon" className={styles.btnIcon} />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>Download here</p>
        <p className={`${styles.btnText} font-bold text-sm`}>LilMan</p>
      </div>
    </a>
  );
};

export default Button;
