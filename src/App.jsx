import { BrowserRouter } from "react-router-dom";
import React, { useEffect } from 'react';

//import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className='relative z-0 bg-primary'>
//         <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Experience />
//         <Tech />
//         <Works />
//         <Feedbacks />
//         <div className='relative z-0'>
//           <Contact />
//           <StarsCanvas />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

const App = () => {
   useEffect(() => {
    console.log("Active contexts:", document.querySelectorAll('canvas').length);
  }, []);
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
