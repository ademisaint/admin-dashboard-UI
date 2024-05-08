import React from 'react';
import SideBar from './component/SideBar';
import Title from './component/Title';
import Misc from './component/Misc';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  theme: string; // Assuming theme is a string
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, theme, toggleTheme }) => {
    const location = useLocation();
    
  return (
    <div data-theme={theme} className="flex">
      <div className={`w-${location.pathname !== "/SignIn" ? '[15%]' : '[0%]'}`}>
        <div className='SideBar fixed'><SideBar/></div>
      </div>
      <div className={`w-${location.pathname !== "/SignIn" ? '[85%]' : '[100%]'} py-${location.pathname !== "/SignIn" ? '[30px]' : '[0px]'} px-${location.pathname !== "/SignIn" ? '[20px]' : '[0px]'}`}>
        <div className='flex justify-between'>
          <Title/>
          <Misc toggleTheme={toggleTheme} theme={theme} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;