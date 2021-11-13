import classes from "./CardsList.module.css";
import CardItem from "./CardItem";

const CardsList = (props) => {
  return (
    <div className={classes["card-list"]}>
      <div>
        <img src={props.src} alt={props.alt} data-aos="fade-up" />
      </div>
      <ul>
        {props.items.map((card, index) => {
          return (
            <CardItem
              key={index}
              title={card.title}
              src={card.src}
              alt={card.alt}
            >
              {card.text}
            </CardItem>
          );
        })}
      </ul>
    </div>
  );
};

export default CardsList;
