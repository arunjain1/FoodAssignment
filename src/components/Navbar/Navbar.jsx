import { useContext, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

  const {panelFlag,setPanelFlag} = useContext(StoreContext)
 

  return (
    <div className='navbar'>
      <div className='navbar_toggle' onClick={()=> setPanelFlag(!panelFlag)}>
        <img className='toggleImg' src={assets.toggleMenu} alt="" />
      </div>
      <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>

      

      <div className="navbar-right">

        <button onClick={()=>setShowLogin(true)}>Sign In</button>

      </div>

    </div>
  )
}

export default Navbar
