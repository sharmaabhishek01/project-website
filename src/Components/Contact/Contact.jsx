import React from 'react';
import './Contact.css';
import MessageIcon from '../../assets/email-file.gif';
import PhoneIcon from '../../assets/phone.gif';
import EmailIcon from '../../assets/sending-mail.gif';
import WhiteArrowIcon from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1655512a-9f5a-4d46-a88b-8702d37a03cb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (response.success) {
      console.log("Success", response);
      setResult(response.message);
      event.target.reset();
    } else {
      console.log("Error", response);
      setResult(response.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send a Message <img src={MessageIcon} alt="Message Icon" /></h3>
        <p>Feel Free to reach out through the contact form or find our contact information below.
          Your feedback, questions, and suggestions are important to us
          as we strive to provide exceptional service to our community.
        </p>
        <ul>
          <li><img src={EmailIcon} alt="Email Icon" />anupsharma202@gmail.com</li>
          <li><img src={PhoneIcon} alt="Phone Icon" />+91 7549091730</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
        <label>Email (Optional)</label>
        <input type='text' name='email' placeholder='Enter Your email' />
          <label>Your Name</label>
          <input type='text' name='name' placeholder='Enter Your Name.....' required />
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter Your Phone Number' required />
          <label>Message</label>
          <textarea name='message' rows="6" placeholder='Enter your message here' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={WhiteArrowIcon} alt="Arrow Icon" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact;
