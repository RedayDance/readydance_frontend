import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import DetailPage from "./pages/DetailPage";
import React, { useReducer} from "react";
import { useEffect } from "react";
const loginreducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      const ret = window.localStorage.getItem("A_TOKEN") ? true : false;
      return ret;
    }
    case "TOGGLELOGIN": {
      return !state;
    }
    case "LOGOUT":{
      return !state;
    }
    default:
      return state;
  }
};

export const LoginContext = React.createContext();
export const LoginDispatchContext = React.createContext();
function App() {
 
  const [login, dispatch] = useReducer(loginreducer, false);
  
  useEffect(()=>{
    const localLogin = localStorage.getItem("A_TOKEN");
    if(localLogin){
      dispatch({type:"INIT", data:localLogin});
    }
  }, []);
  
  const r_login = (state) => {
    dispatch({ type: "TOGGLELOGIN", data: state});
  };

  const r_logout = (state)=>{
    window.localStorage.removeItem('A_TOKEN');
    window.localStorage.removeItem('R_TOKEN');
    dispatch({type:"LOGOUT", data: state});
  };
  
  return (
    <LoginContext.Provider value={login}>
      <LoginDispatchContext.Provider value={{r_login, r_logout}}>
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
