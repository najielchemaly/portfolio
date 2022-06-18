import LocalizedStrings from "react-localization";

export default new LocalizedStrings({
  en: {
    common: { title: "Naji El Chemaly Portfolio" },
    home: { greeting: "Hi, I am" },
    about: {
      iam: "I am",
      fullname: "Full Name",
      age: "Age",
      years: (age) => `${age} Years`,
      phone: "Phone",
      nationality: "Nationality",
      languages: "Languages",
      email: "Email",
      address: "Address",
      freelance: "Freelance",
      downloadCV: "Download CV",
    },
    contact: {
      getInTouch: "Get In Touch",
      enterYourName: "Enter Your Name*",
      enterYourEmail: "Enter Your Email*",
      enterYourSubject: "Enter Your Subject*",
      enterYourMessage: "Enter Your Message*",
      sendEmail: "Send Email",
      validator: (field) => `${field} is required`,
      messageSent: "Your message has been sent successfully",
    },
  },
  ar: {},
});
