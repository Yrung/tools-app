import { useState, useCallback } from 'react';
import { useCalcToolStore } from '../hooks/useCalcToolStore';

export const CalcTool = () => {

  const calcToolStore = useCalcToolStore();
  // component state
  const [num, setNum] = useState(0);

  // add (action)
  const add = useCallback(() => {
    // update the state (reducer)
    calcToolStore.add(num);
    setNum(0);
  }, [calcToolStore, num]);

  const subtract = useCallback(() => {
    calcToolStore.subtract(num)
    setNum(0);
  }, [calcToolStore, num]);

  return (
    <form>
      <div>Result: {calcToolStore.result}</div>
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