import { useCallback } from 'react';

import { ColorList } from "./ColorList";
import { ToolHeader } from "./ToolHeader";
import { ColorForm } from './ColorForm';

import { useDispatch, useSelector } from 'react-redux';
import { addColor, deleteColor, selectColors } from '../slices/colorToolSlice';

// ColorTool provides the car data (keep the state) and is the parent component of the whole Color thing,
// calling ColorList and ColorForm to display them
export const ColorTool = () => {

  const dispatch = useDispatch();
  const colors = useSelector(selectColors);

  const doAddColor = useCallback(newColor => {
    dispatch(addColor(newColor));
  }, [dispatch])

  const doDeleteColor = useCallback((colorId) => {
    dispatch(deleteColor(colorId))
  }, [dispatch]);

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} onDeleteColor={doDeleteColor}/>
      <ColorForm buttonText="Add Color" onSubmitColor={doAddColor} />
    </>
  );
};