import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add, subtract, multiply, divide, selectResult } from '../slices/calcToolSlice';

export const CalcTool = () => {

  // the useSelector hook will have access to the redux store
  // so the useSelector hook will use selectResult func to get the result off the state
  const result = useSelector(selectResult);

  // sends actions into the store
  const dispatch = useDispatch();

  const [num, setNum] = useState(0);

  const doAdd = useCallback(() => {
    // creating an add action and dispatching the action into the store
    dispatch(add(num));
    setNum(0);
  }, [num, dispatch]);

  const doSubtract = useCallback(() => {
    dispatch(subtract(num));
    setNum(0);
  }, [num, dispatch]);

  const doMultiply = useCallback(() => {
    dispatch(multiply(num));
    setNum(0);
  }, [num, dispatch]);

  const doDivide = useCallback(() => {
    dispatch(divide(num));
    setNum(0);
  }, [num, dispatch]);

  return (
    <>
    <header>
      <h1>Calc Tool</h1>
    </header>
    <form>
      <div>Result: {result}</div>
      <label> 
        Num Input:
        <input type="number" value={num} 
          onChange={e => setNum(e.target.valueAsNumber)}/>
      </label>
      <fieldset>
        <button type="button" onClick={doAdd}>+</button>
        <button type="button" onClick={doSubtract}>-</button>
        <button type="button" onClick={doMultiply}>*</button>
        <button type="button" onClick={doDivide}>/</button>
      </fieldset>
    </form>
    </>
  )
};