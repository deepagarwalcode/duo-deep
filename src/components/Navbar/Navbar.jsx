import React from "react";
import styles from "./style.module.css";

const Navbar = () => {

  

  return (
    <div className={styles.nav}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.nav_mid}>
        <h4>Home</h4>
        <h4>Work</h4>
        <h4>Studio</h4>
        <h4>Contact</h4>
      </div>
      <div className={styles.nav_part3}></div>
    </div>
  );
};

export default Navbar;
