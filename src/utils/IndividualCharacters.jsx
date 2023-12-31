import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import { poweredByHeader } from "../../next.config";

const IndividualCharacters = ({ char, index, space }) => {
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: text.current,
        // scroller: opening.current,
        // markers: true,
        start: "top 90%",
        // end: "top 30%",
        // scrub: true
      },
    });
    timeline.from(text.current, {
      // duration: 1,
      duration: 0.7,
      ease: "power4.inOut",
      y: "100%",
      opacity: 0,
      stagger: 0.2,
      delay: index * 0.02,
    });
  }, []);
  return (
    <span ref={text} style={{paddingRight: space}}>
      {char} 
    </span>
  );
};

export default IndividualCharacters;
