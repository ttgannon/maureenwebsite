import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Gallery() {
  return (
    <Box
      className="max-w-7xl "
      sx={{ width: 500, height: 450, overflowY: "scroll" }}
    >
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
    </Box>
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
