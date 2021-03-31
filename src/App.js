import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ClasseDeAtivos from "./components/classe-de-ativos/ClasseDeAtivos";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="dashboardContainer">
      <Navbar />
      <div className="dashboardSidebar">
        <Sidebar />
        <div className="dashboardContent">
          <ClasseDeAtivos />
        </div>
      </div>
    </div>
  );
}

export default App;
