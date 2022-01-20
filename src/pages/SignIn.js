import { DiGithub } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { useRef, useState } from "react";

const btnStyle = {
  backgroundColor: "#44dccf",
  color: "#eeeeee",
  width: "200px",
  margin: "0 auto",
};

const SignIn = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    if (id.length < 1) {
      idRef.current.focus();
      return;
    }
    if (password.length < 1) {
      passwordRef.current.focus();
      return;
    }
    //만약 로그인이 성공한다면, 로그인 후 페이지로 바꾸기
    navigate("/", { replace: true });
  };
  return (
    <div className="SignIn">
      <MyHeader
        leftChild={
          <DiGithub
            onClick={() => {
              navigate("/");
            }}
          />
        }
      />

      <section className="SignIn__innerSection">
        <h2>로그인</h2>
        <input
          value={id}
          ref={idRef}
          placeholder="아이디"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          value={password}
          ref={passwordRef}
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        />
        <MyButton text="로그인 하기" style={btnStyle} onClick={handleSubmit} />

        <div className="SignIn__toSignUp">
          <h5>아직 계정이 없으신가요? </h5>
          <MyButton
            text="계정 만들기 >"
            onClick={() => {
              navigate("/signup");
            }}
          />
        </div>
      </section>

      <MyFooter />
    </div>
  );
};
export default SignIn;
