import { Button } from "react-bootstrap";

export default function Custom() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-8xl m-10 text-white">Your idea, now a reality.</h1>
      <img src="public/words.jpeg"></img>
      <h2 className="text-6xl m-10 text-white">
        Maureen can turn your favorite poem or quote into a bespoke, eternal
        display.
      </h2>
      <div className="flex items-center justify-center">
        <img src="jung.jpeg"></img>
      </div>

      <h2 className="text-6xl m-10 text-white">
        Make their birthday, anniversary, or Mother's Day extra special with
        custom art.
      </h2>
      <Button className="text-6xl p-6">Get Started</Button>
    </div>
  );
}
