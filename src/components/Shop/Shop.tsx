import { useState } from "react";
import getClue from "./clues";
import { ShopRoot, ShopClue } from "./Shop.styles";

const Shop = () => {
  const [clue, setClue] = useState("");

  const getAndSetClue = () => {
    let newClue = getClue();
    while (clue === newClue) {
      newClue = getClue();
    }
    setClue(newClue);
  };

  return (
    <ShopRoot>
      <h2>Welcome to the Subterranean Supermarket</h2>
      <p>
        We know you have many choices when it comes to caving supplies, and
        we're delighted you've chosen our quaint little establishment.
      </p>
      <p>
        Unfortunately, we're still under construction, but feel free to take a
        complimentary clue if you'd like!
      </p>
      <button onClick={getAndSetClue}>Get free clue</button>
      <ShopClue>{clue}</ShopClue>
    </ShopRoot>
  );
};

export default Shop;
