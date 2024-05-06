
import React from 'react';
import { useLocation } from 'react-router-dom';

// type pageNames = {
//   [key: string]: string;
// };

const Title = () => {
  const location = useLocation();

  if (location.pathname === '/SignIn') {
    return null; // Don't render anything if the path is /signIn
  }

  const pageNames: { [key: string]: string } = {
    '/': 'Main Dashboard', // Add more route paths and their corresponding page names
    '/Dashboard': 'Main Dashboard',
    '/MarketPlace': 'NFT Marketplace',
    '/Tables': 'Tables',
    '/Kanban': 'Kanban',
    '/Profile': 'Profile',
    '/SignIn': 'Sign In',
  };
  const currentPageName = pageNames[location.pathname] || 'Unknown Page';
  console.log(location)

  return (
    <div className='py-[19px] px-[5px] font-dmsans'>
      <p className='route font-medium text-[14px]'>Pages{location.pathname !== '/' ? location.pathname : ''}</p>
      <h1 className='routeName font-bold text-[34px] font-dmsans'>{currentPageName}</h1>
    </div>
  )
}

export default Title
