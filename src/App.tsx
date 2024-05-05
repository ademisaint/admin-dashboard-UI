import React from 'react'
import './index.css';
import SideBar from './component/SideBar';
import useLocalStorage from 'use-local-storage';
import Misc from './component/Misc';
import Title from './component/Title';
import Dashboard from './pages/Dashboard';
import MarketPlace from './pages/MarketPlace';
import Tables from './pages/Tables';
import Kanban from './pages/Kanban';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter} from "react-router-dom";
import { useLocation } from 'react-router-dom';

interface AppContentProps {
  toggleTheme: () => void; // Assuming toggleTheme does not take any argument
  theme: string;            // Assuming theme is a string
}

function App() {
  const [theme, setTheme] = useLocalStorage<string>('theme', 'dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <Router>
      <AppContent toggleTheme={toggleTheme} theme={theme} />
    </Router>
  );
}

const AppContent: React.FC<AppContentProps> = ({ toggleTheme, theme }) => {
  const location = useLocation();

  return (
    <div data-theme={theme} className="flex">
      {location.pathname !== "/SignIn" && (
        <div className='w-[15%]'>
          <SideBar />
        </div>
      )}
      <div className={`w-${location.pathname !== "/SignIn" ? '[85%]' : '[100%]'} py-${location.pathname !== "/SignIn" ? '[30px]' : '[0px]'} px-${location.pathname !== "/SignIn" ? '[20px]' : '[0px]'}`}>
        <div className='flex justify-between'>
          {location.pathname !== "/SignIn" && <Title />}
          {/* <Misc toggleTheme={toggleTheme} theme={theme} /> */}
          {location.pathname !== "/SignIn" && <Misc toggleTheme={toggleTheme} theme={theme} />}
        </div>
        <Routes>
          <Route path="/" element={<Dashboard theme={theme} />} />
          <Route path="/Dashboard" element={<Dashboard theme={theme}/>} />
          <Route path="/MarketPlace" element={<MarketPlace />} />
          <Route path="/Tables" element={<Tables />} />
          <Route path="/Kanban" element={<Kanban />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
