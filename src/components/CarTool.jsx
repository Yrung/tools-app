import { useState, useCallback } from 'react';
import { CarForm } from './CarForm';
import { CarTable } from './CarTable';
import { ToolHeader } from './ToolHeader';

// CarTool provides the car data (keep the state) and is the parent component of the whole Car thing,
// calling CarTable and CarForm to display them
export const CarTool = () => {
const [cars, setCars] = useState([
  {id:1, make: 'make1', model: 'model1', year: 2024, color: 'red', price: 50000},
  {id:2, make: 'make2', model: 'model2', year: 2024, color: 'blue', price: 50000},
])

  const addCar = useCallback(newCar => {
    setCars([
      ...cars,
      {
        ...newCar,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      }
    ])
  }, [cars])

  const deleteCar = useCallback((carId) => {
    setCars(cars.filter(c => c.id !== carId));
  }, [cars]);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} onDeleteCar={deleteCar}/>
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
    </>
  );
};