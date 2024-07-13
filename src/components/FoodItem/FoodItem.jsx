import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./FoodItem.css";

// Display all the categories of the food item
const FoodItem = ({ id, name ,food, image }) => {

  const { favItems, addToFav, removeFromFav } = useContext(StoreContext);

  return (
    <div className="food-item">
      {/* image */}
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />

        {/* If counter not zero */}

        {!favItems.has(id)
          ? <div
            className="add"
            onClick={() => addToFav(id,food)} // After change the state shift to next div
           > <svg xmlns="http://www.w3.org/2000/svg" id="Icons" viewBox="0 0 64 64" fill="black" width="25" height="25"><path d="M45.5,4A18.53,18.53,0,0,0,32,9.86,18.5,18.5,0,0,0,0,22.5C0,40.92,29.71,59,31,59.71a2,2,0,0,0,2.06,0C34.29,59,64,40.92,64,22.5A18.52,18.52,0,0,0,45.5,4ZM32,55.64C26.83,52.34,4,36.92,4,22.5a14.5,14.5,0,0,1,26.36-8.33,2,2,0,0,0,3.27,0A14.5,14.5,0,0,1,60,22.5C60,36.91,37.17,52.33,32,55.64Z"/></svg>
          </div>
          : <div className="add" onClick={() => removeFromFav(id,food)}>
            <svg height="25" viewBox="0 0 64 64" width="25" fill="red"  xmlns="http://www.w3.org/2000/svg" id="fi_3177369"><g id="Love"> <path d="M45.5,4A18.53,18.53,0,0,0,32,9.86,18.5,18.5,0,0,0,0,22.5C0,40.92,29.71,59,31,59.71a2,2,0,0,0,2.06,0C34.29,59,64,40.92,64,22.5A18.52,18.52,0,0,0,45.5,4ZM32,55.64C26.83,52.34,4,36.92,4,22.5a14.5,14.5,0,0,1,26.36-8.33,2,2,0,0,0,3.27,0A14.5,14.5,0,0,1,60,22.5C60,36.91,37.17,52.33,32,55.64Z"/><path d="m56.6978 35.1641-23.9978 23.5288a1 1 0 0 1 -1.4 0l-23.9978-23.5288a17.667 17.667 0 0 1 -4.0786-19.03 17.4783 17.4783 0 0 1 13.6836-10.98c5.6895-.7669 11.0028 1.5275 15.0928 6.4724 4.0942-4.9527 9.4058-7.2465 15.0728-6.4878a17.6385 17.6385 0 0 1 9.625 30.0254z"></path></g></svg>
          </div>
        }
       
      </div>

      <div className="food-item-info">
        {/* name & Rating */}
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        {/* description */}
        {/* <div className="food-item-desc">{description}</div> */}
        {/* price */}
        {/* <div className="food-item-price">₹ {price}</div> */}
      </div>
    </div>
  );
};

export default FoodItem;
