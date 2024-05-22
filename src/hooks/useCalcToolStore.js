import { useState, useCallback } from 'react';

export const useCalcToolStore = () => {
  // application state
  const [appState, setAppState] = useState({result: 0});

    // add (action)
    const add = useCallback((num) => {
      // update the state (reducer)
      setAppState({
        ...appState,
        result: appState.result + num,
      });
    }, [appState]);
  
    const subtract = useCallback((num) => {
      setAppState({
        ...appState,
        result: appState.result - num,
      });
    }, [appState]);

  // selector is a func that selects property(s) off the state and returns it or transforms it and returns it
  const selectResult = useCallback(() => appState.result, [appState]);

  return { result: selectResult(appState), add, subtract };
};