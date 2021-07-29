import React, { useState } from "react";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/home/Home.jsx";
import Projects from "./components/projects/Projects.jsx";
import ContactUs from "./components/contactUs/ContactUs.jsx";
import Services from "./components/services/Services.jsx";
import Details from "./components/details/Details.jsx";

function App() {
  const [NavColor, setNavColor] = useState("transparent");
  React.useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0
        ? setNavColor("transparent")
        : setNavColor("white");
  });
  const allProperties = useSelector((state) => state.allProperties.data);
  const filteredProperties = useSelector((state) => state.filter.data);
  const tag = useSelector((state) => state.tag.value);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home NavColor={NavColor} />
        </Route>
        <Route exact path="/projects">
          <Projects
            NavColor={NavColor}
            title="all projects"
            data={allProperties}
          />
        </Route>
        <Route exact path="/projects/filters">
          <Projects
            NavColor={NavColor}
            title={`${tag} Projects`}
            data={filteredProperties}
          />
        </Route>

        <Route exact path="/contact">
          <ContactUs NavColor={NavColor} />
        </Route>
        <Route exact path="/services">
          <Services NavColor={NavColor} />
        </Route>
        <Route exact path="/details">
          <Details NavColor={NavColor} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
