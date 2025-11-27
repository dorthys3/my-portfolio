// src/data.js
import project1 from "./assets/project1.png.png";
import project2 from "./assets/project2.png.png";
import project3 from "./assets/project3.png.png";
import project5 from "./assets/project5.jpg.png";
export const personal = {
  name: "Dorthy Christobel",
  role: "Full-Stack Developer",
  bio: "Aspiring Full-Stack Developer skilled in building responsive web applications using Java, Spring Boot, React, and MySQL. Passionate about solving real-world problems and continuously improving my development skills.",
  email: "dorthychristobel30@gmail.com",
  socials: {
    github: "https://github.com/dorthys3",
    linkedin: "https://www.linkedin.com/in/yourusername"
  }
}

export const projects = [
    {
    id: 1,
    title: "Cake Bro – Full-Stack Cake E-Commerce Platform – With (React JS, Spring Boot, MySQL)",
    description: "	Built a full-stack cake e-commerce app with 15+ listings, backend image storage, and secure CRUD features. Implemented search, filtering, and a responsive UI for smoother product navigation. Containerized with Docker and deployed on Render with GitHub-based CI/CD. Created optimized REST APIs and efficient MySQL queries for faster load times.",
    image: project5,   // imported image directly
    tech: ["Spring Boot", "MySQL", "React JS", "Bootstrap", "Docker", "Render"],
    live: "https://cake-app-jh38.onrender.com/",
    repo: "https://github.com/dorthys3/cake-app.git"
  },
  {
    id: 2,
    title: "FOOD DELIVERY WEBSITE – With (React JS, React Router)",
    description: "	Developed a fully responsive food delivery web app using ReactJS to showcase restaurant listings, menus, and order tracking with a clean, intuitive layout. Implemented React Router for seamless navigation across pages such as Home, Menu, Cart, and Checkout. Managed state using React Hooks for dynamic cart updates.",

    image: project1,   // imported image directly
    tech: ["React", "CSS", "Vite"],
    live: "https://dorthys3.github.io/fooddelapp/",
    repo: "https://github.com/dorthys3/fooddelapp.git"
  },
  {
    id: 3,
    title: "MAHARAJA ICE-CREAM WEBSITE –With (React JS, Bootstrap)",
    description: "Built a responsive web app with React.js showcasing brand profile, products, and services.Implemented React Router for smooth multi-page navigation and reusable components for scalability. Components were reused across sections for scalability and consistency.Included image galleries and a contact form with validation using React Hooks.",
    image: project2,   // different image for project 2
    tech: ["React", "API"],
    live: "https://dorthys3.github.io/Maharaja-ice-cream/",
    repo: "https://github.com/dorthys3/Maharaja-ice-cream.git"
  },
  {
    id: 4,
    title: "PERSONAL PORTFOLIO –With (React JS, Bootstrap)",
    description: "Built a responsive web app with React.js showcasing my studies and live project demo. Implemented React Router for smooth multi-page navigation and reusable components for scalability. Components were reused across sections for scalability and consistency.Included a contact form with validation using React Hooks.",
    image: project3,   // different image for project 2
    tech: ["React", "API"],
    live: "https://dorthys3.github.io/Maharaja-ice-cream/",
    repo: "https://github.com/dorthys3/Maharaja-ice-cream.git"
  }
]
