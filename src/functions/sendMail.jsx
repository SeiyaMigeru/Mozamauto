import axios from 'axios';

export async function sendContactUsForm(email) {

  try {
    await axios.post('/contactUsMail', email);
    alert('Email sent successfully!');
  } catch (error) {
    console.error(error);
    alert('Error sending email.');
  }

    console.log("Message sent: ");

}