# Exercise 1

## Instructions

### Part A

1. In the same project, create three files: `CarTool.jsx`, `CarForm.jsx`, and `CarTable.jsx`.

2. Define an array of 2 cars in the `CarTool` component. Each car should have an id, make, model, year, color, and price.

3. Pass the array of cars to the `CarTable` component. The `CarTable` component should display the cars in an HTML table.

4. Define a form in the `CarForm` component with input fields for make, model, year, color, and price. The form should have a submit button, and use the `useForm` hook to help capture form data. When the form is submitted, add the car to the array of cars and update the table.

### Part B

1. Add a button to each row in the `CarTable` component. When the button is clicked, remove the car from the array of cars and update the table of cars.

2. Add a button to each list item of the `ColorList` component. When the button is clicked, delete the color from the list and update the unordered list.