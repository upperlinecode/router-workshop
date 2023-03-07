import { Link } from "react-router-dom";
import { CaveEntranceRoot } from "./CaveEntrance.styles";

const CaveEntrance = () => (
  <CaveEntranceRoot>
    <h3>CaveEntrance</h3>
    <Link to="/Caves/Juliet">
      <button>Click here to enter the cave</button>
    </Link>
  </CaveEntranceRoot>
);

export default CaveEntrance;
