import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Fade } from "@mui/material";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadeInStart = 200; // adjust this value as needed
      setScroll(scrollY + windowHeight > fadeInStart);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="text-center"></div>
      <div className="flex justify-center">
        <Box className="max-w-7xl " sx={{ overflowY: "scroll" }}>
          <Fade in={scroll} timeout={1000}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Fade>
        </Box>
      </div>
    </>
  );
}

const itemData = [
  {
    img: "/hafiz.jpeg",
    title: "Hafiz",
  },
  {
    img: "/maureen-squires-flying-blue.jpeg",
    title: "Flying Blue",
  },

  {
    img: "/profilgacies-maureen-squires.jpg",
    title: "Profilgacies",
  },

  {
    img: "/copper_lines_3.jpeg",
    title: "Copper Lines",
  },
  {
    img: "/maureen-squires-moment-in-time.jpeg",
    title: "Moment In Time",
  },
  {
    img: "/ink_art_maureen.jpeg",
    title: "Ink Art",
  },
  {
    img: "/field_flowers_maureen.jpeg",
    title: "Field Flowers",
  },
  {
    img: "/musical_moments.jpeg",
    title: "Musical Moments",
  },
  {
    img: "/be_the_light_2.jpeg",
    title: "Be The Light II",
  },

  {
    img: "/memories.jpeg",
    title: "Memories",
  },
  {
    img: "/downstream.jpeg",
    title: "Downstream",
  },
];
