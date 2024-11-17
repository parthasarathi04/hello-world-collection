import { useState } from "react";
import "./App.css";
import Collection from "./Components/Collection/Collection";
import { ToggleContext } from "./Context/Toggle";
import { SortContext } from "./Context/Sort";

function App() {
  const [toggle, setToggle] = useState(true);
  const [sort, setSort] = useState(false);
  return (
    <div>
      <h2 id="nav">
        <span onClick={() => setToggle(!toggle)} title="Toggle">Hello</span>{" "}
        <span onClick={() => setSort(!sort)} title="Sort">World</span>
        
      <p className="info">Click Hello/Language to Toggle & World to Sort</p>
      </h2>
      <ToggleContext.Provider value={toggle}>
        <SortContext.Provider value={sort}>
          <Collection />
        </SortContext.Provider>
      </ToggleContext.Provider>
    </div>
  );
}

export default App;
