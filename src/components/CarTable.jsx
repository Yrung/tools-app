import PropTypes from 'prop-types';

// CarTable 
export const CarTable = (props) => {
  return (
    <table>
      <tbody>
      <tr>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
      </tr>
      {props.cars.map(car => 
        <tr key={car.id}>
          <th>{car.make}</th>
          <th>{car.model}</th>
          <th>{car.year}</th>
          <th>{car.color}</th>
          <th>{car.price}</th>
        </tr>
      )}
      </tbody>
    </table>
  )
}

CarTable.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })),
};