import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import FixedIncome from "./components/pages/FixedIncome";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Sidebar />
        <FixedIncome />
      </div>
    </div>
  );
}

export default App;
