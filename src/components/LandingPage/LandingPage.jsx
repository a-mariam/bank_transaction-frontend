import React, {useCallback} from "react";
import {Page, ReuseP, TopNav, TextDiv, Section, SmallDiv, Button, Image, DownNav, Slogan} from "./styles/styles";
import People from "../../assets/images/png/Happy couple signing a contract on a meeting with their real estate agent in the office.png"
import Flow from "../../assets/images/png/Flow.png"
import Pay from "../../assets/images/png/Pay for goods by credit card through a smartphone in a coffee shop..png"
import {Link, useNavigate} from "react-router-dom";

function LandingPage(deps){
     const Navigate = useNavigate()

    const handleNavigate = ( ( ) => {
        Navigate("/CreateAccount")
    })

return(
    <Page>
        <TopNav>
            <Image srcc={Flow}/>
            <ReuseP spaceLeft={'10px'} spaceBelow={'30px'} spaceRight={'50px'} color={"white"}>About us </ReuseP>
            <ReuseP spaceLeft={'10px'} spaceBelow={'30px'} spaceRight={'40px'} color={"white"}>contact us</ReuseP>
            <ReuseP spaceLeft={'10px'} spaceBelow={'30px'} spaceRight={'40px'} color={"white"}>Loans</ReuseP>
            <ReuseP spaceLeft={'10px'} spaceBelow={'30px'} spaceRight={'40px'} color={"white"}>services</ReuseP>
        </TopNav>
        <Section  >
            <SmallDiv >
            <Slogan>Your Assets Safety Is Our Piority</Slogan>
            Welcome to ca$h flow, where our customer's assets safety comes first
            Elevate your financial journey with our bank, where trust meets innovation. Experience the ease of convenient banking through
            our cutting-edge online and mobile services, providing 24/7 access to your finances. Whether you're aiming for savings excellence,
            seeking low-risk loans for your aspirations, or navigating personalized financial solutions, our dedicated team is here to guide
            you every step of the way. Benefit from our transparent and customer-centric approach, ensuring security and competitive rates.
            Choose more than a bank; choose a reliable partner committed to your financial well-being and community development.
            </SmallDiv>
   

        </Section>
        
           
       

    </Page>
)


}

export default LandingPage