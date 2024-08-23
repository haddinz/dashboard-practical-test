import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { decrement, increment } from "../store/counter/counterSlice";
import { Button } from "../components";

function ReduxPage() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <p>hai</p>
      <h2>{count}</h2>
      <Button name="increment" onClickHandler={incrementHandler} />
      <Button name="decrement" onClickHandler={decrementHandler} />
    </div>
  );
}

export default ReduxPage;

{
  /* <button onClick={incrementHandler}>increment</button> */
}
{
  /* <button onClick={() => dispatch(decrement())}>decrement</button> */
}
{
  /* <button onClick={decrementHandler}>decrement</button> */
}
