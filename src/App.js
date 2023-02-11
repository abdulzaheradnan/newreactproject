import React,{createContext} from "react"
import './App.css';
import Arryduplicate from "./arryduplicate";
import Arrylist from "./inheritnace"
import Classcomponetparent from "./classcomponetparent"
import Pracice from "./forsass/pracice"
import "./sass/main.css"
import Crud from "./crud";
import Interview from "./interview"
const FirstName=createContext();

const App =()=> {

  
  return (
  <>
  <Interview/>
</>
  );
};

export  {FirstName} ;
export default App;
