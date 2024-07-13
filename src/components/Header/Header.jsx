import React from 'react'
import "./Header.css";
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();
  function handleReroute(){
    navigate(props.type=="meal"?"/menu":props.type==="favorite"?"/fav":"/yoursurprise");
  } 
 
  return (
    <div className='header' style={{
      backgroundImage: props.type=="meal"?"url('/header_img.png')":props.type==="favorite"?"url('/banner2.jpg')":"url('/banner3.jpg')",
      backgroundRepeat: "no-repeat"
    }}>

      <div className="header-contents">
        <h2>{props.type==="meal"?"Explore Exlusive food here...!!":props.type==="favorite"?"Order your favourite food here...!!":"Let us decide the meal for us"}</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients & culinary expertise . Our mission is to satisfy your cravings and elevate your dining experience , one delicious meal at a time.</p>
        <button className='headerbutton' onClick={handleReroute}>{props.type=="meal"?"View Menu":props.type=="favorite"?"Favorite":"Surprise Me"}</button>
      </div>

    </div>
  )
}

export default Header
