import { useState } from "react";
import styles from "./Contact.module.css";

import backpack from "../../assets/img/teufuturo-backpack.webp";

import Section from "../UI/Section";

const Contact = (props) => {
  const [userName, setUserName] = useState("");
  const [userNameIsValid, setUserNameIsValid] = useState(null);
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(null);
  const [phone, setPhone] = useState("");
  const [phoneIsValid, setPhoneIsValid] = useState(null);
  const [submitMessage, setSubmitMessage] = useState(false);

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (userName.trim() === "") {
      setUserNameIsValid(false);
    }

    if (!email.includes("@")) {
      setEmailIsValid(false);
    }

    if (phone.trim() === "") {
      setPhoneIsValid(false);
    }

    if (userName && email && phone) {
      setSubmitMessage(true);
      setUserNameIsValid(true);
      setEmailIsValid(true);
      setPhoneIsValid(true);

      setTimeout(() => {
        setSubmitMessage(false);
        setUserName("");
        setEmail("");
        setPhone("");
      }, 3000);
    }
  };

  const changeNameHandler = (event) => {
    setUserName(event.target.value);
    if (userName.trim() !== "") {
      setUserNameIsValid(true);
    }
  };

  const changeEmailHandler = (event) => {
    if (email.includes("@")) {
      setEmailIsValid(true);
    }
    setEmail(event.target.value);
  };
  const changePhoneHandler = (event) => {
    setPhone(event.target.value);
    if (phone.trim() !== "") {
      setPhoneIsValid(true);
    }
  };

  return (
    <Section id={props.id} color="#FFCF1A">
      <div className={styles.contact}>
        <div data-aos="fade-down">
          <h3>Inscreva-se!</h3>
          <img src={backpack} alt="Mochila do #TeuFuturo" />
        </div>
        <div data-aos="fade-up">
          <form onSubmit={submitFormHandler}>
            <h4>Preencha o formulário e entraremos em contato com você.</h4>
            {userNameIsValid === false && (
              <span>Adicione um valor para o nome</span>
            )}
            <input
              type="text"
              placeholder="Nome completo"
              id="name"
              value={userName}
              onChange={changeNameHandler}
              className={`${userNameIsValid === false ? styles.invalid : ""}`}
            />
            {emailIsValid === false && <span>Adicione um e-mail válido</span>}
            <input
              type="email"
              placeholder="E-mail"
              id="email"
              value={email}
              onChange={changeEmailHandler}
              className={`${emailIsValid === false ? styles.invalid : ""}`}
            />
            {phoneIsValid === false && (
              <span>Adicione um número de WhatsApp</span>
            )}
            <input
              type="tel"
              placeholder="WhatsApp"
              id="phone"
              value={phone}
              onChange={changePhoneHandler}
              className={`${phoneIsValid === false ? styles.invalid : ""}`}
            />
            <button type="submit">Enviar</button>
            {submitMessage && <p>Obrigado por se inscrever {userName}!</p>}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
