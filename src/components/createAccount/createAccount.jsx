import {Page, ReuseP, TopNav, TextDiv, Section, SmallDiv, Button} from "../LandingPage/styles/styles";
import { Container , Background, InputField, Background2, SubmitButton} from "./styles";
import CashFlow from "../../assets/images/png/Group 1.png"
import {React , useState, useCallback} from 'react'
import { useNavigate } from "react-router-dom";



const CreateAccount = () =>{
    
    const [intialValue, setInitialValue] = useState({
      firstname: '',
      secondname: '',
      lastName: '',
      phoneNumber: '',
      secondNumber: '',
      password: '',
      transactionPin: '',
      email: '',
      type: ''


    })
    const  [data, setData] = useState(intialValue)
    const navigate = useNavigate()
   
    
     
     
     const createAccount = async (e) =>{
      e.preventDefault()
      try{
      const url = 'https://localhost:2003/api/v1/createAccount'
      const response = await fetch(url, {
         method: 'POST',
         headers:{
          'Content-Type' : 'application/json'
         },
         body: JSON.stringify(data)
      })
      if(response.ok){
        const userData = response.json
        console.log("response ==> " , userData)
      }
    }catch(error){
      console.log(error)
    }
     }
    
    const handleRequest = useCallback((parameter) =>{

      console.log(parameter);
      navigate("/Response", {state: {value: parameter}})
    }, [])



    return(
            <Container>

                <Background2>
                   <InputField   spaceAbove={'30px'} placeholder="FirstName" type="text" onChange={(e) => setInitialValue({ ...intialValue, firstname: e.target.value })}></InputField>
                   <InputField  spaceAbove={'20px'} placeholder="SecondName" type="text" onChange={(e) => setInitialValue({ ... intialValue, secondname: e.target.value })}></InputField>
                   <InputField   spaceAbove={'20px'} placeholder="LastNumber" type="text" onChange={(e) => setInitialValue({ ...intialValue, lastName: e.target.value})}></InputField>
                   <InputField  spaceAbove={'20px'} placeholder="PhoneNumber" type="text" onChange={(e) =>setInitialValue({ ...intialValue, phoneNumber: e.target.value}) }></InputField>
                   <InputField spaceAbove={'20px'} placeholder="secondNumber" type="text" onChange={(e) => setInitialValue({ ...intialValue, secondNumber: e.target.value})}></InputField>
                   <InputField spaceAbove={'20px'} placeholder="Password" type="text" onChange={(e) => setInitialValue({ ...intialValue, password: e.target.value})}></InputField>
                   <InputField spaceAbove={'20px'} placeholder="TransactionPin" type="text" onChange={(e) => setInitialValue( {...intialValue, transactionPin: e.target.value})}></InputField>
                   <InputField spaceAbove={'20px'} placeholder="Email" type="text" onChange={(e) => ({...intialValue, email: e.target.value})}></InputField> 
                   <InputField spaceAbove={'20px'} placeholder="type" type="text" onChange={(e) => setInitialValue({ ...intialValue, type: e.target.value})}></InputField>
                   <SubmitButton onClick={createAccount}  >Submit</SubmitButton> 

                  </Background2>
                  <Background >
                    
                </Background> 
               
            </Container>
            
    )
    }
    



export default CreateAccount;