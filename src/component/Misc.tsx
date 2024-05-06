import React, { MouseEventHandler } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useLocation } from 'react-router-dom';

interface MiscProps {
    toggleTheme: MouseEventHandler<HTMLButtonElement>; // Define the type for toggleTheme
    theme: string;
  }
  
const Misc: React.FC<MiscProps> = ({ toggleTheme, theme }) => {
  const location = useLocation();

  if (location.pathname === '/SignIn') {
    return null; // Don't render anything if the path is /signIn
  }

  return (
    <div className='flex py-[19px] font-dmsans'>
        <div className="search">
            <input type="search" placeholder="Search" className='w-[50%]'/>
        </div>
        <div>
            <button onClick={toggleTheme}>
            {theme === 'light' ? <DarkModeIcon fontSize="small"/> : <LightModeIcon fontSize="small"/>}
            </button>
        </div>
        <div className="user">
            <img src="user_avatar.png" alt="User Avatar"/>
        </div>
    </div>
  )
}

export default Misc