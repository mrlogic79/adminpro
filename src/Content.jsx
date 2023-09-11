import { useContext } from "react";
import { MainContext } from "./contexts/MainContext";
import Users from "./users/users";
import Posts from "./posts/posts";
import Gallery from "./gallery/gallery";
import Todoes from "./todoes/todoes";
import { Route, Routes } from "react-router-dom";
import Adduser from "./users/addUser";
import WarningEdit from './users/warningEdit'


const Content=()=>{
    const {showMenu , setshowMenu} = useContext(MainContext);

    const handleShowmenu=(event)=>{
        event.stopPropagation()
        setshowMenu(!showMenu)
        console.log(showMenu);
    }
    return(
        <div className={showMenu ? "content_section content " : "content_section2 content "} >
            <i className="menu_button"  onClick={handleShowmenu}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                       </svg>
            </i>
            <Routes>
                <Route path="/user"  element={<Users/>}/>
                <Route path="/user/add" element={<Adduser/>}>
                    <Route path=":userId" element={<WarningEdit/>}/>
                </Route>
                <Route path="/Gallery"  element={<Gallery/>}/>
                <Route path="/Posts"  element={<Posts/>}/>
                <Route path="/Todoes"  element={<Todoes/>}/>
                <Route path="/*"  element={<Users/>}/>
            </Routes>

           
     
          
            
        </div>
    )
}


export default Content ;