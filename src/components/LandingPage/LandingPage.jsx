import React, {useCallback} from "react";
import {Page, ReuseP, TopNav, TextDiv, Section, SmallDiv, Button} from "./styles/styles";
import People from "../../assets/images/png/Happy couple signing a contract on a meeting with their real estate agent in the office.png"
import Flow from "../../assets/images/png/Flow.png"
import Pay from "../../assets/images/png/Pay for goods by credit card through a smartphone in a coffee shop..png"
import {useNavigate} from "react-router-dom";

function LandingPage(deps){
     const Navigate = useNavigate()

    const handleNavigate = ( ( ) => {
        Navigate("/CreateAccount")
    })

return(
    <Page>
        <TopNav>
            {/*<img src={Cash}/>*/}
            <SmallDiv backgroundColor={"yellow"} spaceBelow={'70px'} ><img src={Flow}/>  </SmallDiv>
            <SmallDiv backgroundColor={"yellow"} spaceRight={'130px'} > <img src={Flow}/>  </SmallDiv>

            <ReuseP spaceLeft={'90px'} spaceBelow={'70px'} color={"blue"}>About us </ReuseP>
            <ReuseP spaceLeft={'90px'} spaceBelow={'70px'} color={"blue"}>contact us</ReuseP>
            <ReuseP spaceLeft={'90px'} spaceBelow={'70px'} color={"blue"}>Loans</ReuseP>
            <ReuseP spaceLeft={'90px'} spaceBelow={'70px'} color={"blue"}>services</ReuseP>

        </TopNav>
        <Section spaceBelow={'50px'}>
           <img src={People} alt={"people"}/>
            <SmallDiv  spaceBelow={'170px'}>
                <ReuseP spaceLeft={'290px'}  color={"black"}>Ca$h</ReuseP>
                <TextDiv spaceLeft={'290px'}  color={"black"}>Welcome to ca$h flow, where our customer assets is safety comes first</TextDiv>
                <TextDiv spaceLeft={'290px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv spaceLeft={'290px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv spaceLeft={'290px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv spaceLeft={'290px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv spaceLeft={'290px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>

            </SmallDiv>
        </Section>
        <Section>
            <SmallDiv  spaceRight={'200px'} spaceLeft={'70px'} spaceBelow={'170px'} >
                <ReuseP spaceLeft={'290px'}  color={"black"}>Ca$h</ReuseP>
                <TextDiv spaceLeft={'290px'}  color={"black"}>Welcome to ca$h flow, where our customer assets's safety comes first</TextDiv>
                <TextDiv spaceLeft={'290px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv spaceLeft={'290px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv spaceLeft={'290px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv spaceLeft={'290px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv spaceLeft={'290px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>

                <Button onClick={handleNavigate} spaceLeft={'580'}>Create account</Button>
            </SmallDiv>
            <SmallDiv backgroundPicture={Pay}> <img src={Pay} alt={"pay"}/> </SmallDiv>
        </Section>

    </Page>
)


}

export default LandingPage