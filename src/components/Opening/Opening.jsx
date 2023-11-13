import React from "react";
import styles from "./style.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const Opening = ({ setCursorText }) => {
  const firstLine = useRef(null);
  const secondLine = useRef(null);
  const opening = useRef(null);
  const video = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);


    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: firstLine.current,
        // scroller: opening.current,
        // markers: true,
        start: "top 22%",
        end: "top 0",
        scrub: 2,
      },
    });
    timeline.to(firstLine.current, {
      // duration: 1,
      x: "-30vw",
    });
    timeline.to(
      secondLine.current,
      {
        x: "+30vw",
        // duration: 1,
      },
      "<"
    );
    timeline.to(
      video.current,
      {
        height: "97vh",
        width: "75vw",
        transform: "translateY(-20vh)",
        // duration: 1
      },
      "<"
    );
  }, []);

  return (
    <div className={styles.opening} ref={opening}>
      <p className={styles.opening_first} ref={firstLine}>
        Digitally Crafted
      </p>
      <p ref={secondLine} className={styles.opening_second}>
        Brand Experiences
      </p>

      <video
        onMouseEnter={() => {
          setCursorText("View Case Study");
        }}
        onMouseLeave={() => {
          setCursorText("");
        }}
        ref={video}
        src="https://cdn.dribbble.com/userupload/3237492/file/original-029caca17ba064bafba9d182762cb381.mp4"
        autoPlay
        muted
        loop
        className={styles.video}
      ></video>
    </div>
  );
};

export default Opening;
