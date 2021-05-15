import React from "react";
import { DashboardProvider } from "./context/Dashboard";
import { Dashboard } from "./scenes/Dashboard";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <DashboardProvider>
        <Dashboard/>
      </DashboardProvider>
    </div>
  );
}

export default App;
