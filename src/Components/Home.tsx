import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Button } from "react-bootstrap";
import Gallery from "./Gallery";
import { useEffect, useState } from "react";
import { Fade } from "@mui/material";

function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const [scroll, setScroll] = useState(false);

  setTimeout(() => {
    setFadeIn(true);
  }, 1000);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadeInStart = 2500;
      setScroll(scrollY + windowHeight > fadeInStart);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Fade in={fadeIn} timeout={1000}>
        <div className="flex items-center relative justify-center text-center m-10">
          <img
            src="maureen_squires-removebg-preview.png"
            className="z-20 translate-x-10"
          ></img>
          <img
            src="public/marsh-magic-maureen-squires.jpg"
            className="z-10 -translate-x-24"
          ></img>
        </div>
      </Fade>
      <Fade in={fadeIn} timeout={3000}>
        <h1 className="text-center p-6 font-optima text-white text-6xl">
          A timeless artist
        </h1>
      </Fade>

      <div className="flex items-center justify-center w-full">
        <Gallery />
      </div>
      <Fade in={scroll} timeout={1000}>
        <h1 className="text-center p-6 text-white text-6xl">
          Maureen Squires creates bespoke interpretations of nature and poetry.
        </h1>
      </Fade>
      <Fade in={scroll} timeout={1000}>
        <div className="flex items-center justify-center">
          <img className="w-2/3" src="massey.jpg"></img>
        </div>
      </Fade>
    </div>
  );
}

export default Home;
