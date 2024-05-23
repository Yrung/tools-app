import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from './store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';
import { CalcTool } from './components/CalcTool';

const router = createBrowserRouter([
  {
    path: '/',    // root page will show <App />
    element: <App />,
    children: [   // children of the root page
      { path: '', index: true, element: <div>Home</div>},   // http://localhost:5173/ -> Home
      { path: 'color-tool', element: <ColorTool /> },   // http://localhost:5173/color-tool -> ColorTool
      { path: 'car-tool', element: <CarTool /> },   // http://localhost:5173/car-tool -> CarTool
      { path: 'calc-tool', element: <CalcTool /> },   // http://localhost:5173/calc-tool -> CalcTool
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  {/* give the React app access to redux store */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
