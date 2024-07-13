import { useContext } from "react";
import "./Fav.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import NotFound from "../../components/NotFound/NotFound";

const Fav = () => {
  const { favItems, removeFromFav } = useContext(StoreContext);
  
  return favItems.size === 0 ? (
    <NotFound/>
  ) : (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p className="table-item">Items</p>
          <p className="table-item">Title</p>
          <p className="table-item">Remove</p>
        </div>
        <br />
        <hr />

        {Array.from(favItems.entries()).map(([key, value]) => (
          <div style={{
            overflow :'auto',
          }}>
          <div className="cart-items-title cart-items-item">
            <div className="cartimgCont">
            <img className="k" src={value.strMealThumb} alt="" />
            </div>
            <p className="table-item">{value.strMeal}</p>
            <p  onClick={() => removeFromFav(key)} className="cross table-item">
              <img className="ck" src={assets.remove_icon_red} alt="" />
            </p>
          </div>

          <hr />
        </div>
        ))}

      </div>

  
    </div>
  );
};

export default Fav;
