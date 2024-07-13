import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Fav from "./pages/Fav/Fav";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import LoginPopUp from "./LoginPopUp/LoginPopUp";
import { useState } from "react";
import SidePanel from "./components/SidePanel/SidePanel";
import Menu from "./pages/Menu/Menu";
import Surpriser from "./pages/Surpriser/Surpriser";
import Categories from "./pages/Categories/Categories";

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {/* Showing login or not */}
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}

      <div className="app">
        
        <Navbar setShowLogin={setShowLogin} />
        <div style={{
          display : 'flex',
          justifyContent : 'center',
        }}>
        <SidePanel/>
        <div className="">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/category" element={<Categories/>} />
          <Route path="/yoursurprise" element={<Surpriser/>} />
          <Route path="/fav" element={<Fav/>} />
          <Route path="/order" element={<PlaceOrder/>} />
        </Routes>
        </div>
        </div>

      </div>
      
      
    </>
  );
};

export default App;
