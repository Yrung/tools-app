import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { CalcTool } from './components/CalcTool';

function App() {

  // need "Fragments" <> </> to return more than one top level component
  return (
    <>
      <ColorTool />
      <CarTool />
      <CalcTool />
    </>
  );
}

export default App
