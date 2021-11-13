import { useState } from "react";

import classes from "./Squad.module.css";
import Section from "../UI/Section";
import Participant from "./Participant";
import ParticipantModal from "./ParticipantModal";
import participants from "../../data/people";

const Squad = (props) => {
  const [modalInfo, setModalInfo] = useState(false);
  const [participantInfo, setParticipantInfo] = useState({});

  const showInfoHandler = (participantData) => {
    setModalInfo(true);
    setParticipantInfo(participantData);
  };

  const closeInfoHandler = () => {
    setModalInfo(false);
  };

  return (
    <Section id={props.id} color="#D8D1E2">
      {modalInfo ? (
        <ParticipantModal
          participant={participantInfo}
          onClose={closeInfoHandler}
        />
      ) : (
        ""
      )}
      <div className={classes["squad-header"]}>
        <h3 data-aos="flip-left">SQUAD</h3>
        <p>Conhecendo um pouco dos participantes.</p>
      </div>
      <div className={classes["squad-participants"]}>
        <ul>
          {participants.map((participant) => {
            return (
              <Participant
                key={participant.name}
                src={participant.src}
                name={participant.name}
                description={participant.description}
                linkedin={participant.linkedin}
                github={participant.github}
                onShowInfo={showInfoHandler}
              />
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Squad;
