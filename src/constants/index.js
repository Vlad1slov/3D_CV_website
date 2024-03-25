import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    restAPI,
    bootstrap,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    BookLibrary,
    Converter,
    Cryptoverse,
    TravelAdvisor,
    threejs,
    SportActivities,
    Chess,
    Computer,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "restAPI",
      icon: restAPI,
    },
  ];
  
  const experiences = [
    {
      title: "JavaScript",
      company_name: "Self Education",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2022 - Present",
      points: [
        "My programming journey started with learning JavaScript on the FreeCodeCamp website. This experience sparked my passion for programming and I decided to turn it into a career.",
        "I enrolled in several free courses and watched a multitude of tutorials on YouTube.",
        "Web applications development on vanilla.js.",
        "Continue diving into documentation and implement my knowledge in practical projects.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Self Education",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Self Education",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "Developing and maintaining web applications using Node.js and other related technologies.",
        "Creating various API servers using express.js. Using Rest API to receive data and implement it into projects.",
        "Continue diving into documentation and implement my knowledge in practical projects."
      ],
    },
    {
      title: "Web Developer",
      company_name: "Team Challenge",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
        "Developing and maintaining web application using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Chess was my first passion, I devoted 2 years of my life to it, and achieved good results. From victories in student tournaments to 10th place in the national youth competition.",
      name: "Chess",
      image: Chess,
    },
    {
      testimonial:
        "I am a very active person. I like to play all kinds of sports and I do it well. I also went to table tennis and football clubs. Active leisure keeps my mind clean and gives me energy.",
      name: "Sport Activities",
      image: SportActivities,
    },
    {
      testimonial:
        "In my spare time, I like to improve my programming skills and play computer games with friends and we also like to gather to play board games.",
      name: "Computer Games",
      designation: "CTO",
      company: "456 Enterprises",
      image: Computer,
    },
  ];
  
  const projects = [
    {
      name: "Cryptocurrency Converter",
      description:
        "Data analysis about cryptocurrency, news that may affect the market. Project based on fetching API from external source methods",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restAPI",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Cryptoverse,
      source_code_link: "https://github.com/Vlad1slov/Cryptocurrencies-react-API",
      source_website_link: "https://cryptocurrencies-react-api-vladislavs-projects-46f80dfa.vercel.app/",
    },
    {
      name: "Book Library",
      description:
        "Library, using a local API to generate a book with using redux",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express.js",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: BookLibrary,
      source_code_link: "https://github.com/Vlad1slov/Redux-Library-project",
      source_website_link: "https://cryptocurrencies-react-api-vladislavs-projects-46f80dfa.vercel.app/",
    },
    {
      name: "Travel Advisor",
      description:
        "Travel advisor working with Google Maps API. Project based on fetching API from external source methods",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "GoogleMapsAPI",
          color: "green-text-gradient",
        },
        {
          name: "material-ui",
          color: "pink-text-gradient",
        },
      ],
      image: TravelAdvisor,
      source_code_link: "https://github.com/",
      source_website_link: "https://cryptocurrencies-react-api-vladislavs-projects-46f80dfa.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };