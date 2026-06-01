import Title from "./components/Title"
import ErrorMsg from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";


function App(){
  // const healthyFoods = [];
    const healthyFoods = [
    "Avocado",
    "Blueberries",
    "Broccoli",
    "Salmon",
    "Spinach",
    "Almonds",
    "Quinoa",
    "Greek Yogurt",
    "Sweet Potato",
    "Walnuts"
  ];

  
  
  // const emptyMsg = healthyFoods.length === 0 ? <h2>I'm Still Hungry.</h2> : null
  
  
  return (
    <>
      <Title />
      {/* {healthyFoods.length === 0 ? <h2>I'm Still Hungry.</h2> : null} */}
      <ErrorMsg Error={healthyFoods}></ErrorMsg>
      <FoodItems healthyFoods={healthyFoods} />
    </>
  )
}


export default App;