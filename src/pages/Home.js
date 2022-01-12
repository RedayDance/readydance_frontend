import { GiHamburgerMenu } from "react-icons/gi";
import { DiGithub } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import MyHeader from "../components/MyHeader"
import MyButton from "../components/MyButton"
import MyBanner from "../components/MyBanner";

const Home = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState(false);
    useEffect(()=>{
        console.log(login);
    },[login])
    const toggleLogin = () =>{
        setLogin(!login);
    }
    return(
        <div className="Home">
        <MyHeader 
        leftChild={<DiGithub onClick={()=>{navigate("/")}}/>}
        loginInfo={login ? <MyButton text={"로그아웃"} onClick={toggleLogin} /> 
            :<MyButton text={"로그인/회원가입"} onClick={()=>navigate("/signin") }/>} 
        rightChild={<GiHamburgerMenu onClick={()=>{navigate("/signin")}}/>}
        />

        <MyBanner />
        
        </div>
    )
}
export default Home;