import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add, subtract, multiply, divide, resetHistory, deleteHistoryEntry, selectResult, selectHistory, selectErrorMessage } from '../slices/calcToolSlice';

export const CalcTool = () => {

  // the useSelector hook will have access to the redux store
  // so the useSelector hook will use selectResult func to get the result/history/errorMessage field off the state
  const result = useSelector(selectResult);
  const history = useSelector(selectHistory);
  const errorMessage = useSelector(selectErrorMessage);

  // sends actions into the store
  const dispatch = useDispatch();

  const [num, setNum] = useState(0);

  const doAdd = useCallback(() => {
    if (num === "") return;
    const numValue = Number(num);
    if (isNaN(numValue)) return;
    dispatch(add(numValue));     // creating an add action and dispatching the action into the store
  }, [num, dispatch]);

  const doSubtract = useCallback(() => {
    if (num === "") return;
    const numValue = Number(num);
    if (isNaN(numValue)) return;
    dispatch(subtract(numValue));
  }, [num, dispatch]);

  const doMultiply = useCallback(() => {
    if (num === "") return;
    const numValue = Number(num);
    if (isNaN(numValue)) return;
    dispatch(multiply(numValue));
  }, [num, dispatch]);

  const doDivide = useCallback(() => {
    if (num === "") return;
    const numValue = Number(num);
    if (isNaN(numValue)) return;
    dispatch(divide(numValue));
  }, [num, dispatch]);

  const doResetHistory = useCallback(() => {
    dispatch(resetHistory());
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
      <div>{errorMessage}</div>
      <label>
          Num Input:
          <input type="text" value={num}
            onChange={e => setNum(e.target.value)} />
        </label>
      <fieldset>
        <button type="button" onClick={doAdd}>+</button>
        <button type="button" onClick={doSubtract}>-</button>
        <button type="button" onClick={doMultiply}>*</button>
        <button type="button" onClick={doDivide}>/</button>
        <button type="button" onClick={doResetHistory}>Reset</button>
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