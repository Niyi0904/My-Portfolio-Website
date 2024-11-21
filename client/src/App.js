import React, {useEffect, useState} from "react";
import { Analytics } from '@vercel/analytics/react';

import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/herosection/heroSection";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import SideBar from "./components/sidebar/sidebar";
import Contact from "./components/contact/contact";
import { UseStateContext } from "./context/context";
import Certifications from "./components/certifications/certifications";


const App = () => {
  const {menu} = UseStateContext();
  return (
    <div>
      <Navbar/>
      {menu ? <SideBar/> : ''}
      <HeroSection/>
      <Skills/>
      <Projects/>
      <Certifications/>
      <Contact/>
      {/* <Analytics/> */}
    </div>
  );
}

export default App;
