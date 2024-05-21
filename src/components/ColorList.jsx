import PropTypes from 'prop-types';

export const ColorList = (props) => {
  return (
    <ul>
      {props.colors.map(color => <li key={color.id}>
        {color.name} - {color.hexcode}
      </li>)}
    </ul>
  );
};

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    hexcode: PropTypes.string.isRequired,
  })),
};