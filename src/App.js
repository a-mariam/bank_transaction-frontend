import './App.css';
import LandingPage from "./components/LandingPage/LandingPage";
import CreateAccount from "./components/LandingPage/createAccount";
import {BrowserRouter  ,Route, Routes, Switch} from "react-router-dom";

function App() {
  return (
      <div>
      <BrowserRouter>
         <Routes>
             <Switch>
           <Route Path={"/"} element={<LandingPage />}/>
           <Route  Path={"/create account"} element={<CreateAccount />}/>
         </Switch>
         </Routes>
       </BrowserRouter>
      </div>

  );
}

export default App;
