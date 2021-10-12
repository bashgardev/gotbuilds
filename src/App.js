import Loadout from "./components/Loadout";
import { LoadoutContextProvider } from "./context/LoadoutContext";
import "./styles/output.css";
// import Background from "./assets/tori_legends.png";

function App() {
  return (
    <div className="bg-primary-dark font-urbanist min-h-screen font-medium md:p-2 md:flex justify-center ">
      <LoadoutContextProvider>
        <Loadout />
      </LoadoutContextProvider>
    </div>
  );
}

export default App;
