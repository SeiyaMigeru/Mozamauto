export async function sendContactUsForm(email) {
  try {
    // Uncomment the line below if you want to send the email using axios
    // await axios.post('/contactUsMail', email);

    // Assuming the email is sent successfully, resolve the promise
    return Promise.resolve('Email sent successfully!');
  } catch (error) {
    // If there's an error, reject the promise with the error message
    return Promise.reject('Error sending email.');
  }
}