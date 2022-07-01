import Oven from "./Oven";
import Sink from "./Sink";
const Kitchen = (props) => {
  return (
    <div className="kitchen">
      <Oven />
      <h2>Kitchen</h2>
      <Sink />
    </div>
  );
};

export default Kitchen;
