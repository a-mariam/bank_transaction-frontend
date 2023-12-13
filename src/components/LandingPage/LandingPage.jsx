import React, {useCallback} from "react";
import {Page, ReuseP, TopNav, TextDiv, Section, SmallDiv, Button, Image} from "./styles/styles";
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
            <Image srcc={Flow}/>
            {/* <SmallDiv backgroundColor={"yellow"} spaceBelow={'70px'} ><img src={Flow}/>  </SmallDiv>
            <SmallDiv backgroundColor={"yellow"} spaceRight={'130px'} > <img src={Flow}/>  </SmallDiv> */}

            <ReuseP spaceLeft={'90px'} spaceBelow={'30px'} color={"white"}>About us </ReuseP>
            <ReuseP spaceLeft={'90px'} spaceBelow={'30px'} color={"white"}>contact us</ReuseP>
            <ReuseP spaceLeft={'90px'} spaceBelow={'30px'} color={"white"}>Loans</ReuseP>
            <ReuseP spaceLeft={'90px'} spaceBelow={'30px'} color={"white"}>services</ReuseP>

        </TopNav>
        <Section spaceBelow={'50px'} >
            <SmallDiv spaceLeft={'40px'} spaceBelow={'30px'} borderRadius={'20px 20px 20px 20px'}>
            <img src={People} alt={"people"}/>
            </SmallDiv>
            <SmallDiv  spaceBelow={'10px'}  spaceAbove={'30px'} spaceLeft={'10%'} >
                <ReuseP  spaceLeft={'70px'}  color={"black"}>Ca$h</ReuseP>
                <TextDiv spaceLeft={'30px'} color={"black"}>Welcome to ca$h flow, where our customer assets is safety comes first</TextDiv>
                <TextDiv spaceLeft={'30px'}color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv  spaceLeft={'30px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv spaceLeft={'30px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv spaceLeft={'30px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv  spaceLeft={'30px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
            </SmallDiv>
        </Section>
        <Section>
            <SmallDiv  spaceRight={'200px'} spaceLeft={'70px'} spaceBelow={'70px'} spaceAbove={'50px'} >
                <ReuseP spaceLeft={'90px'}  color={"black"}>Ca$h</ReuseP>
                <TextDiv spaceLeft={'90px'}  color={"black"}>Welcome to ca$h flow, where our customer assets's safety comes first</TextDiv>
                <TextDiv spaceLeft={'90px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv spaceLeft={'90px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv spaceLeft={'90px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv spaceLeft={'90px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>
                <TextDiv spaceLeft={'90px'} color={"black"}>with over 10 thousand users, we guarantee seemless transactions,</TextDiv>

                <Button onClick={handleNavigate} spaceLeft={'280px'} spaceAbove={'10px'}>Create account</Button>
            </SmallDiv>
            <SmallDiv backgroundPicture={Pay} spaceBelow={'80px'}> <img src={Pay} alt={"pay"}/> </SmallDiv>
        </Section>
        {/* <Section>
            <Button>frr</Button>
        </Section> */}

    </Page>
)


}

export default LandingPage