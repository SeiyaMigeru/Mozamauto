import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getAppointments } from '../functions/sendMail';

const MyDatePicker = ({setChosenDate}) => {

  const [disabledDates, setDisabledDates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    retrieveAppointments();
  }, []);


  async function retrieveAppointments() {
    const appointments_response = await getAppointments();

    if (appointments_response.data.message === "success") {
      setIsLoading(false);

      var toDisable = [];
      appointments_response.data.events.map((date) => {
        toDisable.push(new Date(date));
      })
      setDisabledDates(toDisable);
    }

    
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {isLoading ? <div className="border-t-4 border-blue-500 border-solid rounded-full h-12 w-12 animate-spin"></div> :
      <DatePicker
      onChange={(date) => {
        setChosenDate(date);
      }}
      onMonthChange={(date) => {
        setChosenDate(date);
      }}
      inline 
      excludeDates={disabledDates}
    />
      
      }
    
    </div>

  );
};

export default MyDatePicker;
