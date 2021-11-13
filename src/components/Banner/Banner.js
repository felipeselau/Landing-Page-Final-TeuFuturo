import { useState, useEffect } from "react";
import classes from "./Banner.module.css";

import logoYaman from "../../assets/img/logo-yaman.webp";
import logoImed from "../../assets/img/logo-imed.webp";
import studentImage from "../../assets/img/student.webp";

import BannerImageAnimation from "./BannerImageAnimation";
import BannerExplorer from "./BannerExplorer";
import BannerWaves from "./BannerWaves";

const Banner = (props) => {
  const [currentImage, setCurrentImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevState) => !prevState);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <section id={props.id} className={classes.banner}>
      <BannerExplorer />
      {currentImage ? (
        <BannerImageAnimation
          src={logoYaman}
          link="https://yaman.com.br/pt-br/"
        />
      ) : (
        <BannerImageAnimation src={logoImed} link="https://www.imed.edu.br/" />
      )}
      <a className={classes.button} href="#participar">
        Participar
      </a>
      <div className={classes["banner-arrow"]}>
        <a href="#sobre">
          <i />
        </a>
      </div>
      <div className={classes["banner-logo"]}>
        <img src={studentImage} alt="Logo do Teu Futuro" />
      </div>
      <BannerWaves />
    </section>
  );
};

export default Banner;
