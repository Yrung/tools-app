import { useCallback } from 'react';
import { CarForm } from './CarForm';
import { CarTable } from './CarTable';
import { ToolHeader } from './ToolHeader';
import { useDispatch, useSelector } from 'react-redux';
import { addCar, deleteCar, selectCars } from '../slices/carToolSlice';

// CarTool provides the car data (keep the state) and is the parent component of the whole Car thing,
// calling CarTable and CarForm to display them
export const CarTool = () => {

  const cars = useSelector(selectCars);
  const dispatch = useDispatch();

  const doAddCar = useCallback(newCar => {
    dispatch(addCar(newCar));
  }, [dispatch])

  const doDeleteCar = useCallback((carId) => {
    dispatch(deleteCar(carId))
  }, [dispatch]);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} onDeleteCar={doDeleteCar}/>
      <CarForm buttonText="Add Car" onSubmitCar={doAddCar} />
    </>
  );
};