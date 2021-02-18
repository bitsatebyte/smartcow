import './SideBar.css';
// import 'bootstrap/dist/css/bootstrap.css';


function SideBar() {
  return (
    <div>
      <input type="checkbox" className="openSideBar" id ="openSideBarMenu" />
      <label htmlFor="openSideBarMenu" className="sideBarToggle">
        <div className="fas">close</div> 
      </label>
      <div id="sideBarMenu">
        <div className="sidebar">
          <h1>SideBar</h1>
        </div>
      </div>
    </div>
 );
}

export default SideBar;
