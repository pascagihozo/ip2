import { BrowserRouter } from "react-router-dom";
import Authors from "./components/Authors";
import Visualization from "./components/Visualization";
import Header from "./components/Header";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Sources from "./components/Sources";
import Footer from "./components/Footer";

const App = () => {
  return (
    // <BrowserRouter>
    <div className="relative bg-dark">
      {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
      <Header />
      <div className="mt-16">
        <Home />
        {/* </div> */}
        <ContactUs />
        <Authors />
        <Sources />
        <Visualization />
      </div>
      <Footer />
    </div>

    // </BrowserRouter>
  );
};

export default App;
