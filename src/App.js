import './App.css';
import Faq from './Faq/Faq'
import Pricing from './Pricing/Pricing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Report from './Report/Report';
import FooterMain from './Footer/FooterMain'
// import Template from './Template/Template';
import LandingPage from '../src/Landing/LandingPage'
import UserProfile from './UserProfile/UserProfile'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
        <Route path='/' element={<LandingPage/>}/>
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Report" element={<Report />} />
          <Route path='/UserProfile' element={<UserProfile/>} />
        </Routes>
        <FooterMain />
      </BrowserRouter>
      
     
     
      
    </div>
  );
}

export default App;
