import { CaveRoot, CaveButtons } from "./Cave.styles";
import { caveDirectory } from "../../caveDirectory";
import { Link, useParams } from "react-router-dom";

const Cave = () => {
  // const caveId = "juliet";
  const params = useParams();
  const currentCaveId = params.caveId || "the void";
  const currentCave = caveDirectory.find(
    (cave) => cave.caveId === currentCaveId.toLowerCase()
  ) || {
    caveId: "the void",
    adjacentCaverns: [],
  };
  return (
    <CaveRoot>
      <h3>You've reached {currentCave.caveId} cavern</h3>
      <CaveButtons>
        {currentCave.adjacentCaverns.map((cavern) => (
          <Link to={`/Caves/${cavern}`} key={cavern}>
            <button>Continue to {cavern} cavern</button>
          </Link>
        ))}
        {currentCave.caveId === "yankee" && (
          <p>Congratulations! You've reached the end of your journey</p>
        )}
        {currentCave.caveId === "the void" && (
          <Link to="/Caves">
            <button>Teleport back to the entrance</button>
          </Link>
        )}
      </CaveButtons>
    </CaveRoot>
  );
};

export default Cave;
