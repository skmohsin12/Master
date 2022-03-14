// import logo from './logo.svg';
import "./App.css";
import { Bulb } from "./Components/BulbComonent/Bulb";
import { Counter } from "./Components/Counter/Counter";
import { CompA } from "./Components/PropsConcept/CompA";
import { Bulb2 } from "./Components/Bulb2/Bulb2";
import HandleInput from "./Components/UseStateforInput/HandleInput";
import { Comp1 } from "./Components/PropsDrillingOrigional/Copm1";
import { CompA1 } from "./Components/PropsContextApi/CompA1";
import { Compo1 } from "./Components/PropsCUseContext/Compo1";
import { ReducerCounter } from "./Components/CounterWithUseReducer/CounterWithReducer";
import { Timer } from "./Components/Timer/Timer";
import { Square } from "./Components/SquareDiv/Square";
import { ToDoList } from "./Components/ToDoList/ToDoList";

function App() {
  return (
    <div className="App">
      <Bulb />
      <Counter />
      <CompA />
      <Bulb2 />
      <HandleInput />
      <br />
      <br />
      <Comp1 />
      <br />
      <br />
      <CompA1 />
      <Compo1 />
      <ReducerCounter />
      <Timer />
      <Square />
      <ToDoList />
    </div>
  );
}

export default App;
