import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Authors from './components/Authors';
import ContactUs from './components/ContactUs';

const App = () =>{

  return(
    <Router>
      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="/authors" element={<Authors/>} />
        <Route path ="/contactUs" element={<ContactUs/>} />
      </Routes>
    </Router>
  )

};

export default App;
