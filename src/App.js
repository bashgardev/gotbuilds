import Slot from "./Slot";
import "./styles/output.css";
import Background from "./assets/tori_legends.png";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
      }}
      className="bg-red-900 font-urbanist min-h-screen font-medium p-2 md:flex justify-center "
    >
      <div>
        <Slot type="katana_slot" />
        <Slot type="ranged_slot" />
        <Slot type="charm_slot" />
        <Slot type="katana_slot" />
        <Slot type="katana_slot" />
      </div>
    </div>
  );
}

export default App;
