import Item from "./Items";

function FoodItems({healthyFoods}){
    return (
        <ul className="list-group">
            {healthyFoods.map((food) => 
                <Item key={food} EachItem={food}></Item>
            )}
        </ul> 
    );
}


export default FoodItems;