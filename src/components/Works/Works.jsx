import React from "react";
import styles from "./Works.module.css";
import Image from "next/image";

const Works = () => {
  return (
    <div className={styles.works}>
      <p className={styles.works_header}>Selected Works</p>
      <div className={styles.works_container}>
        <div className={styles.works_container_row1}>
          <div className={styles.work_left1}>
            <img
            //   fill={true}
              alt="background Image"
              src={
                "https://images.unsplash.com/photo-1691679829047-aa2674339070?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
              }
              
            />
            <p>Spinning Top</p>
          </div>
          <div className={styles.work_right1}>
            <img
            //   fill={true}
              alt="background Image"
              src={
                "https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              }
            />
            <p>Explorer</p>
          </div>
        </div>
        <div className={styles.works_container_row2}>
          <div className={styles.work_left2}>
            <img
            //   fill={true}
              alt="background Image"
              src={
                "https://images.unsplash.com/photo-1682687981974-c5ef2111640c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              }
            />
            <p>Natures Truth</p>
          </div>
          <div className={styles.work_right2}>
            <img
            //   fill={true}
              alt="background Image"
              src={
                "https://images.unsplash.com/photo-1526916027372-0c0852cef5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
              }
            />
            <p>Solitude</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
