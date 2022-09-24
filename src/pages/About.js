import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import ProgressiveImage from "react-progressive-image";
import Slider from "react-slick";

import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import strings from "../data/localization/strings";

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleToggler = (event) => {
    setToggler(!toggler);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    axios.get("/api/services").then((response) => {
      setServices(response.data);
    });
    axios.get("/api/reviews").then((response) => {
      setReviews(response.data);
    });
  }, []);

  const calculateAge = (dateString) => {
    let dateOfBirth = new Date(dateString.replace(/-/g, "/"));
    let ageDifMs = Date.now() - dateOfBirth.getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <Layout>
      <Helmet>
        <title>{strings.common.title}</title>
        <meta name="description" content={strings.common.title} />
      </Helmet>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row align-items-center">
            <div className="col-lg-6 mi-about-img">
              <div className="mi-about-image">
                <ProgressiveImage
                  src={require("../assets/images/portfolio-image.png")}
                >
                  {(src) => (
                    <img
                      style={{ resizeMode: "center" }}
                      src={src}
                      alt="aboutimage"
                      onClick={() => handleToggler(!toggler)}
                    />
                  )}
                </ProgressiveImage>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  {strings.about.iam}{" "}
                  <span className="color-theme">{information.name}</span>
                </h3>
                <p>{information.about}</p>
                <ul>
                  {!information.name ? null : (
                    <li>
                      <b>{strings.about.fullname}</b> {information.name}
                    </li>
                  )}
                  {!information.dob ? null : (
                    <li>
                      <b>{strings.about.age}</b>{" "}
                      {strings.about.years(calculateAge(information.dob))}
                    </li>
                  )}
                  {!information.phone ? null : (
                    <li>
                      <b>{strings.about.phone}</b>
                      <a href={`tel:${information.phone}`}>
                        {information.phone}
                      </a>
                    </li>
                  )}
                  {!information.nationality ? null : (
                    <li>
                      <b>{strings.about.nationality}</b>{" "}
                      {information.nationality}
                    </li>
                  )}
                  {!information.language ? null : (
                    <li>
                      <b>{strings.about.languages}</b> {information.language}
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b>{strings.about.email}</b>
                      <a href={`mailto:${information.email}`}>
                        {information.email}
                      </a>
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>{strings.about.address}</b> {information.address}
                    </li>
                  )}
                  {!information.freelanceStatus ? null : (
                    <li>
                      <b>{strings.about.freelance}</b>{" "}
                      {information.freelanceStatus}
                    </li>
                  )}
                </ul>
                <a
                  href={information.cvfile}
                  target="_blank"
                  className="mi-button"
                >
                  {strings.about.downloadCV}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="Services" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map((service) => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt-30"
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Reviews" />
          <div className="row justify-content-center">
            <div className="col-12">
              <Slider className="mi-testimonial-slider" {...sliderSettings}>
                {reviews.map((review) => (
                  <Testimonial key={review.id} content={review} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
