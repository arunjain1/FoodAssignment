import "./ExploreMenu.css"
import { useNavigate } from 'react-router-dom'

const ExploreMenu = ({category,setCategory}) => {
  const navigate = useNavigate();
  return (
    <div className='explore-menu' id='explore-menu'>

      <h1>Explore our Menu : </h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings & elevate your dining experience, one delicious meal at a time .</p>

      <div className="explore-menu-list">

        {category[0]?.categories?.map((item,index)=>{
          return(
            <div onClick={
              ()=>{
                setCategory(item.strCategory)
                navigate("/category")
              }
            } 
            key={index} className="explore-menu-list-item">

              <img  src={item.strCategoryThumb} alt="" />

              <p>{item.strCategory}</p>
            </div>
          )
        })}

      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
