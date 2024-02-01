import { Container , Background, InputField, Background2, SubmitButton, Error} from "./styles";
import {React , useState, useCallback} from 'react'
import { Form, useFormik } from "formik";
import * as YUP from 'yup'
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
      type: 'assets'
    })
    const validateInput = YUP.object().shape({
      email : YUP.string().email('enter validate email').required('email is required'),
      firstname: YUP.string().required('firstname is required'),
      secondname: YUP.string().required('second name is required'),
      lastName: YUP.string().required('lastname is required'),
      password: YUP.string().required('password is required '),
      transactionPin: YUP.number().required('pin is required'),
      phoneNumber: YUP.number().min(11).max(11).required('phone number is required')

    })     
     
    const  [data, setData] = useState(intialValue)
    const navigate = useNavigate()
    const {handleBlur, handleChange,handleSubmit ,values, errors}= useFormik({
      initialValues : intialValue,
      validationSchema: validateInput,
      onSubmit: (values) => {
        console.log(values)
      }
    })
   
    
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
               
                <form onSubmit={handleSubmit}>
                    <Error>{errors.firstname}</Error>
                   <InputField   spaceAbove={'10px'} placeholder="FirstName" type="text" name="firstname" value={values.firstname} onChange={handleChange} onBlur={handleBlur}></InputField>
                    <Error color="red">{errors.secondname}</Error>
                   <InputField  spaceAbove={'10px'} placeholder="SecondName" type="text" name="secondname"  value={values.secondname}onBlur={handleBlur} onChange={handleChange}></InputField>
                    <Error>{errors.lastName}</Error>
                   <InputField   spaceAbove={'10px'} placeholder="LastNumber" type="text" name="lastname" value={values.lastName} onChange={handleChange} onBlur={handleBlur}></InputField>
                    <Error color="red">{errors.phoneNumber}</Error>
                   <InputField  spaceAbove={'10px'} placeholder="PhoneNumber" type="text" name="phonenumber" onChange={handleChange } value={values.phoneNumber} onBlur={handleBlur}></InputField>
                    <Error color="red">{errors.phoneNumber}</Error>
                   <InputField spaceAbove={'10px'} placeholder="secondNumber" type="text" name='secondnumber' onChange={handleChange} value={values.secondNumber} onBlur={handleBlur}></InputField>
                    <Error color="red">{errors.password}</Error>
                   <InputField spaceAbove={'10px'} placeholder="Password" type="text" name='password'onBlur={handleBlur} value={values.password} onChange={handleChange}></InputField>
                    <Error color="red">{errors.transactionPin}</Error>
                   <InputField spaceAbove={'10px'} placeholder="TransactionPin" type="text" name="transactionpin" value={values.transactionPin} onBlur={handleBlur} onChange={handleChange}></InputField>
                    <Error color="red">{errors.email}</Error>
                   <InputField spaceAbove={'10px'} placeholder="Email" type="text" name="email" value={values.email} onBlur={handleBlur}  onChange={handleChange}></InputField> 
                   <SubmitButton type="submit" >Submit</SubmitButton> 
                </form>
                 
              </Background2>
                  <Background >
                    
                  </Background> 
               
           </Container>
            
    )
    }
    



export default CreateAccount;