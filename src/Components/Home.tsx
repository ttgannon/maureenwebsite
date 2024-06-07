import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Button } from "react-bootstrap";
import Gallery from "./Gallery";

function Home() {
  return (
    <div>
      <div className="flex gap-6 p-6 items-center justify-center text-center">
        <img src="maureen_squires-removebg-preview.png" className=""></img>
        <img src="public/marsh-magic-maureen-squires.jpg"></img>
      </div>
      <h1 className="text-center p-6 text-white text-6xl">A timeless artist</h1>
      {/* <img
        src="public/maureen-squires-moment-in-time.jpeg"
        className="w-full"
      ></img> */}

      <div className="flex items-center justify-center w-full">
        <Gallery />
      </div>

      <div className="items-center p-6 justify-center flex">
        <Button className="text-3xl">Shop Now</Button>
      </div>
      <h1 className="text-center p-6 text-white text-6xl">
        Maureen Squires creates bespoke interpretations of nature and poetry.
      </h1>
      <img src="public/maureen-squires-flying-blue.jpeg"></img>
    </div>
  );
}

export default Home;
