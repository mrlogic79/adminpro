import { useState } from "react";
import { MainContext } from "./contexts/MainContext";
import Content from "./Content"
import Sidebar from "./Sidebar"
import { BrowserRouter } from "react-router-dom";


const App=()=>{

  const [showMenu, setshowMenu] =useState (false);
  if (showMenu===false) {
     return(
      <BrowserRouter>
          <div>
      <MainContext.Provider value={{showMenu , setshowMenu}}>
          <Content/>
      </MainContext.Provider>
         </div>   
      </BrowserRouter>
  )
  } else {
    return(
      <BrowserRouter>
            <div>
        <MainContext.Provider value={{showMenu , setshowMenu}}>
            <Sidebar/>
            <Content/>
        </MainContext.Provider>
            </div>
      </BrowserRouter>
    )
  }
 
}


export default App;
