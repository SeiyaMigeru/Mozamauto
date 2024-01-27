import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const disabledDates = [new Date('2024-01-26'), new Date('2024-02-10')];
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      inline 
      excludeDates={disabledDates}
    />
    </div>

  );
};

export default MyDatePicker;
