import React from "react";
import styles from "./ContactUs.module.css";
import { BsArrowRightShort } from "react-icons/bs";
import IndividualCharacters from "@/utils/IndividualCharacters";

const ContactUs = () => {
  const header = "Contact Us";
  const headerArray = header.split(/(\s)/);

  const headline1 = "Lets unlock together the next";
  const headline2 = "level of possibilities!";
  const headline3 = "reach Out.";

  const headlineArray1 = headline1.split(/(\s)/);
  const headlineArray2 = headline2.split(/(\s)/);
  const headlineArray3 = headline3.split(/(\s)/);

  const head1 = "Social Media";
  const info1 = "twitter-instagram-github-linkedin";

  const head1Array = head1.split(/(\s)/);
  const info1Array = info1.split(/(\s)/);

  const head2 = "get in touch";
  const info2 = "deepcodep@gmail.com";

  const head2Array = head2.split(/(\s)/);
  const info2Array = info2.split(/(\s)/);

  return (
    <div className={styles.contact_us}>
      <h1 className={styles.title}>
        {headerArray.map((char, index) => (
          <IndividualCharacters char={char} index={index} key={index} />
        ))}
      </h1>
      <div className={styles.body}>
        <div className={styles.right}>
          <p className={styles.headline}>
            {headlineArray1.map((char, index) => (
              <IndividualCharacters
                space={"0.3%"}
                char={char}
                index={index}
                key={index}
              />
            ))}{" "}
            <br />
            {headlineArray2.map((char, index) => (
              <IndividualCharacters
                space={"0.3%"}
                char={char}
                index={index}
                key={index}
              />
            ))}
            <br />
            {headlineArray3.map((char, index) => (
              <IndividualCharacters
                space={"0.3%"}
                char={char}
                index={index}
                key={index}
              />
            ))}
          </p>
          <div>
            <p className={styles.head}>
              {head1Array.map((char, index) => (
                <IndividualCharacters
                  space={"0.3%"}
                  char={char}
                  index={index}
                  key={index}
                />
              ))}
            </p>
            <p className={styles.info}>
              {info1Array.map((char, index) => (
                <IndividualCharacters
                  space={"0.3%"}
                  char={char}
                  index={index}
                  key={index}
                />
              ))}
            </p>
          </div>
          <div>
            <p className={styles.head}>
              {head2Array.map((char, index) => (
                <IndividualCharacters
                  space={"0.3%"}
                  char={char}
                  index={index}
                  key={index}
                />
              ))}
            </p>
            <p className={styles.info} style={{ marginBottom: 0 }}>
              {info2Array.map((char, index) => (
                <IndividualCharacters
                  space={"0.3%"}
                  char={char}
                  index={index}
                  key={index}
                />
              ))}
            </p>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.two_inputs}>
            <input className={styles.input} placeholder="Name" type="text" />
            <input className={styles.input} placeholder="Company" type="text" />
          </div>
          <div className={styles.two_inputs}>
            <input className={styles.input} placeholder="Email" type="text" />
            <input className={styles.input} placeholder="Budget" type="text" />
          </div>
          <textarea
            className={styles.textarea}
            placeholder="Message"
            name=""
            id=""
            cols="20"
            rows="5"
          ></textarea>
          <div className={styles.submit}>
            <h1>SUBMIT</h1>
            <BsArrowRightShort className={styles.arrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
