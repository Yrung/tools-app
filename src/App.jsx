import { Outlet, Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className='container'>
      <header id="page-header">
        <h1>Tools App</h1>
      </header>
      <nav id="main-menu">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/color-tool'>Color Tool</Link></li>
          <li><Link to='/calc-tool'>Calc Tool</Link></li>
          <li><Link to='/car-tool'>Car Tool</Link></li>
        </ul>
      </nav>
      <main id="content">
        <Outlet />  {/* <Outlet/> will be replaced by some component, based on the children path you gave in main.jsx */}
      </main>
      <aside id="sidebar">
        Sidebar
      </aside>
      <footer id="page-footer">
        <small>
          &copy; {new Date().getFullYear()} A Cool Company LLC
        </small>
      </footer>
    </div>
  );
}

export default App
