import React from "react";
import { Routes, Route } from "react-router-dom";
import Authors from "./components/Authors";
import Visualization from "./components/Visualization";
import Header from "./components/Header";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Sources from "./components/Sources";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import LewisComponent from "./components/authorscomponents/LewisComponent";
import HarryComponent from "./components/authorscomponents/HarryComponent";
import LyseComponent from "./components/authorscomponents/LyseComponent";
import AmosComponent from "./components/authorscomponents/AmosComponent";
import PascalComponent from "./components/authorscomponents/PascalComponent";
import VictoryComponent from "./components/authorscomponents/VictoryComponent";
import Work from "./components/Work";
import Visuals from "./components/visuals";
import AuthorComponent from "./components/authorscomponents/AuthorComponent";
import VisualsHomePage from "./components/VisualsHomePage";

const App = () => {
  const usersArray = [
    {
      userName: "Harry",
      userBg: `
      I have introductory coding skills in Spring Boot, Express.js, and Java. I can develop web applications and backend systems, utilizing their frameworks and libraries. I aim to enhance my expertise in these languages and become a proficient and versatile developer in the ever-evolving world of software engineering.
      `,
      userDescription: `
      As an amateur programmer, I possess a foundational understanding of various programming languages, including variables, data structures, control flow, loops, conditionals, and functions. My aim is to delve into more advanced topics like object-oriented programming, algorithms, and design patterns to enhance software development skills.
`,
      userImage: "https://i.ibb.co/sPZHPm9/ss.png",
      userSkill: `
      In the project, I made valuable contributions by handling tasks such as writing comprehensive project documentation, conducting thorough project evaluations, and crafting a detailed project report. My efforts played a crucial role in ensuring clarity and transparency throughout the development process, facilitating effective communication among team members, and ultimately delivering a well-documented and successful project outcome.
      `,
    },
    {
      userName: "Pascal",
      userBg: `
      My skill set includes proficiency in HTML, CSS, JavaScript, React.js, and Python. With these versatile technologies, I can develop responsive web applications and create dynamic user interfaces. Additionally, my expertise in Python enables me to handle various backend tasks and implement data-driven solutions. I am constantly honing my skills to deliver innovative and effective solutions in the ever-evolving landscape of web development.
      `,
      userDescription: `
      I am a backend developer, proficient in Django and FastAPI. I have worked on several frontend projects, which made me comfortable with frontend tools like ReactJS, HTML, CSS, Bootstrap and Tailwind CSS

      `,
      userImage: "https://i.ibb.co/9s8JRBf/81709635.jpg",
      userSkill: `
      LIn my role, I make significant contributions by setting up and managing GitHub operations, ensuring smooth collaboration within the team. I take charge of project setup and source appropriate APIs to integrate into our work. These efforts streamline the development process, foster effective teamwork, and lay the groundwork for the successful implementation of our project's objectives.
      `,
    },
    {
      userName: "Lewis",
      userBg: `
      With a strong background in web development, I am proficient in a range of technologies, including HTML, CSS, PHP, Node.js, and React.js. My expertise spans both front-end and back-end development, empowering me to create dynamic and user-friendly web applications. Leveraging my problem-solving abilities, I am dedicated to delivering innovative and high-quality solutions to meet the challenges of modern web development.
      `,
      userDescription: `
      I'm Lewis, a passionate full-stack developer with a strong desire to leverage my expertise to create software that simplifies and enhances people's lives. With proficiency in both front-end and back-end technologies, I strive to craft innovative solutions that address real-world challenges. Through continuous learning and problem-solving, I am committed to making a positive impact by developing user-friendly and efficient software applications for the benefit of all.
      `,
      userImage: "https://i.ibb.co/yRDsQWV/og.png",
      userSkill: `
      In my role, I contributed significantly by implementing the user interface, fostering effective collaboration within the team, and optimizing the codebase for improved performance. By focusing on creating an intuitive and visually appealing user experience, I helped enhance the overall functionality of the project. Through seamless teamwork and efficient code optimization, I played a pivotal role in delivering a successful and high-performing web application.
      `,
    },
    {
      userName: "Lyse",
      userBg: `
      My skills include proficiency in HTML, CSS, JavaScript, React.js, and Python. I have experience in web development, creating responsive and user-friendly interfaces. With Python, I can handle backend tasks and implement data-driven solutions. Additionally, I possess strong problem-solving abilities, effective communication, and a passion for continuous learning, enabling me to adapt to new challenges and contribute effectively to software development projects.
      `,
      userDescription: `
      As a web developer, my primary goal is to create user-centered tech solutions that prioritize usability and enhance the overall user experience. With a passion for crafting intuitive interfaces and employing cutting-edge technologies, I am committed to developing applications that cater to the needs and preferences of the end-users. Through constant innovation and attention to user feedback, I strive to deliver meaningful and impactful solutions in the digital landscape..
      `,
      userImage: "https://i.ibb.co/Pw7YFZK/lyse.png",
      userSkill: `
      In this project, I took on the role of the secretary and made significant contributions to the front-end development of the website. I played a key part in designing and implementing the user interface, ensuring a visually appealing and intuitive experience for the users. Through effective collaboration and attention to detail, my contributions played a vital role in delivering a successful and engaging web platform.
      `,
    },
    {
      userName: "Amos",
      userBg: `
      I excel in network design, implementation, and maintenance, 
      along with configuring firewalls and security appliances. I conduct vulnerability assessments and penetration testing, 
      handle incident response, and ensure effective communication as a team lead.
      `,
      userDescription: `
      I'm deeply passionate about Networking and Cybersecurity, 
      with a focus on securing assets in cyberspace. 
      My educational background includes a degree in Computer Science with a specialization in this field.
       I've actively participated in networking and cybersecurity competitions, continually updating my knowledge.
      `,
      userImage: "https://i.ibb.co/fD71g7n/TOUL7996.jpg",
      userSkill:
        "As the team lead, I played a vital role in contributing to the group's success. By taking charge of organizing tasks and coordinating efforts, I ensured that our project progressed efficiently and effectively. Additionally, I actively participated in crafting the group report, leveraging my expertise to provide valuable insights and thorough analysis. Together with my team, we delivered a cohesive and well-structured report that showcased the collective efforts of everyone involved. ",
    },
    {
      userName: "Victory",
      userBg: `
      As a skilled UI/UX designer, I excel in creating visually appealing and user-friendly interfaces. My proficiency extends to Python, HTML, CSS, and C++, allowing me to develop functional and responsive web applications. With experience in various design projects, I am well-versed in translating concepts into compelling designs. Additionally, I actively engage in volunteering, research, and documenting my experiences, showcasing my dedication to continuous learning and personal growth.
      `,
      userDescription: `
      I am a UI/UX designer, also proficient in Python, HTML, CSS and C++. I have worked on a few design projects and spend my free time volunteering, doing research and documenting my experiences.
      `,
      userImage: "https://i.ibb.co/khqv8PF/Victory.jpg",
      userSkill: `
      In this project, my contributions have been focused on writing comprehensive project documentation, conducting project evaluations, and preparing a detailed project report. Through meticulous documentation, I ensure clarity and transparency in the project's development. Evaluations help assess progress and identify areas for improvement, while the final report summarizes the project's outcomes and achievements. My efforts play a crucial role in the successful completion of the project and contribute to knowledge sharing within the team.
      `,
    },
  ];

  return (
    <div>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="authors" element={<Authors />}>
            <Route
              path="lewis"
              element={<AuthorComponent userData={usersArray[2]} />}
            />
            <Route
              path="harry"
              element={<AuthorComponent userData={usersArray[0]} />}
            />
            <Route
              path="pascal"
              element={<AuthorComponent userData={usersArray[1]} />}
            />
            <Route
              path="lyse"
              element={<AuthorComponent userData={usersArray[3]} />}
            />
            <Route
              path="amos"
              element={<AuthorComponent userData={usersArray[4]} />}
            />
            <Route
              path="victory"
              element={<AuthorComponent userData={usersArray[5]} />}
            />
          </Route>
          <Route path="/visualspage" element={<VisualsHomePage />}>
            <Route index element={<Visualization />} />
            <Route path="visualization" element={<Visualization />} />
            <Route path="work" element={<Work />} />
            <Route path="visuals" element={<Visuals />} />
          </Route>
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
};

export default App;
