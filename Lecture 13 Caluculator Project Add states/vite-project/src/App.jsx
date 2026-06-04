import Title from "./components/Title";
import CalBody from "./components/CalBody";



function App(){
  let num = ["+", "-", "*", "/", "%", "C", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "="];





  return (
    <>
      <Title />
      <CalBody btnValues={num} />
    </>
  );
}


export default App;