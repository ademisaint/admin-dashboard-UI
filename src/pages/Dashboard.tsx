import React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Piechart from '../component/Piechart';
import ComplexTable from '../component/ComplexTable';
import CheckTable from '../component/CheckTable';
import Calender from '../component/Calender';
import fire from '../assets/images/local_fire_department.png';
import timer from '../assets/images/timer.png';
import slowMotionVideo from'../assets/images/slow_motion_video.png'
import avatar1 from '../assets/images/Avatar 1.png'
import avatar2 from '../assets/images/Avatar 2.png'
import avatar3 from '../assets/images/Avatar 3.png'
import avatar4 from '../assets/images/Avatar 4.png'
import teamM1 from '../assets/images/teamM1.png'
import teamM2 from '../assets/images/teamM2.png'
import teamM3 from '../assets/images/teamM3.png'
import starbucksbg from '../assets/images/starbucks Background.png'
import starbucksLogo from '../assets/images/starbucks logo.png'


import { ResponsiveBar } from '@nivo/bar';

const Dashboard = () => {
    
    const data = {
        labels: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
        datasets: [
          {
            label: 'Total Spent',
            data: [19, 25, 5, 41, 26, 25], // Dummy data for the first line
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4
          },
          {
            label: 'Total Spent Last Year',
            data: [45, 49, 60, 71, 46, 45], // Dummy data for the second line
            fill: false,
            borderColor: 'rgb(153, 102, 255)',
            tension: 0.4
          }
        ]
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
        },
        scales: {
            x: {
                grid: {
                  display: false, 
                },
              },
          
          y: {
            beginAtZero: true,
            grid: {
                display: false, 
              },
          },
        },
      };

      const barData = [
        {
          day: "1",
          week: 17,
          month: 50,
          year: 75,
        },
        {
          day: "2",
          week: 20,
          month: 55,
          year: 80,
        },
        {
          day: "3",
          week: 19,
          month: 45,
          year: 70,
        },
        {
          day: "4",
          week: 15,
          month: 40,
          year: 65,
        },
        {
          day: "5",
          week: 17,
          month: 60,
          year: 85,
        },
        {
          day: "6",
          week: 19,
          month: 50,
          year: 75,
        },
        {
          day: "7",
          week: 21,
          month: 45,
          year: 70,
        }
      ];

      const columnData = [
        {
          profit: 4,
          start: "00"
        },
        {
          profit: 2,
          start: "04"
        },
        {
          profit: 6,
          start: "08"
        },
        {
          profit: 3,
          start: "12"
        },
        {
          profit: 5,
          start: "14"
        },
        {
          profit: 7,
          start: "16"
        },
        {
          profit: 1,
          start: "18"
        }
      ];

    const [tasks, setTasks] =  React.useState([
        'Landing Page Design',
        'Dashboard Builder',
        'Mobile App Design',
        'Illustrations',
        'Promotional LP',
    ])

    const dragItem = React.useRef<any>(null)

    const dragOverItem = React.useRef<any>(null)

    const handleSort = () => {
        let _tasks = [...tasks]

        const draggedItemContent = _tasks.splice(dragItem.current, 1)[0]

        _tasks.splice(dragOverItem.current, 0, draggedItemContent)

        dragItem.current = null
        dragOverItem.current = null

        setTasks(_tasks)
    }


  return (
    <div>

        <div className='flex justify-between'>

            <div className='small flex items-center rounded-[20px] bg-white px-[20px] py-[10px] w-[190px]'>
                <div className='flex items-center '>
                    <BarChartIcon htmlColor='#4318FF' fontSize='large' className='bg-[#F4F7FE] rounded-[20px]'/>
                </div>
                <div className='pl-[7.6px]'>
                    <p className='text-[12px] text-[hsl(225,32%,73%)]'>Earnings</p>
                    <h1 className='text-[#2B3674] font-bold text-[20px]'>$350.4</h1>
                </div>
            </div>

            <div className='small flex items-center rounded-[20px] bg-white px-[20px] py-[10px] w-[190px]'>
                <div className='flex items-center '>
                    <BarChartIcon htmlColor='#4318FF' fontSize='large' className='bg-[#F4F7FE] rounded-[20px]'/>
                </div>
                <div className='pl-[7.6px]'>
                    <p className='text-[12px] text-[#A3AED0]'>Spend this month</p>
                    <h1 className='text-[#2B3674] font-bold text-[20px]'>$642.39</h1>
                </div>
            </div>

            <div className='small flex items-center rounded-[20px] bg-white px-[20px] py-[10px] w-[190px]'>
                <div className='pl-[7.6px]'>
                    <p className='text-[12px] text-[#A3AED0]'>Sales</p>
                    <h2 className='text-[#2B3674] font-bold text-[20px]'>$574.34</h2>
                    <p className='text-[10px]'>+23% since last month</p>
                </div>
            </div>

            <div className='small flex items-center rounded-[20px] bg-white px-[20px] py-[10px] w-[190px]'>
                <div className='pl-[7.6px]'>
                    <p className='text-[12px] text-[#A3AED0]'>Your balance</p>
                    <h1 className='text-[#2B3674] font-bold text-[20px]'>$1,000</h1>
                </div>
                <div className='flex items-center '>
                    <BarChartIcon htmlColor='#4318FF' fontSize='large' className='bg-[#F4F7FE] rounded-[20px]'/>
                </div>
            </div>

            <div className='small flex items-center rounded-[20px] bg-white px-[20px] py-[10px] w-[190px]'>
                <div className='flex items-center '>
                    <BarChartIcon htmlColor='#4318FF' fontSize='large' className='bg-[#F4F7FE] rounded-[20px]'/>
                </div>
                <div className='pl-[7.6px]'>
                    <p className='text-[12px] text-[#A3AED0]'>New Tasks</p>
                    <h1 className='text-[#2B3674] font-bold text-[20px]'>154</h1>
                </div>
            </div>

            <div className='small flex items-center rounded-[20px] bg-white px-[20px] py-[10px] w-[190px]'>
                <div className='flex items-center '>
                    <BarChartIcon htmlColor='#4318FF' fontSize='large' className='bg-[#F4F7FE] rounded-[20px]'/>
                </div>
                <div className='pl-[7.6px]'>
                    <p className='text-[12px] text-[#A3AED0]'>Total Projects</p>
                    <h1 className='text-[#2B3674] font-bold text-[20px]'>2935</h1>
                </div>
            </div>
            
        </div>

        <div className='flex justify-between my-[20px]'>
            <div className='w-[50%] p-[25px] bg-white rounded-[20px] mr-[10px]'>
                <div className='flex justify-between'>
                    <p>This month</p>
                    <div>
                        <BarChartIcon htmlColor='#4318FF' className='bg-[#F4F7FE] rounded-[5px]'/>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='w-[20%]'>
                        <h1 className='font-bold text-[22px]'>$37.5K</h1>
                        <p>Total Spent <span>+2.45%</span></p>
                        <div>
                            <span className="indicator">• On track</span>
                        </div>
                    </div>
                    <div className='w-[80%]'><Line data={data} options={options} width={530} height={275}/></div>
                </div>
            </div>

            <div className='w-[50%] p-[25px] bg-white rounded-[20px] ml-[10px]'>
                <div className='flex justify-between'>
                    <p className='text-[20px] font-bold text-[#1B2559]'>Weekly Revenue</p>
                    <div>
                        <BarChartIcon htmlColor='#4318FF' className='bg-[#F4F7FE] rounded-[5px]'/>
                    </div>
                </div>

                <div className=''>
                    <div className='w-[500px] h-[202px]'>
                        <ResponsiveBar
                            data={barData}
                            keys={['week', 'month', 'year']} 
                            indexBy="day"
                            padding={0.7}
                            valueScale={{ type: "linear" }}
                            colors={['#4318FF', '#6AD2FF', '#EFF4FB']} //
                            borderColor="transparent"
                            groupMode="stacked"
                            animate={true}
                            enableLabel={false}
                            axisTop={null}
                            axisRight={null}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: "degrees",
                                legendPosition: "middle",
                                legendOffset: -40
                            }}
                            theme={{
                                grid: {
                                    line: {
                                        stroke: 'transparent', // Hide grid lines
                                    },
                                },
                            }}
                            // borderRadius={10}
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className='flex justify-between my-[20px] h-[100%]'>
            <div className='w-[50%] p-[20px] bg-white rounded-[20px] mr-[10px]'>
                <div className='flex justify-between pb-[15px] items-center'>
                    <h1 className='font-bold text-[20px] text-[#2B3674]'>Check Table</h1>
                    <div className='flex items-top text-[#4318FF] bg-[#F4F7FE] rounded-[7px]'><MoreHorizIcon/></div>
                </div>

                <div className="overflow-x-auto">
                    <CheckTable/>
                </div>
            </div>

            <div className='w-[50%] ml-[10px] flex h-[100%]'>
                <div className='bg-white rounded-[20px] w-[50%] mr-[10px] p-[20px]'>
                    <header className="card-header flex justify-between">
                        <h1 className='text-[14px] text-[#A3AED0] font-medium'>Daily Traffic</h1>
                        <span className="traffic-change text-[#05CD99] text-[12px] font-bold">+2.45%</span>
                    </header>
                    <div className="traffic-count flex">
                        <span className="count font-bold text-[34px]">2.579</span>
                        <span className="visitors text-[#A3AED0] text-[14px] font-medium flex items-center">Visitors</span>
                    </div>
                    <div className="bar-chart p-2 w-[100%] h-[70%]" >
                        <ResponsiveBar
                            data={columnData}
                            keys={["profit"]}
                            indexBy="start"
                            padding={0.6}
                            valueScale={{ type: "linear" }}
                            colors="#3182CE"
                            animate={true}
                            enableLabel={false}
                            labelSkipHeight={0}
                            labelTextColor="black"
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                              }}
                            axisLeft={{
                                tickSize: 5,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: "profit",
                                legendPosition: "end",
                                legendOffset: -40
                            }}
                            theme={{
                                grid: {
                                    line: {
                                        stroke: 'transparent', // Hide grid lines
                                    },
                                    
                                },
                                labels: {
                                    text: {
                                        fontSize: '12px',
                                        color: '#B0BBD5',
                                    }
                                },
                                axis: {
                                    // domain: {
                                    //     line: {
                                    //         stroke: '#B0BBD5', // Assuming colors.grey[500] resolves to '#B0BBD5'
                                    //     },
                                    // },
                                    ticks: {
                                        line: {
                                            stroke: '#E0E0E0', // Assuming colors.grey[100] resolves to '#E0E0E0'
                                            strokeWidth: 1,
                                        },
                                        text: {
                                            fill: '#E0E0E0', // Assuming colors.grey[100] resolves to '#E0E0E0', and changed 'color' to 'fill'
                                            fontSize: '12px', // Added 'fontSize' here to style the tick labels
                                        },
                                    },
                                }
                            }}

                        />
                    </div>
                </div>

                <div className='bg-white rounded-[20px] w-[50%] ml-[10px] p-[20px]'>
                    <header className='flex justify-between'>
                        <h1 className='text-[16px] text-[#2B3674] font-bold'>Your Pie Chart</h1>
                        <div>
                            <select className=' border-0 outline-none text-[#A3AED0] text-[12px] font-bold'>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>
                    </header>

                    <div className='h-[100%] p-4'>
                        <Piechart/>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='flex justify-between my-[20px]'>

            <div className='w-[50%] p-[20px] bg-white rounded-[20px] mr-[10px]'>
                <div className='flex justify-between pb-[15px] items-center'>
                    <h1 className='font-bold text-[20px] text-[#2B3674]'>Complex Table</h1>
                    <div className='flex items-top text-[#4318FF] bg-[#F4F7FE] rounded-[7px]'><MoreHorizIcon/></div>
                </div>
                <div>
                    <ComplexTable/>
                </div>
            </div>
            <div className='w-[50%] rounded-[20px] ml-[10px] flex'>
                <div className=' bg-white rounded-[20px] w-[50%] mr-[10px] p-[20px]'>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <div className=' items-center'><input type="checkbox" style={{background: '#F4F7FE', width: '14px', height: '14px'}} /></div>
                            <h1 className='text-[16px] text-[#2B3674] pt-[2px] pl-[20px] font-bold'>Tasks</h1>
                        </div>
                        <div>
                            <div className='flex items-top text-[#4318FF] bg-[#F4F7FE] rounded-[7px]'><MoreHorizIcon/></div>
                        </div>
                    </div>
                    <div className='pt-[20px]'>
                        { 
                            tasks.map ((item, index) => (
                                <div 
                                    key={index} 
                                    className='flex justify-between items-center h-[100%] py-[4px] cursor-move'
                                    draggable
                                    onDragStart={(e) => (dragItem.current = index)}
                                    onDragEnter={(e) => (dragOverItem.current = index)}
                                    onDragEnd={handleSort}
                                    onDragOver={(e) => e.preventDefault}
                                >
                                    <div className='flex items-center'>
                                        <input type="checkbox" style={{borderColor: '#A3AED0', borderWidth: '2px', borderRadius: '2px', width: '12px', height: '12px'}}/>
                                        <p className='text-[14px] font-medium pl-[15px] text-[#A3AED0]'>{item}</p>
                                    </div>
                                    <div className='text-[#B0BBD5]'><DragIndicatorIcon/></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className=' bg-white rounded-[20px] w-[50%] ml-[10px] p-[20px]'>
                        <div>
                           <Calender/>
                        </div>
                </div>
            </div>

        </div>

        <div className='flex justify-between my-[20px]'>
            <div className='w-[50%] mr-[10px] flex'>
                <div className='w-[50%] mr-[5px] bg-white rounded-[20px] p-[20px]'>
                    <div className="lesson-header flex items-center pb-[20px] pt-[5px]">
                        <div className="lesson-header-icon p-[10px] bg-[#FEEFEE] rounded-[15px]">
                            <img src={fire} alt="fire-image" />
                        </div>
                        <div className='pl-[10px]'>
                            <p className='text-[#A3AED0] text-[12px] font-bold'>Business Design</p>
                            <h1 className='text-[#2B3674] text-[16px] font-bold'>New lesson is available</h1>
                        </div>
                    </div>
                    <div className="lesson-title font-bold text-[20px] text-[#2B3674] pt-[20px]">
                        What do you need to know to create better products?
                    </div>
                    <div className="lesson-info flex pt-[30px]">
                        <div className='flex items-center pr-[12px]'>
                            <div className="lesson-info-icon">
                                <img src={timer} alt="timer-icon" />
                            </div>
                            <div className='text-[14px] text-[#2B3674] font-bold px-[5px]'>85 mins</div>
                        </div>
                        <div className='flex items-center pl-[12px]'>
                            <div className="lesson-info-icon">
                                <img src={slowMotionVideo} alt="motion-vi" />
                            </div>
                            <div className='text-[14px] text-[#2B3674] font-bold px-[5px]'>Video format</div>
                        </div>
                    </div>
                    <div className="lesson-footer flex items-center justify-between pt-7 pb-2">
                        <div className="lesson-age-restriction flex">
                            <div className='flex'>
                                <div className=''><img src={avatar1} alt="avatar-1" width={34} height={34}/></div>
                                <div className='ml-[-15px]'><img src={avatar2} alt="avatar-2" /></div>
                                <div className='ml-[-15px]'><img src={avatar3} alt="avatar-3" /></div>
                                <div className='ml-[-15px]'><img src={avatar4} alt="avatar-4" /></div>
                                <div className='ml-[-15px] border-white border-[3px] p-[5] bg-[#E0E5F2] rounded-full flex items-center w-[34px] h-[34px] text-[#4318FF] font-bold text-[9px] justify-center'>18+</div>
                            </div>
                            
                        </div>
                        <button className="get-started-btn text-[white] text-[14px] font-bold px-[20px] py-[10px] bg-[#4318FF] rounded-[16px]">Get Started</button>
                    </div>
                </div>

                <div className='w-[50%] ml-[5px] bg-white rounded-[20px] p-[20px]'>
                    <div className='flex justify-between items-center pb-[10px] pt-[5px]'>
                        <h1 className='text-[#2B3674] text-[16px] font-bold'>Team members</h1>
                        <div className='bg-[#F4F7FE] text-[#4318FF] w-[37px] h-[37px] rounded-[10px] flex items-center justify-center'><AddCircleIcon/></div>
                    </div>
                    <div className='pt-[20px] flex-col'>
                        <div className='flex justify-between items-center p-2 rounded-[16px] shadow-sm mb-[7px]'>
                            <div className='flex'>
                                <img src={teamM1} alt="avatar1" />
                                <div>
                                    <h1 className='font-bold text-[16px] text-[#2B3674]'>Adela Parkson</h1>
                                    <p className='text-[#A3AED0] text-[12px] font-medium'>Creative Director</p>
                                </div>
                            </div>
                            <div className='text-[#A3AED0]'><MoreVertIcon/></div>
                        </div>
                        <div className='flex justify-between items-center p-2 rounded-[16px] shadow-sm mb-[7px]'>
                            <div className='flex'>
                                <img src={teamM2} alt="avatar2" />
                                <div>
                                    <h1 className='font-bold text-[16px] text-[#2B3674]'>Christian Mad</h1>
                                    <p className='text-[#A3AED0] text-[12px] font-medium'>Product Designer</p>
                                </div>
                            </div>
                            <div className='text-[#A3AED0]'><MoreVertIcon/></div>
                        </div>
                        <div className='flex justify-between items-center p-2 rounded-[16px] shadow-sm'>
                            <div className='flex'>
                                <img src={teamM3} alt="avatar3" />
                                <div>
                                    <h1 className='font-bold text-[16px] text-[#2B3674]'>Jason Statham</h1>
                                    <p className='text-[#A3AED0] text-[12px] font-medium'>Junior Graphic Designer</p>
                                </div>
                            </div>
                            <div className='text-[#A3AED0]'><MoreVertIcon/></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[50%] ml-[10px] flex'>
                <div className='w-[50%] mr-[5px] bg-white rounded-[20px] p-[20px]'>
                    <div className='w-[91px] h-[91px] text-[#4318FF]'><FingerprintIcon sx={{ fontSize: 90 }}/></div>
                    <div className='py-[20px]'>
                        <h1 className='text-[24px] font-bold text-[#2B3674]'>Control card security in-app with a tap</h1>
                        <p className='text-[14px] font-medium text-[#A3AED0] py-[10px]'>Discover our cards benefits with one tap.</p>
                    </div>
                    <div className=''>
                        <button className='bg-[#4318FF] rounded-[16px] text-white w-[100%] py-[7px]'>Cards</button>
                    </div>
                </div>

                <div className='w-[50%] ml-[5px] bg-white rounded-[20px] p-[20px]'>
                    <div>
                        <img src={starbucksbg} alt="starbucks-bg" />
                    </div>
                    <div className='mt-[-30px] w-[60px] h-[60px] p-1 ml-2'>
                        <img src={starbucksLogo} alt="logo" />
                    </div>
                    <div className='pt-[20px]'>
                        <h1 className='font-bold text-[24px] text-[#2B3674]'>Starbucks</h1>
                        <p className='text-[#A3AED0] flex items-center pt-[10px]'><FastfoodIcon/> <span className='text-[18px] font-medium pl-[5px] flex items-center'> 10% cashback & off</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard