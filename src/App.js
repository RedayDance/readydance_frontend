import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import DetailPage from './pages/DetailPage';
import React, { useReducer, useState } from 'react';
const loginreducer = (state, action) => {
  switch(action.type){
     case 'INIT':{
       return false;
     }
    case 'TOGGLELOGIN':{
      return !state;
    }
    default:
      return state;
  }
 
}


 export const LoginContext = React.createContext();
 export const LoginDispatchContext = React.createContext();
 function App() {
  const [login, dispatch] = useReducer(loginreducer,true);

  const toggleLogin = (login) => {
    dispatch({type:"TOGGLELOGIN",
   data:login})
  };

 
  return (
    <LoginContext.Provider value={login} >
      <LoginDispatchContext.Provider value={toggleLogin}>

   
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mypage/:id" element={<MyPage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
       
      </div> 
    </BrowserRouter>   
    </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
