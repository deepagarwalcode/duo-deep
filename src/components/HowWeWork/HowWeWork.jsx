import React, { useLayoutEffect, useRef } from "react";
import styles from "./hww.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HowWeWork = () => {
  
  const hww = useRef(null);


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: hww.current,
        // scroller: opening.current,
        // markers: true,
        start: "top top+=30%",
        end: "top 15%",
        scrub: 4,
      },
    });
    timeline.to("body", {
      duration: 1,
      color: "#fff",
      backgroundColor: "#151515"
      
    });
  }, []);


  return (
    <div className={styles.hww} ref={hww}>
      <div className={styles.hww_elem}>
        <img
        className={styles.s1}
          src="https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <div className={styles.elem_text}>
          <h1>Strategy</h1>
          <h1>Strategy</h1>
        </div>
        <img
        className={styles.s2}

          src="https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
          alt=""
        />
      </div>
      <div className={styles.hww_elem}>
        <img
          className={styles.i1}
          src="https://images.unsplash.com/photo-1634322259580-4441b0dd5f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
          alt=""
        />
        <div className={styles.elem_text}>
          <h1>Identity</h1>
          <h1>Identity</h1>
        </div>
        <img
          className={styles.i2}
          src="https://images.unsplash.com/photo-1501023956373-055b874f2929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
      <div className={styles.hww_elem}>
        <img
          className={styles.e1}
          src="https://images.unsplash.com/photo-1627890285103-aabd37bb0d65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
        <div className={styles.elem_text}>
          <h1>Experience</h1>
          <h1>Experience</h1>
        </div>
        <img
          className={styles.e2}
          src="https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default HowWeWork;
