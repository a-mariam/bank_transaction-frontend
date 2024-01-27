import { useLocation , useNavigate} from "react-router-dom"



function Response () {

     const data = useLocation()
     let first = ''
     let second = ''

     let collect = ()=>{
    //   first = data.first;
    //   second = data.second;


     }
     


    return(
    
        <div backgroun-color={"yellow"}>
            {collect}
            {console.log(first)}
            {console.log(second)}
           {data}
           <p > FirstName : {first}</p>
           <p > secondname : {second}</p>


        </div>
    )
}


export default Response;