import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import BannerItem from './components/BannerItem';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mypage/:id" element={<MyPage/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/banneritem" element={<BannerItem/>}/>
        </Routes>
       
      </div> 
    </BrowserRouter>
  );
}

export default App;
