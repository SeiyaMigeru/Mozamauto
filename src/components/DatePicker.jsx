import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      inline 
    />
    </div>

  );
};

export default MyDatePicker;
