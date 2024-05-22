import { useState, useCallback } from 'react';

import { ColorList } from "./ColorList";
import { ToolHeader } from "./ToolHeader";
import { ColorForm } from './ColorForm';

// ColorTool provides the car data (keep the state) and is the parent component of the whole Color thing,
// calling ColorList and ColorForm to display them
export const ColorTool = () => {

  const [colors, setColors] = useState([
    { id:1, name: 'red', hexcode: 'ff0000' },
    { id:2, name: 'green', hexcode: '00ff00' },
    { id:3, name: 'blue', hexcode: '0000ff' },
  ]);

  const addColor = useCallback(newColor => {
    setColors([
      ...colors, //copy the original array into the new array
      {
        ...newColor, //copy the properties of the newColor object
        // get the max id in the colors list, then add 1 to it
        id: Math.max(...colors.map(c => c.id), 0) + 1,
      }
    ])
  }, [colors])

const deleteColor = (colorId) => {
  setColors(colors.filter(c => c.id !== colorId));
};

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} onDeleteColor={deleteColor}/>
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );
};