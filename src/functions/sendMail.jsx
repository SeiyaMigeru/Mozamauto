import axios from 'axios';

const BASE_URL = ""


export async function sendContactUsForm(email) {
  try {
    // Uncomment the line below if you want to send the email using axios
    var result = await axios.post( BASE_URL + '/contactUsMail', email);

    

    return result;

 
  } catch (error) {
    // Reject the promise with the error message
    throw error;
  }
}

export async function sendOrderForm(email) {
  try {
    // Uncomment the line below if you want to send the email using axios
    var result = await axios.post( BASE_URL + '/order', email);

    

    return result;

 
  } catch (error) {
    // Reject the promise with the error message
    throw error;
  }
}

export async function sendSuggestionForm(email) {
  try {
    // Uncomment the line below if you want to send the email using axios
    var result = await axios.post( BASE_URL + '/suggestion', email);

    

    return result;

 
  } catch (error) {
    // Reject the promise with the error message
    throw error;
  }
}

export async function sendAppointmentForm(email) {
  try {
    // Uncomment the line below if you want to send the email using axios
    var result = await axios.post( BASE_URL + '/setAppointment', email);

    

    return result;

 
  } catch (error) {
    // Reject the promise with the error message
    throw error;
  }
}

export async function getAppointments() {
  try {
    // Uncomment the line below if you want to send the email using axios
    var result = await axios.get( BASE_URL + '/getAppointments');

    

    return result;

 
  } catch (error) {
    // Reject the promise with the error message
    throw error;
  }
}