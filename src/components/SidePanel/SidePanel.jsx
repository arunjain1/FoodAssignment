import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";
import "./SidePanel.css";

const SidePanel = () => {
  const { panelFlag ,setPanelFlag} = useContext(StoreContext);

  function handlePanel(){
    setPanelFlag(!panelFlag);
  }

  return panelFlag ? (
    //

    <div id="nav-bar">
      <div id="nav-content">
        <Link to="/">
          <div className="nav-button" onClick={handlePanel}>
            <span>Home</span>
          </div>
        </Link>
        <Link to="/menu">
          <div className="nav-button" onClick={handlePanel}>
            <span>Menu</span>
          </div>
        </Link>
        <Link to="/fav">
          <div className="nav-button" onClick={handlePanel}>
            <span>Favorites</span>
          </div>
        </Link>
        <Link to="/yoursurprise">
          <div className="nav-button" onClick={handlePanel}>
            <span>Random Menu</span>
          </div>
        </Link>
        <Link to="/">
          <div className="nav-button" onClick={handlePanel}>
            <span>About Us</span>
          </div>
        </Link>
        <div id="nav-content-highlight"></div>
      </div>
    </div>
  ) : null;
};

export default SidePanel;
