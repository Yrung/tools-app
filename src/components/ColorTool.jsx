import { useCallback } from 'react';

import { ColorList } from "./ColorList";
import { ToolHeader } from "./ToolHeader";
import { ColorForm } from './ColorForm';

import { useGetColorsQuery, useAppendColorMutation, useRemoveColorMutation } from '../api/colorToolApi';

// ColorTool provides the car data (keep the state) and is the parent component of the whole Color thing,
// calling ColorList and ColorForm to display them
export const ColorTool = () => {

  const { data: colors, isLoading, isError } = useGetColorsQuery();
  const [ appendColor ] = useAppendColorMutation();
  const [ removeColor ] = useRemoveColorMutation();

  const doAddColor = useCallback(async newColor => {
    await appendColor(newColor);
  }, [appendColor]);

  const doDeleteColor = useCallback(async colorId => {
    await removeColor(colorId);
  }, [removeColor]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Sorry, something went wrong...</p>;
  }

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} onDeleteColor={doDeleteColor}/>
      <ColorForm buttonText="Add Color" onSubmitColor={doAddColor} />
    </>
  );
};