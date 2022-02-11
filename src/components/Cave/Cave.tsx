import { CaveRoot, CaveButtons } from "./Cave.styles";
import { caveDirectory } from "../../caveDirectory";

const Cave = () => {
  const caveId = "Juliet";
  const cave = caveDirectory.find((cave) => cave.caveId === caveId) || {
    caveId: "the void",
    adjacentCaverns: [],
  };
  return (
    <CaveRoot>
      <h3>You've reached {cave.caveId} cavern</h3>
      <CaveButtons>
        <button>Cave tunnels under construction</button>
      </CaveButtons>
    </CaveRoot>
  );
};

export default Cave;
