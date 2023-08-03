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

const App = () => {
  return (
    <div>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="authors" element={<Authors />}>
            <Route path="lewis" element={<LewisComponent />} />
            <Route path="harry" element={<HarryComponent />} />
            <Route path="pascal" element={<PascalComponent />} />
            <Route path="lyse" element={<LyseComponent />} />
            <Route path="amos" element={<AmosComponent />} />
            <Route path="victory" element={<VictoryComponent />} />
          </Route>
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/work" element={<Work />} />
          <Route path="/visuals" element={<Visuals />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </Layout>
      <Footer />
    </div>
  );
};

export default App;
