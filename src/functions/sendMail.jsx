import axios from 'axios';

const BASE_URL = "http://localhost:3000"


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