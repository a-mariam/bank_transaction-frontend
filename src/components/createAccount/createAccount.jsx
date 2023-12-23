import {Page, ReuseP, TopNav, TextDiv, Section, SmallDiv, Button} from "../LandingPage/styles/styles";
import { Container , Background, InputField, Background2} from "./styles";
import CashFlow from "../../assets/images/png/Group 1.png"
import {React , useState, useCallback} from 'react'
import { useNavigate } from "react-router-dom";



const CreateAccount = () =>{
    
    const intialValue = {
        firstname : '',
        secondname: '',
        phoneNumber: '',
        secondNumber: '',

    }
    const  [data, setData] = useState(intialValue)
    const  [first, setfirst] = useState("")
    const  [second, setsecond] = useState("")

    const navigate = useNavigate()
   
    
    const collectData = (e) => {
        
       setData(prevState => ({
        ...prevState,
        [e.target.name] : e.target.value
       }))
     }
    const CollectNavigates = ( ()=>
      
        (handleRequest(intialValue))
   )
    const handleRequest = useCallback((parameter) =>{
      navigate("/Response", {state: {value: parameter}})
    }, [])



    return(
            <Container>

                <Background2>
                    <input value={intialValue.firstname} spaceAbove={'70px'} placeholder="FirstName" type="text" onChange={collectData}></input>
                   <input  value={intialValue.secondNumber} spaceAbove={'20px'} placeholder="SecondName" type="text" onChange={collectData}></input> 
                   <input  value={intialValue.secondNumber} spaceAbove={'20px'} placeholder="LastNumber" type="text" onChange={collectData}></input>
                   <input  value={intialValue.phoneNumber} spaceAbove={'20px'} placeholder="PhoneNumber" type="text" onChange={collectData}></input>
                   <input spaceAbove={'20px'} placeholder="secondNumber" type="text" onChange={collectData}></input>
                   <input spaceAbove={'20px'} placeholder="Password" type="text" onChange={collectData}></input>
                   <input spaceAbove={'20px'} placeholder="TransactionPin" type="text" onChange={collectData}></input>
                   <input spaceAbove={'20px'} placeholder="Email" type="text" onChange={collectData}></input>
                   <input spaceAbove={'20px'} placeholder="type" type="text" onChange={collectData}></input>
                   <button onClick={CollectNavigates}  >Submit</button> 

                  </Background2>
                  <Background >
                    
                </Background> 
               
            </Container>
            
    )
    }
    



export default CreateAccount;