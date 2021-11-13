import classes from "./Participant.module.css";

const Participant = (props) => {
  const showParticipantInformationHandler = () => {
    const participant = {
      name: props.name,
      image: props.src,
      description: props.description,
      linkedin: props.linkedin,
      github: props.github,
    };

    props.onShowInfo(participant);
  };

  return (
    <li
      className={classes.card}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <img src={props.src} alt="Foto do Participante" />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <button onClick={showParticipantInformationHandler}>Ver Mais</button>
    </li>
  );
};

export default Participant;
