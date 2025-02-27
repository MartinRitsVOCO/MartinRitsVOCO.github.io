'use client'

import { useState, useEffect } from "react";
import DesktopPage from "./components/desktop/DesktopPage";
import MobilePage from "./components/mobile/MobilePage";
import ContentProvider from "./components/context/ContentProvider";

const HomePage = () => {
  const [isDesktop, setIsDesktop] = useState(null);
  
  const handleWindowResize = () => {
    setIsDesktop(window.innerWidth >= 1040);
  }

  useEffect(() => {
    if (isDesktop === null) {
      handleWindowResize();
      window.addEventListener("resize", handleWindowResize);
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      }
    }
  }, []);

  return (
    <ContentProvider>
      {isDesktop ? <DesktopPage/> : <MobilePage/>}
    </ContentProvider>
  )
}

export default HomePage