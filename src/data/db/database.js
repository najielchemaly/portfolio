import Mock from "../mock";

const database = {
  information: {
    name: "Naji El Chemaly",
    about: "a fast learner, motivated and hardworking full stack developer",
    aboutContent:
      "I am a fast learner, motivated and hardworking full stack developer, interested in learning and using new technologies, not bounded to a specific platform or programming language.\nMy objectives are to work in a pragmatic way, in an organisation where I can show my talent and enhance my skills to meet company's goals and objectives with full integrity.",
    dob: "07-29-1990",
    phone: "+965 99466286",
    nationality: "Lebanese",
    language: "Arabic, English, French",
    email: "najielchemaly@gmail.com",
    address: "Sharq, Kuwait City",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://linkedin.com/in/najielchemaly",
      dribbble: "",
      github: "https://github.com/najielchemaly",
    },
    brandImage: "images/profile.jpeg",
    aboutImage: "images/portfolio-image.png",
    aboutImageLg: "images/portfolio-image-lg.png",
    cvfile: "files/resume.pdf",
  },
  services: [
    {
      title: "Mobile App Development",
      icon: "mobile",
      details:
        "I have over 8+ years of experience in developing mobile application using Objective C, Swift, Java, Kotlin and React Native framework. Hands-on building app and UI components from prototypes and wireframes, work with native modules as and when required, use Native APIs for tight integrations with both platforms – Android and iOS and write automated tests to ensure error-free code and performance.",
    },
    {
      title: "Backend Development",
      icon: "brush-alt",
      details:
        "I am an experienced Node JS backend developer responsible to deploy and maintain network applications. I do manage the exchange of data between servers and users, develop back-end components, and connect applications with other web services. Hands-on designing and implementing database architecture and have experience in SQL, SQLite, MongoDB, MySql databases.",
    },
    {
      title: "Web Development",
      icon: "code",
      details:
        "I have experience in developing web applications using React JS. Hands-on building reusable components and front-end libraries for future use, optimizing components for maximum performance across a vast array of web-capable devices and browsers, designing and implementing user interface components for JavaScript-based web and mobile responsive applications.",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Naji is a valuable member of the development team. During his work with me, Naji was professional, enthusiastic, eager to learn, willing to go the extra mile, and most importantly a positive team member.\nWithout a doubt, I recommend Naji to join any team.",
      author: {
        name: "Khaled Chebat",
        designation: "RVP International Strategy",
      },
    },
    {
      id: 2,
      content:
        "I had the chance to work closely with Naji few years ago and I was impressed by his technical skills and professionalism. Naji has a nice mix of technical and personal skills that can bring tremendous value to a modern organization.",
      author: {
        name: "Rony Oneissi",
        designation: "Senior IT and Digital Transformation professional",
      },
    },
    {
      id: 3,
      content:
        "Naji is a very hardworking and productive Software Developer. Experienced, and deadline oriented and intelligent person. Naji is an asset to any company and certainly can get my full recommendation.",
      author: {
        name: "Juliano Majally",
        designation: "CTO at Bloom Alternance",
      },
    },
    {
      id: 4,
      content:
        "Naji is a skilled iOS developer with enthusiasm towards large scale solutions and implementations.\n\nNaji is efficient, timely and professional in his deliverables. He would be a great addition to any team.",
      author: {
        name: "Jad Salhani",
        designation: "Manager at PwC Middle East",
      },
    },
    {
      id: 5,
      content:
        "Naji is a very good mobile developer. I worked with him on an apple watch application for a reputable bank, he delivered a good quality product ahead of the delivery time. He possesses a good character and highly admired by his colleagues.",
      author: {
        name: "Houssam Hamdan",
        designation: "Solution Architect at CME Offshore sal",
      },
    },
  ],
  skills: [
    {
      title: "Objective-C/Swift",
      value: 90,
    },
    {
      title: "Java/Kotlin",
      value: 70,
    },
    {
      title: "React Native",
      value: 95,
    },
    {
      title: "ReactJS",
      value: 80,
    },
    {
      title: "NodeJS",
      value: 80,
    },
    {
      title: "C Sharp",
      value: 70,
    },
    {
      title: "Git",
      value: 80,
    },
    {
      title: "SQL/MongoDB",
      value: 80,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Weyay Bank",
      subtitle:
        "Kuwait's First Digital Bank, built by the youth for the youth. We use smart, secure technology to make banking easy. Out with paperwork. In with digital. Open an account instantly from your mobile phone, with a quick selfie and your Kuwait Mobile ID or Civil ID.",
      url: "https://www.weyaybank.com/Home",
    },
    {
      id: 2,
      title: "Al Rajhi App",
      subtitle:
        "Al Rajhi app provides customized personal banking experience, to manage all your banking operations anytime, anywhere, with just a simple touch. In addition to a wide variety of services and products you can benefit from, without the need to visit the branch, you can shop via the Al Rajhi app eMarket and get personal financing in a matter of seconds.",
      url: "https://www.alrajhibank.com.sa/en/personal/services/pages/the-all-new-al-rajhi-app.aspx",
    },
    {
      id: 3,
      title: "Rox Gas",
      subtitle:
        "Rox Gas mobile application is a new and unique modern way to buy or order a refill for your cylinder with a push of a button. Download our app, register, and have quick access for ordering, tracking, as well as a map view of all our selling branches and cylinders availability across Lebanon.",
      url: "https://www.roxgas.com/",
    },
    {
      id: 4,
      title: "Soffa Parking",
      subtitle:
        "At SOFFA, we integrate innovative technologies to optimize your parking-ecosystem's operations in terms of security, utility, and profitability. Through utilizing data analytics, artificial intelligence, and emerging technologies, SOFFA aims to re-imagine parking solutions.",
      url: "https://www.soffaparking.com",
    },
    {
      id: 5,
      title: "Footwin",
      subtitle:
        "Footwin is a mobile application that allows you to predict match results, challenge your colleagues and win a trip to your favorite team's Country. It was dedicated to Fifa World Cup 2018.",
      url: "https://github.com/najielchemaly/Footwin_iOS",
    },
    {
      id: 6,
      title: "Maya Diab App",
      subtitle:
        "Maya Diab is an iPad application dedicated for the celebrety Maya Diab which allows her to manage her outfits, create folder and arrange her collection of clothes.",
      url: "https://github.com/najielchemaly/mayadiab/tree/master",
    },
    {
      id: 7,
      title: "Ramy Chemaly App",
      subtitle:
        "Ramy Chemaly is an iPhone application dedicated for the celebrety Ramy Chemaly which includes all his biography, best moments at Staracademy 7 and his spiritual life.",
      url: "https://github.com/najielchemaly/RamyChemaly/tree/development",
    },
    {
      id: 8,
      title: "Innocent Minds App",
      subtitle:
        "Innocent Minds is an integrated Mobile App with active reporting for the Parents' and Caretakers' Smart Phones to view daily reports of your child, pictures and more…",
      url: "https://github.com/najielchemaly/InnocentMinds_iOS/tree/master/",
    },
    {
      id: 9,
      title: "HRMS",
      subtitle:
        "HRMS is a mobile application for HR that allows you to manage your absence, request any certificate from HR and review your payslip monthly.",
      url: "https://github.com/najielchemaly/HRMS/tree/development",
    },
    {
      id: 10,
      title: "More Projects...",
      subtitle:
        "Checkout more interesting projects I worked on with ❤ in my GitHub account 💫 😎",
      url: "https://github.com/najielchemaly?tab=repositories",
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "Dec 2019 - Present",
        position: "Senior Developer",
        company: "National Bank of Kuwait",
        details:
          "Work on Banking Digital Transformation to create a smart banking platform in all GCC. Analyze information to determine, recommend, and plan installation of a new system or modification of an existing system. Consult with engineering staff to evaluate interface between hardware and software, develop specifications and performance requirements, or resolve customer problems. Prepare reports or correspondence concerning project specifications, activities, or status.",
      },
      {
        id: 2,
        year: "Nov 2018 - Dec 2019",
        position: "Senior Mobile Developer",
        company: "Eurisko Mobility",
        details:
          "Work on native iOS mobile applications using latest Swift language and create Xcode project and file templates to help team members with using a standard and unified code. Integration with Jenkins, Git, Jira and SonarQube technologies. Develop unit testing using Jest technology for React Native apps.",
      },
      {
        id: 3,
        year: "Jan 2017 - Oct 2018",
        position: "Team Leader",
        company: "intouch Mena",
        details:
          "Provide any training that team members need and communicate clear instruction to them by listening to their feedback and keep them motivated. Create reports to update the company on the teams' progress. Delivering a good product, well tested and on time. Develop advanced mobile application integrated with our own live chat/streaming API.",
      },
      {
        id: 4,
        year: "Sep 2015 - Jan 2017",
        position: "Mobile Application Developer",
        company: "Netiks International",
        details:
          "Create mobile Internet Banking solutions, built with the latest technologies to minimize the volume of data exchanged with mobile devices. Deliver a good product, well tested and on time. Develop, test and deploy applications to the Play Store and AppStore.",
      },
      {
        id: 5,
        year: "Jul 2013 - Aug 2015",
        position: "Mobile Application Developer",
        company: "Dataflow",
        details:
          "Develop iOS mobile applications and provide e-commerce solutions. Integration with WCF service and SQL Server database. Create database structure and stored procedures.",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2009 - 2013",
        graduation: "Bachelor's degree",
        university: "Holy Spirit University of Kaslik - USEK",
        details: "Computer Science",
      },
      {
        id: 2,
        year: "1993 - 2008",
        graduation: "High School Diploma",
        university: "College Saint Sauveur - Jeita",
        details: "Computer and Information Sciences, General",
      },
    ],
  },
  contactInfo: {
    phoneNumbers: ["+965 99466286", "+961 71169428"],
    emailAddress: ["najielchemaly@gmail.com", "najielchemaly@hotmail.com"],
    address: "Sharq, Kuwait City",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
