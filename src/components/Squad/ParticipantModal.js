import styles from "./ParticipantModal.module.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ParticipantModal = (props) => {
  const { image, name, linkedin, description, github } = props.participant;

  const closeInfoHandler = () => {
    props.onClose(false);
  };
  return (
    <div className={styles["participant-modal"]}>
      <div
        className={`${styles["squad-backdrop"]}  `}
        onClick={closeInfoHandler}
      />
      <button onClick={closeInfoHandler}>×</button>
      <div className={styles["participant-info"]}>
        <div>
          <img src={image} alt={`Foto do participante ${name}`} />
          <div>
            <h4>{name}</h4>
            <span>
              <a href={linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon />
              </a>
              {github && (
                <a href={github} target="_blank" rel="noreferrer">
                  <GitHubIcon />
                </a>
              )}
            </span>
          </div>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ParticipantModal;
