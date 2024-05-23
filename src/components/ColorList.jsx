import PropTypes from 'prop-types';

export const ColorList = (props) => {

  return (
    <ul>
      {props.colors.map(color => <li key={color.id}>
        {color.name} - {color.hexcode}
        <button type="button"
          onClick={() => props.onDeleteColor(color.id)}>X</button>
      </li>)}
    </ul>
  );

};

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    hexcode: PropTypes.string.isRequired,
  })),
  onDeleteColor: PropTypes.func.isRequired,
};