import { DiGithub } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const SignUp = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, setCheckpassword] = useState("");
  const [emailAlertMent, setEmailAlertMent] = useState("");
  const [passwordAlertMent, setPasswordAlertMent] = useState("");
  const [passwordCheckAlertMent, setPasswordCheckAlertMent] = useState("");


  const [hasSmallChar, setHasSmallChar] = useState(false);
  const [hasSpecialSymbol, setHasSpecialSymbol] = useState(false);

  const nicknameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const checkpasswordRef = useRef();

  const pattern_num = /[0-9]/;
  const pattern_eng = /[a-zA-Z]/;
  const pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/;
  const pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  const checkEmail=(str)=>{
    const reg_email=/^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if(!reg_email.test(str)){
      return false;
    }
    else{
      return true;
    }
  }
  const handleSubmit= ()=>{
    if(nickname.length < 1){
      nicknameRef.current.focus();
      return;
    }
    if(email.length < 1){
      emailRef.current.focus();
      return;
    }
    if(password.length < 6){
      passwordRef.current.focus();
      setPasswordAlertMent("비밀번호를 6자이상 입력해주세요");
      return;
    }
    else{
      setPasswordAlertMent("");
    }
    if(checkpassword.length < 6){
      checkpasswordRef.current.focus();
      
    }
    else if(!pattern_num.test(password)){
      setPasswordAlertMent("숫자를 하나 이상 포함해주세요");
    } 
    else if(!pattern_eng.test(password)){
      setPasswordAlertMent("영어를 하나 이상 포함해주세요")
    } 
    else if(!pattern_spc.test(password)){
      setPasswordAlertMent("특수문자를 하나 이상 포함해주세요");
    } 
    else if(pattern_kor.test(password)){
      setPasswordAlertMent("비밀번호에 한글은 사용 불가합니다");
    }
    else{
      setPasswordAlertMent("");
    }
    if(!checkEmail(email)){
      setEmailAlertMent("잘못된 이메일 형식입니다.");
    }
    else{
      setEmailAlertMent("");
    }
    if(checkpassword!==password){
      setPasswordCheckAlertMent("입력하신 비밀번호와 일치하지 않습니다");
      return;
    }
    else{
      setPasswordCheckAlertMent("");
    }


    if(pattern_num.test(password) && pattern_eng.test(password) && pattern_spc.test(password) && !pattern_kor.test(password)){
      const ans = window.confirm("회원가입을 진행하시겠습니까?");
      if(ans == true){
        //회원가입
      }
      else{

      }
    }

    
  }

  const btnStyle = {
    backgroundColor:"#0078ff", color:"#ebffff", width:"200px"
  }

  return (
    <div className="SignUp">
      <MyHeader leftChild={<DiGithub
          onClick={() => {
            navigate("/");
          }}
        />}/>

      <section className="SignUp__innerSection">
        <div>
          <h5>닉네임</h5>
          <input 
          placeholder="닉네임"
          name="nickname" value={nickname} ref={nicknameRef} onChange={(e)=>setNickname(e.target.value)}/>
        </div>
        
        <div>
          <h5>이메일</h5>
          <input 
          placeholder="이메일"
          type="email" name="email" value={email}  ref={emailRef} onChange={(e)=>{setEmail(e.target.value)}}/>
          <h5 className="SignUp__alert">{emailAlertMent}</h5>
        </div>

        <div>
          <h5>비밀번호(소문자와 숫자 포함 최소 6자)</h5>
          <input 
          placeholder="비밀번호"
          type="password" name="password" value={password}  ref={passwordRef} onChange={(e)=>setPassword(e.target.value)}/>
          <h5 className="SignUp__alert">{passwordAlertMent}</h5>
        </div>

        <div>
          <h5>비밀번호 확인</h5>
          <input 
          placeholder="비밀번호 확인"
          type="password" name="checkpassword" ref={checkpasswordRef} value={checkpassword} onChange={(e)=>setCheckpassword(e.target.value)} />
          <h5 className="SignUp__alert">{passwordCheckAlertMent}</h5>
        </div>
  
          
        <MyButton text={"계정 만들기"} onClick={handleSubmit} style={btnStyle} />
      </section>

     
      <MyFooter />
    </div>
  );
};
export default SignUp;
