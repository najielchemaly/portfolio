import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import * as Icon from "react-feather";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Sectiontitle from "../components/Sectiontitle";
import strings from "../data/localization/strings";
import sendMail from "../data/mail/mail";

const initFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Contact() {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [emailAddress, setEmailAddress] = useState([]);
  const [address, setAddress] = useState([]);
  const [formdata, setFormdata] = useState(initFormData);
  const [handler, setHandler] = useState(null);
  const form = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formdata.name) {
      setHandler({
        success: false,
        message: strings.contact.validator("Name"),
      });
    } else if (!formdata.email) {
      setHandler({
        success: false,
        message: strings.contact.validator("Email"),
      });
    } else if (!formdata.subject) {
      setHandler({
        success: false,
        message: strings.contact.validator("Subject"),
      });
    } else if (!formdata.message) {
      setHandler({
        success: false,
        message: strings.contact.validator("Message"),
      });
    } else {
      sendMail(formdata)
        .then(() => {
          setHandler({ success: true, message: strings.contact.messageSent });
          setFormdata(initFormData);
        })
        .catch((text) => console.log(text));
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAlerts = () => {
    if (handler && !handler.success) {
      return <div className="alert alert-danger mt-4">{handler.message}</div>;
    } else if (handler && handler.success) {
      return <div className="alert alert-success mt-4">{handler.message}</div>;
    } else {
      return null;
    }
  };

  useEffect(() => {
    axios.get("/api/contactinfo").then((response) => {
      setPhoneNumbers(response.data.phoneNumbers);
      setEmailAddress(response.data.emailAddress);
      setAddress(response.data.address);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>{strings.common.title}</title>
        <meta name="description" content={strings.common.title} />
      </Helmet>
      <div className="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Contact Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-contact-formwrapper">
                <h4>{strings.contact.getInTouch}</h4>
                <form
                  ref={form}
                  action="#"
                  className="mi-form mi-contact-form"
                  onSubmit={submitHandler}
                >
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-name">
                      {strings.contact.enterYourName}
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      id="contact-form-name"
                      value={formdata.name}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-email">
                      {strings.contact.enterYourEmail}
                    </label>
                    <input
                      onChange={handleChange}
                      type="email"
                      name="email"
                      id="contact-form-email"
                      value={formdata.email}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-subject">
                      {strings.contact.enterYourSubject}
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="subject"
                      id="contact-form-subject"
                      value={formdata.subject}
                    />
                  </div>
                  <div className="mi-form-field">
                    <label htmlFor="contact-form-message">
                      {strings.contact.enterYourMessage}
                    </label>
                    <textarea
                      onChange={handleChange}
                      name="message"
                      id="contact-form-message"
                      cols="30"
                      rows="6"
                      value={formdata.message}
                    ></textarea>
                  </div>
                  <div className="mi-form-field">
                    <button className="mi-button" type="submit">
                      {strings.contact.sendEmail}
                    </button>
                  </div>
                </form>
                {handleAlerts()}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-contact-info">
                {!phoneNumbers ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Phone />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>{strings.about.phone}</h6>
                      {phoneNumbers.map((phoneNumber) => (
                        <p key={phoneNumber}>
                          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {!emailAddress ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.Mail />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>{strings.about.email}</h6>
                      {emailAddress.map((email) => (
                        <p key={email}>
                          <a href={`mailto:${email}`}>{email}</a>
                        </p>
                      ))}
                    </div>
                  </div>
                )}
                {!phoneNumbers ? null : (
                  <div className="mi-contact-infoblock">
                    <span className="mi-contact-infoblock-icon">
                      <Icon.MapPin />
                    </span>
                    <div className="mi-contact-infoblock-content">
                      <h6>{strings.about.address}</h6>
                      <p>{address}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
