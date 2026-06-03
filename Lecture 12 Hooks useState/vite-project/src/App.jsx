import Title from "./components/Title"
import ErrorMsg from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import InputItems from "./components/InputItems";
import { useState } from "react";



function App(){
    // const healthyFoods = ["Avocado", "Blueberries", "Broccoli"];

    const [healthyFoods, sethealthyFoods] = useState([]);
    

    const handleOnChange = (event) => {
      // console.log(event);
      if (event.code === "Enter") {
        console.log(event.target.value);
        // let food = event.target.value;
        let foodList = [...healthyFoods, event.target.value]; 
        event.target.value = ""
        sethealthyFoods(foodList);

        // sethealthyFoods(event.target.value); 
      }
    }


  return (
    <>
    <Container>
      <Title />
      <InputItems handleOnChange={handleOnChange}></InputItems>
      <ErrorMsg Error={healthyFoods}></ErrorMsg>
      <FoodItems healthyFoods={healthyFoods} />
    </Container>
    </>
  )
}


export default App;