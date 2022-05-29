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
import MyProfile from "./components/services/MyProfile.jsx";
import MyProperties from "./components/services/MyProperties.jsx";
import Profile from "./components/seller/Profile.jsx";

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
  const sellerProperties = useSelector((state) => state.sellerProperties.data);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home NavColor={NavColor} />
        </Route>
        <Route exact path="/projects">
          <Projects
            NavColor={NavColor}
            title="all Properties"
            data={allProperties}
          />
        </Route>
        <Route exact path="/projects/filters">
          <Projects
            NavColor={NavColor}
            title={`${tag} Properties`}
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
        <Route exact path="/profile">
          <Profile NavColor={NavColor} />
        </Route>
        <Route exact path="/myProfile">
          <MyProfile NavColor={NavColor} />
        </Route>
        <Route exact path="/myProperties">
          <MyProperties NavColor={NavColor} data={sellerProperties} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
