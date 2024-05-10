
// import React from 'react'
// import './index.css';
// import SideBar from './component/SideBar';
// import useLocalStorage from 'use-local-storage';
// import Misc from './component/Misc';
// import Title from './component/Title';
// import Dashboard from './pages/Dashboard';
// import MarketPlace from './pages/MarketPlace';
// import Tables from './pages/Tables';
// import Kanban from './pages/Kanban';
// import Profile from './pages/Profile';
// import SignIn from './pages/SignIn';
// import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from "react-router-dom";

// function App() {
//   const [theme, setTheme] = useLocalStorage<string>('theme', 'dark');

//   const toggleTheme = () => {
//     const newTheme = (theme === 'dark' ? 'light' : 'dark');
//     setTheme(newTheme)
//   }

//   console.log(theme)

//   return (
//     <Router>
//       <div data-theme={theme} className="flex">
//         <div className='w-[15%]'>
//           <div className='SideBar fixed'><SideBar/></div>
//         </div>
//         <div className='w-[85%] py-[30px] px-[20px]'>
//           <div className='flex justify-between'>
//             <Title/>
//             <Misc toggleTheme={toggleTheme} theme={theme} />
//           </div>
//           <div>
//             <Routes>
//               <Route index element={<Dashboard />} />
//               <Route path="/Dashboard" element={<Dashboard />} /> 
//               <Route path="/MarketPlace" element={<MarketPlace />} /> 
//               <Route path="/Tables" element={<Tables/>}/> 
//               <Route path="/Kanban" element={<Kanban/>}/> 
//               <Route path="/Profile" element={<Profile/>}/> 
//               <Route path="/SignIn" element={<SignIn/>}/> 
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import MarketPlace from './pages/MarketPlace';
import Tables from './pages/Tables';
import Kanban from './pages/Kanban';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import useLocalStorage from 'use-local-storage';

function App() {
  const [theme, setTheme] = useLocalStorage<string>('theme', 'dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : '';
  }, [theme]);

  return (
    <Router>
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/MarketPlace" element={<MarketPlace />} />
          <Route path="/Tables" element={<Tables />} />
          <Route path="/Kanban" element={<Kanban />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;