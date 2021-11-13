import classes from "./Outdoor.module.css";

const Outdoor = (props) => {
  return (
    <div data-aos={props["data-aos"]} className={classes.outdoor}>
      {props.children}
    </div>
  );
};

export default Outdoor;
