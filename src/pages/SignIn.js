import { DiGithub } from "react-icons/di";
import { useNavigate } from "react-router-dom";
const SignIn = () =>{
    const navigate = useNavigate();
    return (<>
    signin
    <DiGithub onClick={()=>{navigate("/")}}/>
    </>)
}
export default SignIn;