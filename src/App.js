import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import DetailPage from "./pages/DetailPage";
import React, { useReducer } from "react";
const loginreducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
     
      return false;
    }
    case "TOGGLELOGIN": {
      return !state;
    }
    case "LOGOUT":{
      window.localStorage.removeItem('A_TOKEN');
      window.localStorage.removeItem('R_TOKEN');
      return !state;
    }
    default:
      return state;
  }
};

export const LoginContext = React.createContext();
export const LoginDispatchContext = React.createContext();
function App() {
  const ret = window.localStorage.getItem("A_TOKEN") ? true : false;
  const [login, dispatch] = useReducer(loginreducer, ret);
  
  const r_toggleLogin = (login) => {
    dispatch({ type: "TOGGLELOGIN", data: login });
  };

  const r_logout = (login)=>{
    dispatch({type:"LOGOUT", data:login});
  }
  return (
    <LoginContext.Provider value={login}>
      <LoginDispatchContext.Provider value={r_toggleLogin, r_logout}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/detail/:id" element={<DetailPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
