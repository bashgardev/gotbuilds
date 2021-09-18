import Build from "./components/Build";
// import Items from "./components/Items";
import "./styles/output.css";
// import Background from "./assets/tori_legends.png";

function App() {
  return (
    <div className="background-pattern font-urbanist min-h-screen font-medium md:p-2 md:flex justify-center ">
      <div>
        <Build />
        {/* <Items></Items> */}
      </div>
    </div>
  );
}

export default App;
