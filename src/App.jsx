import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import {useState} from "react";
import satData from "./components/satData";

//create the variables in the app funtion
function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const filteredSats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(filteredSats);
 };
 
  return (
    <>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        orbitTypes={displaySats}
      />
      <Table sat={sat} />
    </>
  );
}

export default App;