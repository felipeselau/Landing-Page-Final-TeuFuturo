import styles from "./Footer.module.css";

import Section from "../UI/Section";

const Footer = (props) => {
  return (
    <Section id={props.id} color="#7B53CE">
      <footer className={styles.footer} data-aos="fade-up">
        <p>© #TeuFuturo</p>
        <span>Version 2.0.1</span>
      </footer>
    </Section>
  );
};

export default Footer;
