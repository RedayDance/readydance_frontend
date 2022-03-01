import { DiGithub } from "react-icons/di";
import MyButton from "./MyButton";

import { useContext } from "react";
import { LoginDispatchContext } from "../App";
import { LoginContext } from "../App";
import { useNavigate } from "react-router-dom";

const MyHeader = ({ searchBar, rightChild }) => {
  const navigate = useNavigate();
  const login = useContext(LoginContext);
  const { r_logout } = useContext(LoginDispatchContext);

  return (
    <header className="MyHeader">
      <div className="MyHeader__left">
        <img
          alt="레디댄스 로고이미지"
          style={{ transform: "scale(0.8)" }}
          src={process.env.PUBLIC_URL + `/assets/Logo_readyDance.png`}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      <div className="MyHeader__searchBar">{searchBar}</div>
      <div className="MyHeader__right">
        <div className="MyHeader__loginInfo">
          {" "}
          {login ? (
            <MyButton text={"로그아웃"} onClick={() => r_logout(login)} />
          ) : (
            <MyButton
              text={"로그인/회원가입"}
              onClick={() => navigate("/signin")}
            />
          )}
        </div>
        <div className="MyHeader__rightChild">{rightChild}</div>
      </div>
    </header>
  );
};
export default MyHeader;
