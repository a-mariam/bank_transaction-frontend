import { Container , Background, InputField, Background2, SubmitButton, Error} from "./styles";
import CashFlow from "../../assets/images/png/Group 1.png"
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
      phoneNumber: YUP.number().required('phone number is required')

    })     
     
    const [nameError , setError] = useState('')
    const  [data, setData] = useState(intialValue)
    const navigate = useNavigate()
    const formik = useFormik({
      initialValues : {
        firstname: '',
      secondname: '',
      lastName: '',
      phoneNumber: '',
      secondNumber: '',
      password: '',
      transactionPin: '',
      email: '',
      },
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

   const handleSubmit ={

   }

    return(
          <Container>

            <Background2>
               
                <Form onSubmit={formik.handleSubmit}>
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <div>{formik.errors.firstname}</div>
                  ) : null}
                   <InputField   spaceAbove={'30px'} placeholder="FirstName" type="text" name="firstname" value={formik.values.firstname} onChange={formik.handleChange} onBlur={formik.handleBlur}></InputField>
                   {formik.touched.secondname && formik.errors.secondname ? (
                    <div>{formik.errors.secondname}</div>
                   ): null}
                   <InputField  spaceAbove={'20px'} placeholder="SecondName" type="text" name="secondname"  value={formik.values.secondNumber}onBlur={formik.handleBlur} onChange={formik.handleChange}></InputField>
                   {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                   ): null}
                   <InputField   spaceAbove={'20px'} placeholder="LastNumber" type="text" name="lastname" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}></InputField>
                   {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div>{formik.errors.phoneNumber}</div>
                   ): null}
                   <InputField  spaceAbove={'20px'} placeholder="PhoneNumber" type="text" name="phonenumber" onChange={formik.handleChange } value={formik.values.phoneNumber} onBlur={formik.handleBlur}></InputField>
                   {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div>{formik.errors.phoneNumber}</div>
                   ): null}
                   <InputField spaceAbove={'20px'} placeholder="secondNumber" type="text" name='secondnumber' onChange={formik.handleChange} value={formik.values.secondNumber} onBlur={formik.handleBlur}></InputField>
                   {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                   ): null}
                   <InputField spaceAbove={'20px'} placeholder="Password" type="text" name='password'onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange}></InputField>
                   {formik.touched.transactionPin && formik.errors.transactionPin ? (
                    <div>{formik.errors.transactionPin}</div>
                   ): null}
                   <InputField spaceAbove={'20px'} placeholder="TransactionPin" type="text" name="transactionpin" value={formik.values.transactionPin} onBlur={formik.handleBlur} onChange={formik.handleChange}></InputField>
                   {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                   ): null}
                   <InputField spaceAbove={'20px'} placeholder="Email" type="text" name="email" value={formik.values.email} onBlur={formik.handleBlur}  onChange={formik.handleChange}></InputField> 
                   <SubmitButton type="submit" >Submit</SubmitButton> 
                </Form>
                 
              </Background2>
                  <Background >
                    
                  </Background> 
               
           </Container>
            
    )
    }
    



export default CreateAccount;