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
import { Timer2 } from "./Components/Timer2/Timer2";
import { Square } from "./Components/SquareDiv/Square";
import { ToDoList } from "./Components/ToDoList/ToDoList";
import { MouseMoveEvent } from "./Components/UseEffectUses/MouseMoveEvent";
import { FetchData } from "./Components/UseEffectUses/FetchDatawithFetch";
import { FetchDatawithAxios } from "./Components/UseEffectUses/FetchDatawithAxios";
import { FocusRef } from "./Components/UseRef/FocusWithRef";
import Parent from "./Components/UpliftingChildtoParent/Parent";
import { Todolist } from "./Components/TODO/Todolist";
import { Tasklist } from "./Components/TODO/Tasklist";
import LoginFormWithValidation from "./Components/FormValidation/LoginFormWithValidation";

function App() {
  return (
    <div className="App">
      <Bulb />
      <LoginFormWithValidation />
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
      <Timer2 />
      <Square />
      <ToDoList />
      <MouseMoveEvent />
      <FetchData />
      <FetchDatawithAxios />
      <FocusRef />
      <Parent />
      <Todolist />
      <Tasklist />
    </div>
  );
}

export default App;
