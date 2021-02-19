import './TopBar.css';


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
        <a href="//github.com/bitsatebyte" target="_blank" rel="noreferrer">Github</a>
        <a href="https://in.linkedin.com/in/hariveturi" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

export default TopBar;
