import React from 'react'
import './index.css';
import SideBar from './component/SideBar';
import useLocalStorage from 'use-local-storage';
import Misc from './component/Misc';
import Title from './component/Title';
import Dashboard from './pages/Dashboard';

function App() {
  const [theme, setTheme] = useLocalStorage<string>('theme', 'dark');

  const toggleTheme = () => {
    const newTheme = (theme === 'dark' ? 'light' : 'dark');
    setTheme(newTheme)
  }

  console.log(theme)

  return (
    <div data-theme={theme} className=" flex">
      <div className='w-[15%]'>
        <div className='SideBar'><SideBar/></div>
      </div>
      <div className='w-[85%] py-[30px] px-[20px]'>
        <div className='flex justify-between'>
          <Title/>
          <Misc toggleTheme={toggleTheme} theme={theme} />
        </div>
        <div>
          <Dashboard/>
        </div>
      </div>
    </div>
  );
}

export default App;
