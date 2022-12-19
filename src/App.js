import Datasection from "./components/Datasection";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Formdata from "./components/Formdata";
import { DataContext } from "./components/Datacontext";
import { useEffect, useState } from "react";
import { ClassNames } from "@emotion/react";
function App() {

  const [fetchedData, setData] = useState([]);
  

  const getData = () => {
    fetch("http://localhost:8000/api/index.php")
    .then(res => res.json())
    .then(data => {
      setTimeout(() =>{
       setData(data)
      }, 300);
    })
  }

  useEffect( () => {
    getData();
  }, []);

  let getFilteredData = (data) => {
    setData(data);
  }

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <DataContext.Provider value={fetchedData}>
        <Formdata filter={getFilteredData}></Formdata>
        <Datasection></Datasection>
      </DataContext.Provider>
    </>
  );
}

export default App;
