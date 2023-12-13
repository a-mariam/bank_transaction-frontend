import './App.css'; 
import LandingPage from "./components/LandingPage/LandingPage";
import CreateAccount from "./components/createAccount/createAccount";
import {BrowserRouter  ,Route, Routes} from "react-router-dom";

function App() {
  return (
      <div>
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<LandingPage/>}></Route>
             <Route path='/createAccount' element={<CreateAccount/>}> </Route>       
          </Routes>
       </BrowserRouter>
      </div>

  );
}

export default App;
