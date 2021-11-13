import classes from "./BannerWaves.module.css";
import React from "react";
import waveImage from "../../assets/img/wave.webp";

function BannerWaves(props) {
  return (
    <section className={`${props.className} ${classes.waves}`}>
      <div
        style={{ backgroundImage: `url(${waveImage})` }}
        className={`${classes.wave} ${classes.wave1}`}
      ></div>
      <div
        style={{ backgroundImage: `url(${waveImage})` }}
        className={`${classes.wave} ${classes.wave2}`}
      ></div>
      <div
        style={{ backgroundImage: `url(${waveImage})` }}
        className={`${classes.wave} ${classes.wave3}`}
      ></div>
      <div
        style={{ backgroundImage: `url(${waveImage})` }}
        className={`${classes.wave} ${classes.wave4}`}
      ></div>
    </section>
  );
}

export default BannerWaves;
