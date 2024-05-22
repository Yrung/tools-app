import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add, subtract, multiply, divide, clearHistory, deleteHistoryEntry, selectResult, selectHistory } from '../slices/calcToolSlice';

export const CalcTool = () => {

  // the useSelector hook will have access to the redux store
  // so the useSelector hook will use selectResult func to get the result off the state
  const result = useSelector(selectResult);

  const history = useSelector(selectHistory);

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

  const doClearHistory = useCallback(() => {
    dispatch(clearHistory());
  }, [dispatch]);

  const doDeleteHistoryEntry = useCallback((id) => {
    dispatch(deleteHistoryEntry(id));
  }, [dispatch]);

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
        <button type="button" onClick={doClearHistory}>Reset</button>
      </fieldset>
      <table>
        <thead>
          <tr>
            <th>Operation</th>
            <th>Operand</th>
          </tr>
        </thead>
        <tbody>
          {history.map(h => 
            <tr key={h.id}>
              <td>{h.opName}</td>
              <td>{h.opValue}</td>
              <td><button type="button" onClick={() => doDeleteHistoryEntry(h.id)}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </form>
    </>
  )
};