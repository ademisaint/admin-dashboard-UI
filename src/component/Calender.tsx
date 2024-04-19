import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../index.css'


const Calender = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate: any) => {
    setDate(newDate);
  };

  return (
    <div className='w-[100%]'>
      <div className='app'>
        <div className='calendar-container'>
          <Calendar
            onChange={handleDateChange}
            value={date}
            selectRange={true}
          />
        </div>
        {/* Check if date has length property, which array has */}
        {/* {Array.isArray(date) && date.length === 2 ? (
          <p className='text-center'>
            <span className='font-bold'>Start:</span>{' '}
            {date[0].toDateString()}
            &nbsp;|&nbsp;
            <span className='font-bold'>End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p className='text-center'>
            <span className='font-bold'>Selected date:</span>{' '}
            {date.toDateString()}
          </p>
        )} */}
      </div>
    </div>
  )
}

export default Calender;
