import { DiGithub } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import API, { POST } from "../shared/Request";

const SignUp = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [certificationNumber, setCertificationNumber] = useState("");
  const [s_certificationNumber, s_setCertificationNumber] = useState("");

  const [password, setPassword] = useState("");
  const [checkpassword, setCheckpassword] = useState("");
  const [emailAlertMent, setEmailAlertMent] = useState("");
  const [passwordAlertMent, setPasswordAlertMent] = useState("");
  const [passwordCheckAlertMent, setPasswordCheckAlertMent] = useState("");

  const [hasEngChar, setHasEngChar] = useState(false);
  const [hasSpecialSymbol, setHasSpecialSymbol] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasGoodLength, setHasGoodLength] = useState(false);
  const [pushCertifiactionBtn, setPushCertificationBtn] = useState(false);
  const [pushCertificationOkBtn, setPushCertificationOkBtn] = useState(false);
  const [certificate, setCertificate] = useState(false);

  const idRef = useRef();
  const nicknameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const checkpasswordRef = useRef();
  const certificationNumberRef = useRef();

  const pattern_num = /[0-9]/;
  const pattern_eng = /[a-zA-Z]/;
  const pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/;
  const pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  const checkEmail = (str) => {
    const reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!reg_email.test(str)) {
      return false;
    } else {
      return true;
    }
  };

  const checkPhoneNumber = (str) => {
    console.log(str);
    const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    if (!regPhone.test(str)) {
      return false;
    }
    return true;
  };
  useEffect(() => {}, []);
  const checkPassword = (password) => {
    if (pattern_num.test(password)) {
      setHasNumber(true);
    } else {
      setHasNumber(false);
    }
    if (pattern_eng.test(password)) {
      setHasEngChar(true);
    } else {
      setHasEngChar(false);
    }
    if (pattern_spc.test(password)) {
      setHasSpecialSymbol(true);
    } else {
      setHasSpecialSymbol(false);
    }
    if (password.length >= 6) {
      setHasGoodLength(true);
    } else {
      setHasGoodLength(false);
    }

    if (pattern_kor.test(password)) {
      setPasswordAlertMent("비밀번호에 한글은 사용 불가합니다");
    } else {
      setPasswordAlertMent("");
    }
  };

  const disable = () => {
    if (
      id.length >= 1 &&
      nickname.length >= 1 &&
      email.length >= 1 &&
      phoneNumber.length >= 1 &&
      hasGoodLength &&
      hasNumber &&
      hasSpecialSymbol &&
      hasEngChar &&
      certificationNumber >= 1 &&
      checkpassword.length === password.length
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!checkEmail(email)) {
      setEmailAlertMent("잘못된 이메일 형식입니다.");
      emailRef.current.focus();
      return false;
    }
    if (password.length < 6) {
      passwordRef.current.focus();
      setPasswordAlertMent("비밀번호를 6자이상 입력해주세요");
      return;
    } else {
      setPasswordAlertMent("");
    }
    if (checkpassword.length < 6) {
      checkpasswordRef.current.focus();
    }

    if (checkpassword !== password) {
      checkpasswordRef.current.focus();
      setPasswordCheckAlertMent("입력하신 비밀번호와 일치하지 않습니다");
      return;
    }

    if (
      pattern_num.test(password) &&
      pattern_eng.test(password) &&
      pattern_spc.test(password) &&
      !pattern_kor.test(password)
    ) {
      const ans = window.confirm("회원가입을 진행하시겠습니까?");

      if (ans == true) {
        POST("/api/user/Join", {
          USR_TYPE: "L",
          USR_EMAIL: email,
          USR_ID: id,
          USR_PASS: password,
          USR_NAME: nickname,
          USR_TEL: phoneNumber,
          USR_IMG:
            "https://images.khan.co.kr/article/2021/01/08/l_2021010802000388200068931.jpg",
        }).then((response) => {
          console.log(response);
        });

        console.log(`id: ${id}`);
        console.log(`nickname: ${nickname}`);
        console.log(`phoneNumber: ${phoneNumber}`);
        console.log(`certificationNumber: ${certificationNumber}`);
        console.log(`email: ${email}`);
        console.log(`password: ${password}`);
        console.log(`checkpassword: ${checkpassword}`);

        //회원가입
      } else {
        //회원가입 진행을 원하지 않는 경우
      }
    }
  };

  const btnStyle = {
    backgroundColor: "#44dccf",
    color: "#eeeeee",
    width: "200px",
    margin: "0 auto",
  };

  const disableBtnStyle = {
    pointerEvents: "none",
    opacity: "0.4",
    backgroundColor: "#44dccf",
    color: "#eeeeee",
    width: "200px",
    margin: "0 auto",
  };

  useEffect(() => {
    checkPassword(password);
  }, [password]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    checkPassword(password);
  };

  //서버에서 받은 인증번호와 사용자가 입력한 인증번호가 같은지 확인
  function handleCheckCertificationNumber(e) {
    e.preventDefault();
    setPushCertificationOkBtn(true);
    if (parseInt(certificationNumber) === parseInt(s_certificationNumber)) {
      setCertificate(true);
    } else {
      setCertificate(false);
    }
  }

  //사용자가 올바른 전화번호를 입력했는지 확인해보고, 맞다면 서버에 전송한 후 인증번호를 받아옴
  function handleClickPhoneBtn(e) {
    e.preventDefault();
    if (checkPhoneNumber(phoneNumber)) {
      POST("/api/user/SendNumber", {
        USR_TEL: phoneNumber,
      }).then((response) => {
        s_setCertificationNumber(response.data.data[0].AUTH_NUM);
        console.log(response.data.data[0].AUTH_NUM);
      });

      setPushCertificationBtn(true);
    } else {
      alert("올바른 전화번호를 입력해주세요");
    }
  }
  return (
    <div className="SignUp">
      <MyHeader
        leftChild={
          <DiGithub
            onClick={() => {
              navigate("/");
            }}
          />
        }
      />

      <section className="SignUp__innerSection">
        <div>
          <h5>아이디</h5>
          <input
            placeholder="아이디"
            name="id"
            value={id}
            ref={idRef}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div>
          <h5>닉네임</h5>
          <input
            placeholder="닉네임"
            name="nickname"
            value={nickname}
            ref={nicknameRef}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        <div>
          <h5>이메일</h5>
          <input
            placeholder="이메일"
            type="email"
            name="email"
            value={email}
            ref={emailRef}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h5 className="SignUp__alert">{emailAlertMent}</h5>
        </div>

        <div>
          <h5>전화번호</h5>
          <div style={{ width: "200px", display: "flex" }}>
            <input
              placeholder="전화번호"
              name="phoneNumber"
              value={phoneNumber}
              ref={phoneNumberRef}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <MyButton
              style={{ marginLeft: "10px", marginRight: "0px" }}
              text="인증번호전송"
              onClick={handleClickPhoneBtn}
            />
          </div>
        </div>

        {pushCertifiactionBtn ? (
          <div>
            <h5>인증번호 입력</h5>
            <div style={{ width: "200px", display: "flex" }}>
              <input
                placeholder="?자리 인증번호"
                name="certificationNumber"
                value={certificationNumber}
                ref={certificationNumberRef}
                onChange={(e) => {
                  setCertificationNumber(e.target.value);
                }}
              />
              <MyButton
                style={{ marginLeft: "10px", marginRight: "0px" }}
                text="인증번호확인"
                onClick={handleCheckCertificationNumber}
              />
            </div>

            {pushCertificationOkBtn && (
              <h6 style={certificate ? {} : { color: "red" }}>
                {certificate
                  ? "인증이 완료되었습니다"
                  : "인증번호가 올바르지 않습니다."}
              </h6>
            )}
          </div>
        ) : (
          <> </>
        )}

        <div>
          <h5>비밀번호</h5>
          <input
            placeholder="비밀번호"
            type="password"
            name="password"
            value={password}
            ref={passwordRef}
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <h6
            style={
              hasSpecialSymbol
                ? { textDecoration: "line-through #4d4d4d 2px" }
                : {}
            }
          >
            {" "}
            특수문자를 하나 이상 포함해주세요{" "}
          </h6>
          <h6
            style={
              hasEngChar ? { textDecoration: "line-through #4d4d4d 2px" } : {}
            }
          >
            {" "}
            영어를 하나 이상 포함해주세요{" "}
          </h6>
          <h6
            style={
              hasNumber ? { textDecoration: "line-through #4d4d4d 2px" } : {}
            }
          >
            {" "}
            숫자를 하나 이상 포함해주세요{" "}
          </h6>
          <h6
            style={
              hasGoodLength
                ? { textDecoration: "line-through #4d4d4d 2px" }
                : {}
            }
          >
            {" "}
            비밀번호는 6자 이상으로 설정해주세요{" "}
          </h6>

          <h5 className="SignUp__alert">{passwordAlertMent}</h5>
        </div>

        <div>
          <h5>비밀번호 확인</h5>
          <input
            placeholder="비밀번호 확인"
            type="password"
            name="checkpassword"
            ref={checkpasswordRef}
            value={checkpassword}
            onChange={(e) => setCheckpassword(e.target.value)}
          />
          <h5 className="SignUp__alert">{passwordCheckAlertMent}</h5>
        </div>

        <MyButton
          style={disable() ? disableBtnStyle : btnStyle}
          text={"계정 만들기"}
          onClick={handleSubmit}
        />
      </section>
      <MyFooter />
    </div>
  );
};
export default SignUp;
