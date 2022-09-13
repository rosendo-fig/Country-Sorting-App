import React, { useState } from "react";
import Data from "./Data.json";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("");

  return (
    <div className="App">
      <form className="form-container">
        <label for="country">Select A Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>

      <ul>
        {Data.filter((Country) =>
          Country.name.toLowerCase().includes(filter.toLowerCase())
        ).map((Country) => {
          return <li key={Country.code}>{Country.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
