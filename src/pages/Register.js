import React, { useState } from 'react';
import imageMap from './ImageMap'
import ValidationResult from './validation';

export default function Register(){
    const courses = Object.keys(imageMap);
    const [selectedCourse, setSelectedCourse] = useState(sessionStorage.getItem('title'));
    const [selectedCity, setSelectedCity] = useState();
    const [imageLink, setImageLink] = useState(imageMap[sessionStorage.getItem('title')]);
    const [showPopup, setShowPopup] = useState(false);

    const initPayload = {
        'name':'',
        'email':'',
        'password':'',
        'country':'',
        'course':selectedCourse,
        'contactNo':'',
    };
    const [payload, setPayload] = useState(initPayload);

    function signUp(){
        const newPayload = {
            'name':document.getElementById('register-name').value,
            'email':document.getElementById('register-email').value,
            'password':document.getElementById('register-password').value,
            'country':selectedCity,
            'course':selectedCourse,
            'contactNo':document.getElementById('register-number').value,
        };
        setPayload(newPayload);
        setShowPopup(true);
    };


    function courseChange(course) {
        setSelectedCourse(course);
        setImageLink(imageMap[course]);
      };

    // const validation = () =>{
    //     for (let key in payload) {
    //         if(payload[key]==''){
    //             return false;
    //         };
    //       }
    //     return true;
    // }

    // const popupMessage = () =>{
    //     if(validation()){
    //         return 'Sign Up Successful!';
    //     }
    //     else{
    //         return "Please populate all fields";
    //     }
    // }



    return (
    <div className="course-container">
        <h1>
        <div class="register-header-box">
            <span class="course-header-text">Welcome!</span>
            <img class="imgT0" src={imageLink}></img> 
        </div>       
      </h1>  
        <br></br>
        <h2>Register below to create your account</h2>
        <div className="App2">
        <h3>Create your own account below</h3>
        <form>
            <div className="register-input-group">
                <label htmlFor="name">Full Name:</label>
                <input className="register-input" type="text" id="register-name" />
            </div>
            <div className="register-input-group">
                <label htmlFor="email">Email:</label>
                <input className="register-input" type="email" id="register-email" />
            </div>
            <div className="register-input-group">
                <label htmlFor="password">Password:</label>
                <input className="register-input" type="text" id="register-password" />
            </div>
            <div className="register-input-group">
                <label htmlFor="City">City:</label>
                <select className="course-dropdown"
                    value={selectedCourse} 
                    onChange={e => setSelectedCity(e.target.value)}>
                    <option value="Boston">Boston</option>
                    <option value="San Jose">San Jose</option>
                    <option value="Houston">Houston</option>
                    <option value="Raleigh">Raleigh</option>
                </select>
            </div>
            <div className="register-input-group">
                <label htmlFor="number">Contact No.:</label>
                <input className="register-input" type="text" id="register-number" />
            </div>
            <div className="register-input-group">
                <label htmlFor="course">Select Course</label>
                <select 
                    className="course-dropdown"
                    value={selectedCourse} 
                    onChange={e => courseChange(e.target.value)}
                    >
                    {courses.map(course => (
                        <option key={course} value={course}>
                        {course}
                        </option>
                    ))}
                </select>
            </div>
            

        </form>
        </div>
        <button type="submit" className="register-btn" onClick={() => signUp()}>Register</button>
        {showPopup && (
            <div className="popup">
                <br></br>
                <div className="popup-inner">
                    <h2>Info</h2>
                    <div>{ValidationResult(payload)}</div>
                    <br></br>
                    <br></br>
                    <button onClick={() => setShowPopup(false)}>Close</button>
                </div>
                
            </div>
        )}
        
    </div>
)

}