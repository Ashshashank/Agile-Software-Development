import './pages.css'
import pic5 from "./images/5.jpeg";
import FormControl from '@mui/material/FormControl';
import React, { useState } from 'react';

export default function ContactUs(){
    const [showPopup, setShowPopup] = useState(false);

    function ClosePopup(){
        setShowPopup(false);
        window.location.reload();
    }

    function ValidationResult(){
        const payload = {
            'name':document.getElementById('name').value,
            'email':document.getElementById('email-address').value,
            'phone':document.getElementById('phone-number').value,
            'message':document.getElementById('message').value,
        };
        const validateEmail = (payload) => {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(payload['email']);
          };
    
        const validatePhoneNumber = (payload) => {
            const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            return regex.test(payload['phone']);
        };
    
        const validateFullName = (payload) => {
            const regex = /^[a-z ]+$/i;
            const lengthWithoutSpaces = payload['name'].replace(/\s/g, '').length;
            return regex.test(payload['name']) && lengthWithoutSpaces >= 2;
        };
    
        if (!validateEmail(payload)) {
          return 'Please enter valid email address';
        }
        if (!validatePhoneNumber(payload)) {
          return 'Please enter 10 digit phone number';
        }
        if (!validateFullName(payload)) {
          return 'Please enter valid fullname with no special character. Minimum two characters';
        }
        else{
            return 'Message Successfully sent!';
        }
    }
    



    const handleSubmit = async (event) => {
        
        event.preventDefault(); // Prevents the default form submission behavior
        setShowPopup(true);
        if(ValidationResult() !="Message Successfully sent!"){
            return
        } 
    
        // Extract form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email-address').value,
            phone: document.getElementById('phone-number').value,
            message: document.getElementById('message').value
        };
    
        // Make the POST request
        try {
            const response = await fetch('http://localhost:5000/authentication-swagger/v1/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Process response here
            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
        

    };

    return (
        <div className="contact-box">
            <h1>Easy E-Learning</h1>
           
            <div className='contactus-main'>
              <div>
                 <img src={pic5} alt='contact-us image' width='550px'/>
              </div>
              <div>
                <FormControl variant='standard' className='cnt-form'>
                <h2>Contact Us</h2>
                    <label>Name</label>
                    <input type='text' id="name" name='name'/>
                    <label>Email Address</label>
                    <input type='email' id="email-address" name='email'/>
                    <label>Phone</label>
                    <input type='tel' id="phone-number" name='phone'/>
                    <label>What can we help you with?</label>
                    <textarea id="message" name="message" rows="8" cols="60" />

                    {/* Submit Button */}
                    <button type="submit" className="submit-btn" onClick={handleSubmit}>
                        Submit
                    </button>
                    {showPopup && (
                        <div className="popup">
                            <br></br>
                            <div className="popup-inner">
                                <h2>Info</h2>
                                <div>{ValidationResult()}</div>
                                <br></br>
                                <br></br>
                                <button onClick={() => ClosePopup()}>Close</button>
                            </div>
                            
                        </div>
                    )}
                </FormControl>
              </div>
            </div>

        </div>
    )
}

