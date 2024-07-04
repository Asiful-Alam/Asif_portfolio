import React, { useRef } from 'react';
import Contact from './Contact'; // Ensure this path is correct
import emailjs from 'emailjs-com'; // Import emailjs-com, not @emailjs/browser

const Mail = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yyd9eip', 'template_0n5irpb', formRef.current, 'aZm9eUf4KkW5ZEfl5')
      .then((result) => {
        console.log('Email sent:', result.text);
        // Handle success, e.g., show a success message to the user
      }, (error) => {
        console.error('Error sending email:', error.text);
        // Handle error, e.g., show an error message to the user
      });

    // Optionally clear the form fields
    formRef.current.reset();
  };

  return (
    <Contact>
      <form ref={formRef} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </Contact>
  );
};

export default Mail;
