import './SideBar.css';

const toggleClass = () => {
  const el = document.getElementsByClassName('main');
  const secondEl = document.getElementsByClassName('toggleBoxMargin');
  el[0] ? el[0].className = 'toggleBoxMargin' : secondEl[0].className = 'main';
}

function SideBar() {
  return (
    <div className="sideBarMain">
      <input type="checkbox" className="openSideBar" id="openSideBarMenu" />
      <label htmlFor="openSideBarMenu" className="sideBarToggle">
        <div className="fas" onClick={toggleClass}>
          close
        </div>
      </label>
      <div id="sideBarMenu">
        <div className="sidebar">
        </div>
      </div>
    </div>
  );
}

export default SideBar;
