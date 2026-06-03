import { useState } from "react";
import Item from "./Items";

function FoodItems({healthyFoods}) {

    let [activeItems, setActiveItems] = useState([]);

    function handleBuyButton (food, event) {
        console.log(food, event)
        let newList = [...activeItems, food];
        setActiveItems(newList);
        // if (evt.currentTarget.parentNode.classList.contains('bg-success')) {
        //     evt.currentTarget.parentNode.classList.remove('bg-success');
        // } else {
        //     evt.currentTarget.parentNode.classList.add('bg-success');
        // }        
    }
    


    return (
        <ul className="list-group">
            {healthyFoods.map((food) => 
                <Item key={food} 
                    bought={activeItems.includes(food)}
                    EachItem={food} 
                    handleBuyButton={(event) => handleBuyButton(food, event)}>
                </Item>
            )}
        </ul> 
    );
}


export default FoodItems;