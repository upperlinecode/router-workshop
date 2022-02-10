import { CaveRoot, CaveButtons } from "./Cave.styles";
import { caveDirectory } from "../../caveDirectory";
import { Link, useParams } from "react-router-dom";

const Cave = () => {
  let params = useParams();
  const caveId = params.caveId;
  const cave = caveDirectory.find((cave) => cave.caveId === caveId) || {
    caveId: "the void",
    adjacentCaverns: [],
  };
  const neighbors = cave.adjacentCaverns;
  return (
    <CaveRoot>
      <h3>You've reached {caveId} cavern</h3>
      <CaveButtons>
        {neighbors.map((neighbor) => (
          <Link to={`/Caves/${neighbor}`} key={neighbor}>
            <button>Proceed to {neighbor} cavern</button>
          </Link>
        ))}
        {caveId === "Yankee" && <div>YOU WIN</div>}
      </CaveButtons>
    </CaveRoot>
  );
};

export default Cave;
