import {useState, useCallback } from 'react';

export const useForm = (initialForm) => {

  const [form, setForm] = useState(initialForm);

  const change = useCallback((e) => {
    // object destructuring. see comments in long version below for explanation of javascript's e.target
    const { type, name, value, valueAsNumber} = e.target;

    setForm({
      ...form, // object spread operator. it will copy the properties from colorForm object to newColorForm object
      [name]: type === "number" ? valueAsNumber : value,  // [name] is the field that the user typed into. assign that field's value to the new value
    });
  }, [form]);

  const resetForm = () => setForm(initialForm);

  // we're using the array as a tuple
  return [ form, change, resetForm ];

};