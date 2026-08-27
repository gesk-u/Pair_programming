import "./App.css";
import IdCard from "./IdCard";
import dudes from "./data/berlin.json"
import Random from "./Random"

const a = {
    "firstName": "Aaron",
    "lastName": "Newell",
    "country": "England",
    "img": "https://i.imgur.com/CFgX3Xx.png",
    "isStudent": false
  }
function App() {
  const dude1 = dudes[0]
  const dude2 = dudes[1]

  
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard dude1 = {dude1} />
      <IdCard dude1={dude2}/>
      <Random min={3} max={6}/>
      <Random min={1} max={100}/>
    </div>
  );
}

export default App;

