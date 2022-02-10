import { CaveEntranceRoot } from "./CaveEntrance.styles";
import { Link } from "react-router-dom";

const CaveEntrance = () => (
  <CaveEntranceRoot>
    <div>CaveEntrance</div>
    <Link to="/Caves/Juliet">
      <button>Click here to enter the cave</button>
    </Link>
  </CaveEntranceRoot>
);

export default CaveEntrance;
