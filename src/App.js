import './App.css'; 
import LandingPage from "./components/LandingPage/LandingPage";
import CreateAccount from "./components/createAccount/createAccount";
import Response from './components/createAccount/CreateAccp';
import {BrowserRouter  ,Route, Routes} from "react-router-dom";

function App() {
  return (
      <div>
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<LandingPage/>}></Route>
             <Route path='/createAccount' element={<CreateAccount/>}> </Route> 
             <Route path='/Response' element={<Response/>}></Route>      
          </Routes>
       </BrowserRouter>
      </div>

  );
}

export default App;
