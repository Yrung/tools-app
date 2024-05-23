import PropTypes from 'prop-types';
import { useCallback } from 'react';

import { useForm } from '../hooks/useForm';

const defaultProps = {
  buttonText: 'Submit Color',
}

// this component is just to provide text fields for user to type in a new color and its hexcode
// the user-input values will update the 'color' state of ColorTool (bc addColor() is passed down and run on form submit), 
// in ColorTool, the 'color' state is then passed down to ColorList to be displayed
export const ColorForm = (props = defaultProps) => {

  const [ colorForm, change, resetColorForm ] = useForm({ name: '', hexcode: '' });

  const { onSubmitColor } = props;

  // only assign the new function created on this render
  // if one of these dependencies [onSubmitColor, colorForm, resetColorForm]
  // has changed, if no dependencies have changed, use the
  // previously remembered callback function
  const submitColor = useCallback(() => {
    // call the onSubmitColor prop, which is some func (e.g. addColor) defined in the parent component and passed down to ColorForm
    onSubmitColor({ ...colorForm });
    // ths will blank out the form
    resetColorForm({ name: '', hexcode: '' });
  }, [onSubmitColor, colorForm, resetColorForm]);

  return (
    <form>
      <label>
        Name
        <input type="text" name="name" value={colorForm.name} onChange={change} />
      </label>
      <label>
        Hexcode
        <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
      </label>
      <button type="button" onClick={submitColor}>{props.buttonText}</button>
    </form>
  );
};

ColorForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitColor: PropTypes.func.isRequired,
};

// ---------------------- BELOW IS THE LONG VERSION OF ABOVE ---------------------------- //

// import PropTypes from 'prop-types';
// import { useState, useCallback } from 'react';

// export const ColorForm = (props) => {

//   // initializes the form for the first render
//   const initialForm = { name: '', hexcode: '' };

//   // colorForm is a tuple [state data, state update func]
//   const colorFormState = useState(initialForm);
//   const colorForm = colorFormState[0];  // state data (first element of the tuple)
//   const setColorForm = colorFormState[1]; // state update func (second element of the tuple)

//   // for event handlers in a compoennt, always wrap them in useCallback
//   const change = useCallback((e) => {

//     // assign "inputElement" as a reference to *the input DOM object the user was typing into*
//     // the target property returns the element where the event e occured
//     // for this form, the target will either be the Name or Hexcode input field
//     const inputElement = e.target;

//     const inputType = inputElement.type; // for this form, the value will be only "text"
//     const inputName = inputElement.name; // for this form, the value will be either "name" or "hexcode"
//     const inputValue = inputElement.value; // for this form, this will be the value typed into the field by the user

//     // to update the colorForm, we need to create a copy of the colorForm object
//     const newColorForm = {
//       name: colorForm.name,
//       hexcode: colorForm.hexcode,
//     };

//     // update the field with the new value typed by the user
//     // inputName is the name of the property of the form object to be updated
//     // inputType is from the form control so we can set a number if a numeric field, string otherwise
//     // inputValue is the value typed by the user
//     newColorForm[inputName] = inputType === "number" ? inputElement.valueAsNumber : inputValue;

//     // update the state, which will trigger a re-render
//     // re-render means the ColorForm func will invoked again, and the new state will update the UI
//     setColorForm(newColorForm);

//   }, [colorForm, setColorForm]);

//   console.log("re-rendering bc state changed", colorForm);

//   return (
//     <form>
//       <label>
//         Name
//         <input type="text" name="name" value={colorForm.name} onChange={change} />
//       </label>
//       <label>
//         Hexcode
//         <input type="text" name="hexcode" value={colorForm.hexCode} onChange={change} />
//       </label>
//       <button type="button">{props.buttonText}</button>
//     </form>
//   );
// };

// ColorForm.defaultProps = {
//   buttonText: 'Submit Color',
// };

// ColorForm.propTypes = {
//   buttonText: PropTypes.string.isRequired,
// };
