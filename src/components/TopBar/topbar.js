import './TopBar.css';
import { Link } from 'react-router-dom';


function TopBar() {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/carousel">Carousel</Link>
      </div>
    </div>
  );
}

export default TopBar;
