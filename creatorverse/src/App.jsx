// App.jsx
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <div className="background-image"></div>
      <div className="content">
        <div className="big-text">Creatoverse</div>
        <div className="button-container">
          <a href="/add-creators" className="button add-button">
            <span className="button-icon">+</span> Add Creators
          </a>
          <a href="/show-creators" className="button show-button">
            <span className="button-icon">&#128269;</span> Show Creators
          </a>
        </div>
        <div className="section">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
