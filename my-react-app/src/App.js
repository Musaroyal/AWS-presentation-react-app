import React from 'react';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Ussd from './pages/Ussd'
import Testimonial from "./pages/Testimonial";

function App() {
  let Component;
  switch (window.location.pathname.toLowerCase()) {
    case "/":
      Component = <Home />;
      break;
    case "/about":
      Component = <About />;
      break;
    case "/testimonial":
      Component = <Testimonial />;
      break;
    case "/ussd":
      Component = <Ussd />;
        break;
    default:
      Component = <Home />;  // You can also create a 404 component for better user experience
  }

  return (
    <>
      <Navbar />
      <div className='container'>
         {Component}
      </div>
     
    </>
  );
}

export default App;
