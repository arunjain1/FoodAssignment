import { createContext, useEffect } from "react";
import { useState } from "react";

export const StoreContext = createContext(null)

// Api fetch the data
const StoreContextProvider = (props) => {

    const [favItems,setFavItems] = useState(new Map())
    const [panelFlag,setPanelFlag] = useState(false);
    const [selectedCategory,setSelectedCategory] = useState("");

    const addToFav =(itemId,item)=>{
        const newMap = new Map(favItems);
         newMap.set(itemId,item);
        setFavItems(newMap);
    }

    const removeFromFav =(itemId) =>{
        const newMap = new Map(favItems);
        newMap.delete(itemId);
        setFavItems(newMap);
    }

    const contextValue ={
        favItems,
        setFavItems,
        addToFav,
        removeFromFav,
        panelFlag,
        setPanelFlag,
        selectedCategory,
        setSelectedCategory
    }
    console.log(favItems);
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider