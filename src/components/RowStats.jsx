import Statline from "./Statline";
import heroImg from "../assets/love-always-wins.png";
import attackImg from "../assets/thunder.png";

const RowStats = ({ hp, attack }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 15,
          margin: "2px",
        }}
      >
        <Statline img={heroImg} value={hp} />
        <Statline img={attackImg} value={attack} />
      </div>
    </>
  );
};

export default RowStats;
