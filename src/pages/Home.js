import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Particle from "../components/Particle";
import Socialicons from "../components/Socialicons";
// import strings from "../data/localization/strings";

function Home({ lightMode }) {
  const [information, setInformation] = useState("");

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>{"strings.common.title"}</title>
        <meta name="description" content={"strings.common.title"} />
      </Helmet>
      <div className="mi-home-area mi-padding-section">
        <Particle lightMode={lightMode} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  {"strings.greeting"}{" "}
                  <span className="color-theme">{information.name}</span>
                </h1>
                <p>{information.aboutContent}</p>
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
