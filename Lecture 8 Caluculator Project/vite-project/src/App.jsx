{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}
import Title from "./components/Title";
import CalBody from "./components/CalBody";



function App(){
  let num = ["+", "-", "*", "/","1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "C"];


  return (
    <>
      <Title />
      <CalBody btnValues={num} />
    </>
  );
}


export default App;