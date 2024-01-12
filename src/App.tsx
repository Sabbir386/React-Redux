import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/feautures/counterSlice";
import { RootState } from "@reduxjs/toolkit/query";

function App() {
  const count = useSelector((state) => state.counter.count)
  const dispatch=useDispatch();
  return (
    <div className="h-screen w-full justify-center  item-center">
      <div className="flex border border-purple-300 rounded-md bg-slate-50 p-10">
        <button onClick={() => dispatch(increment())} className="px-3 py-2 rounded-md bg-green-500 text-white font-semibold text-xl" >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button  onClick={() => dispatch(decrement())} className="px-3 py-2 rounded-md bg-red-500 text-white font-semibold text-xl">
          Deccrement
        </button>
      </div>
    </div>
  );
}

export default App;
