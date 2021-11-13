import classes from "./BannerImageAnimation.module.css";

const BannerImageAnimation = (props) => {
  return (
    <div className={`${classes["banner-image"]} hide-mobile`}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.src} alt="Logo da Yaman" />
      </a>
    </div>
  );
};

export default BannerImageAnimation;
