import PropTypes from 'prop-types';
import { useCallback } from 'react';

import { useForm } from '../hooks/useForm';

// CarForm provides a form for user to type in new car
export const CarForm = (props) => {
  const [carForm, change, resetCarForm] = useForm({make: '', model: '', year: '', color: '', price: ''});

  const submitCar = useCallback(() => {
    props.onSubmitCar({...carForm});

    resetCarForm({make: '', model: '', year: '', color: '', price: ''});
  }, [props, carForm, resetCarForm])

  return (
    <form>
      <label>
        Make
        <input type="text" name="make" value={carForm.make} onChange={change} />
      </label><br/>
      <label>
        Model
        <input type="text" name="model" value={carForm.model} onChange={change} />
      </label><br/>
      <label>
        Year
        <input type="number" name="year" value={carForm.year} onChange={change} />
      </label><br/>
      <label>
        Color
        <input type="text" name="color" value={carForm.color} onChange={change} />
      </label>
      <label><br/>
        Price
        <input type="number" name="price" value={carForm.price} onChange={change} />
      </label>
      <button type="button" onClick={submitCar}>{props.buttonText}</button>
    </form>
  );
}

CarForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitCar: PropTypes.func.isRequired,
};