import { useState, useCallback } from 'react';

export const CalcTool = () => {

  // application state
  const [appState, setAppState] = useState({result: 0});

  // component state
  const [num, setNum] = useState(0);

  const add = useCallback(() => {
    setAppState({
      ...appState,
      result: appState.result + num,
    });
    setNum(0);
  }, [appState, num]);

  const subtract = useCallback(() => {
    setAppState({
      ...appState,
      result: appState.result - num,
    });
    setNum(0);
  }, [appState, num]);

  return (
    <form>
      <div>Result: {result}</div>
      <label> 
        Num Input:
        <input type="number" value={num} 
          onChange={(e) => setNum(e.target.valueAsNumber)}/>
      </label>
      <fieldset>
        <button type="button" onClick={add}>+</button>
        <button type="button" onClick={subtract}>-</button>
      </fieldset>
    </form>
  )
};