import styles from "./Section.module.css";

const Section = (props) => {
  return (
    <section
      id={props.id}
      className={styles.section}
      style={{ backgroundColor: props.color || "white" }}
    >
      {props.children}
    </section>
  );
};

export default Section;
