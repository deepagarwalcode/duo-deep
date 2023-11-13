import React, { useLayoutEffect } from "react";
import styles from "./TextArea.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import IndividualCharacters from "@/utils/IndividualCharacters";

const TextArea = () => {
  const textarea = useRef(null);
  const textRef = useRef(null);
  const spanRef = useRef(null);

  const texth1 = "We are Duo Studio";
  const textArray = texth1.split(/(\s)/);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: textarea.current,
        // scroller: opening.current,
        // markers: true,
        start: "top 50%",
        end: "top 35%",
        scrub: 4,
      },
    });
    timeline.to("body", {
      duration: 1,
      color: "#151515",
      backgroundColor: "#fff",
    });
  }, []);

  const info =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. numquam ratione repudiandae illo distinctio vitae nulla est illum, quam fugit soluta, dolorum adipisci quae sequi error autem maiores sed mollitia enim, odit excepturi dignissimos saepe. Architecto quasi quam quod mollitia?";
    const infoArray = info.split(/(\s)/);

  const texth2 = "WE HELP YOUR BRAND STAND OUT WITH YOUR DIGITAL PRESENCE.";
  const textArray2 = texth2.split(/(\s)/);

  return (
    <div className={styles.textarea} ref={textarea}>
      <h2 className={styles.ta_header} ref={textRef}>
        {textArray.map((char, index) => (
          <>
            <IndividualCharacters
              space={"0.5%"}
              key={index}
              char={char}
              index={index}
            />
            {/* <span>&nbsp;</span> */}
          </>
        ))}
      </h2>
      <div className={styles.ta_info}>
        <p className={styles.ta_info_text}>
          {textArray2.map((char, index) => (
            <IndividualCharacters
              space={"2%"}
              key={index}
              char={char}
              index={index}
            />
          ))}
        </p>
        <p className={styles.ta_info_text_sm}>
          {
            infoArray.map((char, index) => (
              <IndividualCharacters
                space={"0.5%"}
                key={index}
                char={char}
                index={index}
              />
            ))
          }
        </p>
      </div>
    </div>
  );
};

export default TextArea;
