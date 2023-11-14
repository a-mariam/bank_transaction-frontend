import React, {useState} from "react";
import {Page, ReuseP, TopNav, TextDiv, Section, SmallDiv, Button} from "./styles/styles";
import People from "../../assets/images/png/Happy couple signing a contract on a meeting with their real estate agent in the office.png"
import Cash from  "../../assets/images/png/Group 1 (1).png"
import Lock from "../../assets/images/png/Financial security password lock and banknotes on white background.png"

function LandingPage(){

    // const [userDate , setUserData] = useState();
    //
    // const initialValue={
    //     firstname : "",
    //     secondName: '',
    //     lastname: "",
    //     phoneNumber: '',
    //     password: "",
    //     type: '',
    //     pin : '',
    //     email:'',
    //     secondPhoneNumber: ''
    // }
    //
    // const han = (e)=>{
    //     setUserData(prevState =>({
    //         ...prevState,
    //         [e.target.name]: e.target.value
    //     }) )
    // }
    //  const navigateToCreateAccountPage() = {
    //
    // }

return(
    <Page>
        <TopNav>
            <img src={Cash}/>
            <ReuseP spaceLeft={'290px'} spaceBelow={'70px'} color={"blue"}>About us </ReuseP>
            <ReuseP spaceLeft={'490px'} spaceBelow={'70px'} color={"blue"}>contact us</ReuseP>
        </TopNav>
        <Section spaceBelow={'50px'}>
           <img src={People}/>
            <SmallDiv  spaceBelow={'170px'}>
                <ReuseP spaceLeft={'290px'}  color={"black"}>Ca$h</ReuseP>
                <TextDiv spaceLeft={'290px'}  color={"black"}>Welcome to ca$h flow, where our customer assets's safety comes first</TextDiv>
                <TextDiv spaceLeft={'290px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
            </SmallDiv>
        </Section>
        <Section>
            <SmallDiv  spaceBelow={'170px'}>
                <ReuseP spaceLeft={'290px'}  color={"black"}>Ca$h</ReuseP>
                <TextDiv spaceLeft={'290px'}  color={"black"}>Welcome to ca$h flow, where our customer assets's safety comes first</TextDiv>
                <TextDiv spaceLeft={'290px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <Button>Create account</Button>
            </SmallDiv>
            <img src={Lock}/>
        </Section>

    </Page>
)


}

export default LandingPage