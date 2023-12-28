import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className=' items-center flex flex-col gap-2'>
      <h1 className=' text-sm font-sans font-medium'>Select a Date</h1>
      <DatePicker
        className='outline outline-1 focus:outline-2 focus:outline-stone-500 outline-stone-200 pl-8 rounded-md'
        showIcon
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        isClearable
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
};

export default MyDatePicker;
