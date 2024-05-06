import React from 'react'
import google from '../assets/images/search.png'
import horizonUI from '../assets/images/horizonUI.png'
// import { useLocation } from 'react-router-dom'


const SignIn = () => {
  // const location = useLocation();

  // if (location.pathname === '/signIn') {
  //   return null; // Don't render anything if the path is /signIn
  // }

  return (
    <div className='flex justify-end bg-white font-dmsans'>
      <div className='w-[50%] flex justify-around p-[30px]'>
        <div className='flex flex-col justify-between'>
          <p className='text-[#A3AED0] text-[12px] font-medium'><a href="../Dashboard">Back to Dashboard</a></p>
          <div className=''>
            <div>
              <h1 className='text-[32px] text-[#2B3674] font-bold'>Sign In</h1>
              <p className='text-[14px] font-light text-[#A3AED0] py-[4px]'>Enter your email and password to sign in!</p>
              <button className='flex items-center bg-[#F4F7FE] w-[100%] justify-center rounded-[12px] py-[10px] text-[14px] my-4'><img src={google} alt="" className=' w-4 h-4 mx-[8px]' />Sign in with Google</button>
            </div>
            <div className="my-[10px] mx-[0px] text-center w-[100%]">or</div>
            <div className='form'>
              <div>
                <p className=' text-[14px] text-[#2B3674] font-medium'>Email<span className='text-[#4318FF]'>&#42;</span></p>
                <input 
                  type="text" 
                  placeholder='mail@sample.com'
                  className='rounded-[12px] border-[#dee3f0] w-[350px] px-6 my-3 text-[14px]'
                />
              </div>
              <div>
                <p className=' text-[14px] text-[#2B3674] font-medium'>Password<span className='text-[#4318FF]'>&#42;</span></p>
                <input 
                  type="text" 
                  placeholder='min. 8 characters'
                  className='rounded-[12px] border-[#dee3f0] w-[350px] px-6 my-3 text-[14px]'
                />
              </div>
            </div>
            <div className='flex justify-between my-3'>
              <div className='flex items-center'>
                <input type="checkbox"  className='rounded-[3px] border-[#4318FF] w-3 h-3 ' />
                <p className='text-[#2B3674] text-[12px] font-normal pl-[10px]'>Keep me logged in</p>
              </div>
              <a href="#" className='text-[#4318FF] font-medium text-[14px]'>Forgot Password?</a>
            </div>
            <button className='bg-[#4318FF] text-[white] text-[12px] font-bold w-[100%] py-[10px] rounded-[16px] my-3'>Sign In</button>
            <div>
              <p className='text-[12px] text-[#2B3674]'>Not registered yet? <a href="#" className='text-[#4318FF] font-bold'>Create and Account</a></p>
            </div>
          </div>
          <p className='text-[#A3AED0] text-[12px] font-medium'>2022 Horizon UI. All Rights Reserved. Made with love by <span className='font-bold'>Simmmple</span></p>
        </div>
      </div>
      <div className='signIn w-[45%] p-[30px] flex flex-col justify-between'>
        <div className='flex flex-col items-center justify-around my-[100px]'>
          <img src={horizonUI} alt="horizon-ui" className='w-[200px] h-[200px]'/>
          <p className='text-white text-[40px] font-medium py-4 flex items-center'>H <img src={horizonUI} alt="" className='w-[25px] h-[25px] mb-[-2px]' /> rizon <span className='border border-white text-[20px] font-semibold rounded-[5px] px-[5px]'> UI </span></p>
          <div className='border border-[#8990f9] text-white flex flex-col items-center px-[50px] py-[20px] rounded-[10px]'>
            <p className='text-[12px] font-medium'>Learn more about Horizon UI on </p>
            <h1 className='text-[20px] font-bold'>horizon-ui.com</h1>
          </div>
        </div>
        <div className='flex justify-around px-[150px]'>
          <p className='text-white text-[12px] font-medium'><a href="#">Marketplace</a></p>
          <p className='text-white text-[12px] font-medium'><a href="#">License</a></p>
          <p className='text-white text-[12px] font-medium'><a href="#">Terms of Use</a></p>
          <p className='text-white text-[12px] font-medium'><a href="#">Blog</a></p>
        </div>
      </div>
    </div>
  )
}

export default SignIn