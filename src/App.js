import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import FixedIncome from "./components/pages/FixedIncome";

import "./App.css";

function App() {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <div className="App">
      <div>
        <Navbar setShowSideBar={() => setShowSideBar(!showSideBar)} />
      </div>
      <div>
        <Sidebar showSideBar={showSideBar} />
        <FixedIncome />
      </div>
    </div>
  );
}

export default App;
