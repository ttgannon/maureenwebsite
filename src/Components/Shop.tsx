import { Button } from "react-bootstrap";

function handleClick() {
  window.location.href =
    "https://fineartamerica.com/profiles/maureen-squires/shop";
}

export const Shop = () => {
  return (
    <>
      <div className="flex items-center justify-center m-6">
        <h1 className="text-center text-4xl max-w-2xl">
          Take these styles with you everywhere: custom mugs, tote bags, and
          t-shirts with your favorite designs.
        </h1>
      </div>
      <div className="items-center flex justify-center">
        <Button onClick={handleClick}>Shop Now</Button>
      </div>
    </>
  );
};
