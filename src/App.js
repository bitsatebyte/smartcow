import './App.css';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';
import Input from './components/Input/Input';
import BoxContainer from './components/BoxContainer/BoxContainer';

function App() {
  return (
    <div>
      <TopBar />
      <SideBar />
      <Input />
      <BoxContainer str="hello" />
    </div>
  );
}

export default App;
