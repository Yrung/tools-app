import PropTypes from 'prop-types';

export const Hello = (props) => {
  return (
    <h1>hello, {props.subject}!</h1>
  );
};

Hello.propTypes = {
  subject: PropTypes.string.isRequired,
};