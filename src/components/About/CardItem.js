import classes from "./CardItem.module.css";

const CardItem = (props) => {
  return (
    <li className={classes.item} data-aos="zoom-in">
      <div className={classes["flip-box"]}>
        <div className={classes["flip-box__front"]}>
          <div>
            <img src={props.src} alt={props.alt} />
          </div>
          <label>{props.title}</label>
        </div>
        <div className={classes["flip-box__back"]}>
          <p>{props.children}</p>
        </div>
      </div>
    </li>
  );
};

export default CardItem;
