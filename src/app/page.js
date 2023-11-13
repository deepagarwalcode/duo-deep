"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Opening from "@/components/Opening/Opening";
import TextArea from "@/components/TextArea/TextArea";
import Works from "@/components/Works/Works";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import ContactUs from "@/components/ContactUs/ContactUs";

export default function Home() {
  const cursor = useRef(null);

  const callLMS = async () => {
    const LocomotiveScroll = (await import("locomotive-scroll")).default;
    const locomotiveScroll = new LocomotiveScroll();
  };

  const [cursorText, setCursorText] = useState("");
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ left: e.clientX, top: e.clientY });
  };


  useEffect(() => {
    callLMS();
  }, []);


  useEffect(() => {
    cursor.current.style.left = cursorPosition.left + "px";
    cursor.current.style.top = cursorPosition.top + "px";
  }, [cursorPosition]);

  return (
    <main className={styles.main} onMouseMove={handleMouseMove}>
      <div className={styles.cursor} ref={cursor}>{cursorText}</div>
      <Navbar />
      <Opening setCursorText={setCursorText} />
      <TextArea />
      {/* <Works /> */}
      <HowWeWork />
      <ContactUs />
    </main>
  );
}
