import { useCallback } from 'react';
import { CarForm } from './CarForm';
import { CarTable } from './CarTable';
import { ToolHeader } from './ToolHeader';

import {
  useGetCarsQuery, useAppendCarMutation, useRemoveCarMutation,
} from '../api/carToolApi';

// CarTool provides the car data (keep the state) and is the parent component of the whole Car thing,
// calling CarTable and CarForm to display them
export const CarTool = () => {

  const { data: cars, isLoading, isError } = useGetCarsQuery();
  const [ appendCar ] = useAppendCarMutation();
  const [ removeCar ] = useRemoveCarMutation();

  const doAddCar = useCallback(async newCar => {
    await appendCar(newCar);
  }, [appendCar])

  const doDeleteCar = useCallback(async carId => {
    await removeCar(carId);
  }, [removeCar]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Sorry, something went wrong...</p>;
  }

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} onDeleteCar={doDeleteCar}/>
      <CarForm buttonText="Add Car" onSubmitCar={doAddCar} />
    </>
  );
};