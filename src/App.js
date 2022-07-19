import React from "react";
import MyLandbot from "./MyLandbot";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <MyLandbot url="https://landbot.site/v3/H-1319393-6Q9LP8PTKRGL9QS7/index.json" />
    </div>
  );
}
