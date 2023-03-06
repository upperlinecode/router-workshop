import { Link, useParams } from "react-router-dom";
import { CaveRoot, CaveButtons } from "./Cave.styles";
import { caveDirectory } from "../../caveDirectory";

const Cave = () => {
  const { caveId } = useParams<{ caveId: string }>();
  const cave = caveDirectory.find((cave) => cave.caveId === caveId) || {
    caveId: "the void",
    adjacentCaverns: [],
  };
  return (
    <CaveRoot>
      <h3>You've reached {cave.caveId} cavern</h3>
      <CaveButtons>
        {cave.adjacentCaverns.map((cavern) => (
          <Link to={`/caves/${cavern}`}>
            <button>{`Cave tunnel to ${cavern}`}</button>
          </Link>
        ))}
      </CaveButtons>
    </CaveRoot>
  );
};

export default Cave;
