import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const SideBar = () => {
  return (
    <div>
    <div className=' p-[30px]'>
      <h1 className=" text-[22px] font-bold font-poppins flex justify-center py-[26px]">
        HORIZON <span className="font-medium"> FREE </span>
      </h1>
      <div className='pages font-dmsans py-[40px]'>
        <div className='flex items-center py-[10px]'>
          <HomeIcon fontSize="small"/>
          <p className='text-[16px] pl-[15px]'>Dashboard</p>
        </div>
        <div className='flex items-center py-[10px]'>
          <ShoppingCartIcon fontSize="small"/>
          <p className='text-[16px] pl-[15px]'>NFT Marketplace</p>
        </div>
        <div className='flex items-center py-[10px]'>
          <BarChartIcon fontSize="small"/>
          <p className='text-[16px] pl-[15px]'>Tables</p>
        </div>
        <div className='flex items-center py-[10px]'>
          <DashboardIcon fontSize="small"/>
          <p className='text-[16px] pl-[15px]'>Kanban</p>
        </div>
        <div className='flex items-center py-[10px]'>
          <PersonIcon fontSize="small"/>
          <p className='text-[16px] pl-[15px]'>Profile</p>
        </div>
        <div className='flex items-center py-[10px]'>
          <LockIcon fontSize="small"/>
          <p className='text-[16px] pl-[15px]'>Sign In</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SideBar