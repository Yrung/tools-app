import { Hello } from './components/HelloWorld'
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

function App() {

  const planet = "Mars";

  // need "Fragments" <> </> to return more than one top level component
  return (
    <>
      {/* Literal String Prop */}
      <Hello subject="Earth" />
      {/* Evaluate an expression and pass the result as a prop */}
      <Hello subject={planet} />
      <ColorTool />
      <CarTool />
    </>
  );
}

export default App
