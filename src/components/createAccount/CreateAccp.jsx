import { useLocation , useNavigate} from "react-router-dom"



function Response () {

     const data = useLocation().state
     


    return(
        <div backgroun-color={"yellow"}>
            {console.log(data)}
           {data.id}
           <p > FirstName : {data.firstname}</p>
           <p > secondname : {data.secondname}</p>
           <p > secondNumber: {data.secondNumber}</p>


        </div>
    )
}


export default Response;