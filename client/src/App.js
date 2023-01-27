import './App.css';
// import './normal.css';

import SideBar from './components/SideBar';
import ChatBox from './components/ChatBox';

function App() {
  return (
    <div className=" flex h-screen">
      <SideBar />
      <ChatBox />
    </div>
  );
}

export default App;
