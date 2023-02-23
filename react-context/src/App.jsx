import "./App.css";
import ComponenetA from "./components/ComponentA";
import ComponentC from "./components/ComponentC";
import { useState } from "react";
import { DataContext } from "./DataContext";

function App() {
  const [userInfo, setUserInfo] = useState({
    name: "Jason",
    favColor: "#e30022",
    favFood: "cake",
    favMovie: "Contact",
  });

  return (
    <div className="App">
      <h2>Data Context Lesson</h2>
      <DataContext.Provider value={{ userInfo, setUserInfo }}>
        <ComponenetA />
        <ComponentC />
      </DataContext.Provider>
    </div>
  );
}

export default App;
