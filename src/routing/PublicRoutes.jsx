import { Route, Routes,BrowserRouter } from "react-router";
import LandingPage from "../pages/LandingPage.jsx";



export default function PublicRoutes(){
    return(
        <>
        <BrowserRouter>
            
            <Routes>
                <Route path = "/" element= {<LandingPage/>} ></Route>                
            </Routes>
            </BrowserRouter>
        </>
    )
}