import Item from "./Items";

function FoodItems({healthyFoods}){

//     const healthyFoods = [
//     "Avocado",
//     "Blueberries",
//     "Broccoli",
//     "Salmon",
//     "Spinach",
//     "Almonds",
//     "Quinoa",
//     "Greek Yogurt",
//     "Sweet Potato",
//     "Walnuts"
//   ];

    return (
        <ul className="list-group">
            {healthyFoods.map((food) => 
                <Item key={food} EachItem={food}></Item>
            )}
        </ul> 
    );
}


export default FoodItems;