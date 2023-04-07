import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counter";

function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={()=>dispatch(increment(1))}>increment</button>
      <button onClick={()=>dispatch(decrement(1))}>decrement</button>
      <h3>count : {counter}</h3>

    </div>
  );
}

export default App;
