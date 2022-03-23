import "./contact.css";
import { GrMail } from "react-icons/gr";
import { BsMessenger } from "react-icons/bs";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
import { Spinner } from "react-bootstrap";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Contact = () => {
  const [loading, setLoading] = useState(false);

  let [color, setColor] = useState("#ffffff");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .sendForm(
        "service_aozoc45",
        "template_vmkr8gr",
        form.current,
        "7i0rzuHkmRGj7mBBG"
      )
      .then(
        (result) => {
          setLoading(false);

          console.log(result.text);
        },
        (error) => {
          setLoading(false);

          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5 className="dark:text-white">Get in Touch</h5>
      <h2 className="dark:text-white">Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GrMail className="contact__option-icon text-white" />
            <h4 className="text-white">Email: </h4>
            <h4 className="text-white">luxurydemon123@gmail.com</h4>
            <a
              href="mailto:luxurydemon123@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon text-white" />
            <h4 className="text-white">Messenger</h4>
            <a
              href="https://m.me/luxurydemon99/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            className=""
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary button-form">
            {/* <Spinner animation="border" variant="info" /> */}
            {loading ? (
              <>
                <SyncLoader
                  color={color}
                  loading={loading}
                  css={override}
                  size={10}
                />
              </>
            ) : (
              "Send Email"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
