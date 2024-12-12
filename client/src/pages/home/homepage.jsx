import React, {useEffect, useState} from "react";
import { Analytics } from '@vercel/analytics/react';


import Navbar from "../../components/navbar/navbar";
import HeroSection from "../../components/herosection/heroSection";
import Skills from "../../components/skills/skills";
import SideBar from "../../components/sidebar/sidebar";
import Contact from "../../components/contact/contact";
import { UseStateContext } from "../../context/context";
import Footer from "../../components/footer/footer";


const HomePage = () => {
  const {menu} = UseStateContext();
  return (
    <div>
      <Navbar/>
      {menu ? <SideBar/> : ''}
      <HeroSection/>
      <Skills/>
      <Contact/>
      <Footer/>
      {/* <Analytics/> */}
    </div>
  );
}

export default HomePage;
