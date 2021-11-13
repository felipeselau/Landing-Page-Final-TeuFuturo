import { Fragment, useState } from "react";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sponsor from "./components/Sponsor/Sponsor";
import Squad from "./components/Squad/Squad";

const App = () => {
  const [headerVisibility, setHeaderVisibility] = useState(false);

  const scrollPageHandler = () => {
    const pageHeight = window.innerHeight;
    const currentHeight = window.scrollY;
    if (currentHeight + 1 > pageHeight) {
      setHeaderVisibility(true);
    } else {
      setHeaderVisibility(false);
  
    }
  };

  window.addEventListener("scroll", scrollPageHandler);

  return (
    <Fragment>
      {headerVisibility && <Header />}
      <Banner id="inicio" />
      <About id="sobre" />
      <Squad id="squad" />
      <Sponsor id="apoie" />
      <Contact id="participar" />
      <Footer id="rodape" />
    </Fragment>
  );
};

export default App;
