import Title from "./components/Title"
import ErrorMsg from "./components/ErrorMsg";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import InputItems from "./components/InputItems";



function App(){
    const healthyFoods = [
    "Avocado",
    "Blueberries",
    "Broccoli",
    "Salmon",
    "Spinach",
    "Almonds",
    "Quinoa"
  ];


  return (
    <>
    <Container>
      <Title />
      <ErrorMsg Error={healthyFoods}></ErrorMsg>
      <InputItems></InputItems>
      <FoodItems healthyFoods={healthyFoods} />
    </Container>

    {/* <Container>
      <p>This is the List of food Items that are good for health.</p>
    </Container> */}
    </>
  )
}


export default App;