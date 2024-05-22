import { useState, useCallback } from 'react';

export const CalcTool = () => {
  const [result, setResult] = useState(0);

  const [num, setNum] = useState(0);

  const add = useCallback(() => {
    setResult(result + num);
    setNum(0);
  }, [result, num]);

  const subtract = useCallback(() => {
    setResult(result - num);
    setNum(0);
  }, [result, num]);

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