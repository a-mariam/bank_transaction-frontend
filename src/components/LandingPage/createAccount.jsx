import {Page, ReuseP, TopNav, TextDiv, Section, SmallDiv, Button} from "./styles/styles";
import CashFlow from "../../assets/images/png/Group 1.png"


function CreateAccount(){


    return(
       <Page >
            <img src={CashFlow} alt={"cash flow"}/>
       </Page>
    )
}


export default CreateAccount