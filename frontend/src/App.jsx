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
// import Visuals from "./components/Visuals";
import AuthorComponent from "./components/authorscomponents/AuthorComponent";
import VisualsHomePage from "./components/VisualsHomePage";
import Salary from "./components/Salary";

const App = () => {
  const usersArray = [
    {
      userName: "Harry",
      userBg: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates? Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Cumque
                    reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
      userDescription: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
      userImage: "https://randomuser.me/api/portraits/men/11.jpg",
      userSkill: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
    },
    {
      userName: "Pascal",
      userBg: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates? Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Cumque
                    reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
      userDescription: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
      userImage: "https://randomuser.me/api/portraits/men/11.jpg",
      userSkill: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
    },
    {
      userName: "Lewis",
      userBg: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates? Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Cumque
                    reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
      userDescription: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
      userImage: "https://randomuser.me/api/portraits/men/11.jpg",
      userSkill: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
    },
    {
      userName: "Lyse",
      userBg: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates? Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Cumque
                    reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
      userDescription: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
      userImage: "https://randomuser.me/api/portraits/men/11.jpg",
      userSkill: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
    },
    {
      userName: "Amos",
      userBg: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates? Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Cumque
                    reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
      userDescription: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
      userImage: "https://randomuser.me/api/portraits/men/11.jpg",
      userSkill: " ",
    },
    {
      userName: "Victory",
      userBg: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates? Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Cumque
                    reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
      userDescription: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
      `,
      userImage: "https://randomuser.me/api/portraits/men/11.jpg",
      userSkill: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
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
            <Route path="visuals" element={<Salary />} />
          </Route>
          {/* <Route path="/salary" element={<Salary />} /> */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
};

export default App;
