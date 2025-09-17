// src/data.js
import project1 from "./assets/project1.png.png";
import project2 from "./assets/project2.png.png";

export const personal = {
  name: "Dorthy Christobel",
  role: "Frontend Developer",
  bio: "I'm a frontend developer building accessible, responsive websites & apps.",
  email: "dorthychristobel30@gmail.com",
  socials: {
    github: "https://github.com/dorthys3",
    linkedin: "https://www.linkedin.com/in/yourusername"
  }
}

export const projects = [
  {
    id: 1,
    title: "FOOD DELIVERY WEBSITE – With (React JS, React Router)",
    description: "	Developed a fully responsive food delivery web app using ReactJS to showcase restaurant listings, menus, and order tracking with a clean, intuitive layout. Implemented React Router for seamless navigation across pages such as Home, Menu, Cart, and Checkout. Managed state using React Hooks for dynamic cart updates.",

    image: project1,   // imported image directly
    tech: ["React", "CSS", "Vite"],
    live: "https://dorthys3.github.io/fooddelapp/",
    repo: "https://github.com/dorthys3/fooddelapp.git"
  },
  {
    id: 2,
    title: "MAHARAJA ICE-CREAM WEBSITE –With (React JS, Bootstrap)",
    description: "Built a responsive web app with React.js showcasing brand profile, products, and services.Implemented React Router for smooth multi-page navigation and reusable components for scalability. Components were reused across sections for scalability and consistency.Included image galleries and a contact form with validation using React Hooks.",
    image: project2,   // different image for project 2
    tech: ["React", "API"],
    live: "https://dorthys3.github.io/Maharaja-ice-cream/",
    repo: "https://github.com/dorthys3/Maharaja-ice-cream.git"
  }
]
