import { DiGithub } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import MyFooter from "../components/MyFooter";
const SignIn = () => {
  const navigate = useNavigate();
  return (
    <>
      signin
      <DiGithub
        onClick={() => {
          navigate("/");
        }}
      />
      <MyFooter />
    </>
  );
};
export default SignIn;
