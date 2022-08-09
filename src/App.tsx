import React, { useEffect } from "react";
import { getAllData } from "./utils/fetchData";

function App() {

  useEffect(() => {
    getAllData().then((response:any) =>
      console.log("datose del servidor: ", response)
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header">TYPESCRIPT</header>
    </div>
  );
}

export default App;
