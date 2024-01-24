import axios from 'axios';


export async function sendContactUsForm(email) {
  try {
    // Uncomment the line below if you want to send the email using axios
    var result = await axios.post('/contactUsMail', email);

    

    return result;

 
  } catch (error) {
    // Reject the promise with the error message
    throw error;
  }
}