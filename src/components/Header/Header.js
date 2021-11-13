import classes from "./Header.module.css";

import logoTeuFuturo from "../../assets/svg/teufuturo.svg";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import InfoIcon from "@mui/icons-material/Info";
import SupportIcon from "@mui/icons-material/Support";
import CategoryIcon from "@mui/icons-material/Category";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <div>
          <a href="#inicio">
            <img src={logoTeuFuturo} alt="Logo do Teu Futuro" />
          </a>
        </div>
        <div>
          <a href="#sobre">
            Sobre
            <InfoIcon className={classes.mobile} />
          </a>
          <a href="#squad">
            Squad <GroupRoundedIcon className={classes.mobile} />
          </a>
          <a href="#apoie">
            Apoie <SupportIcon className={classes.mobile} />
          </a>
          <a href="#participar">
            Quero Participar
            <CategoryIcon className={classes.mobile} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
