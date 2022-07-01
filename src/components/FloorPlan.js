import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";
const FloorPlan = (props) => {
  return (
    <div className="floorplan">
      <Bedroom />
      <Kitchen />
      <Bath />
      <Bedroom />
      <LivingRoom />
      <Bath />
      <Bedroom />
    </div>
  );
};

export default FloorPlan;
