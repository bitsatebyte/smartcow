import './SideBar.css';
// import 'bootstrap/dist/css/bootstrap.css';


function SideBar() {
  return (
    <div className="sideBarMain">
      <input type="checkbox" className="openSideBar" id="openSideBarMenu" />
      <label htmlFor="openSideBarMenu" className="sideBarToggle">
        <div className="fas">
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
