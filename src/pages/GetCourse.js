import React, { useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import './pages.css'
import imageMap from './ImageMap'

function GetCourse() {
  const navigate = useNavigate();
  const { courseName } = useParams();
  const encodedCourse = encodeURIComponent(courseName);
  const fullURL = 'http://localhost:5000/authentication-swagger/v1/get-course-info?course=' + encodedCourse;
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  if(loading){
    console.log("making request");
    fetch(fullURL, {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      setCourse(data);
      setLoading(false);
    })
    .catch(error => {
      console.error("Error fetching course info:", error);
      setLoading(false);
    });
  }

  const storeCourseName = () => {
    sessionStorage.setItem('title', course.Title);
    navigate('/Register');
  };

  const imageLink = () => {
    const title = course.Title;
    return imageMap[title]
  };
  


  if (loading) return (<div>Loading...</div>);

  return (
    <div class="course-container"> 
      
      <h1>
        <div class="box">
          <img class="imgT0" src={imageLink()}></img> 
          <span class="course-header-text">{course.Title}</span>
        </div>       
      </h1>   
      <br></br>
      <br></br>
      
      <button type="submit" className="register-btn" onClick={storeCourseName}>Register</button>
      <div class='flex-container'>  
        <div class='flex-div'>
          <h2>About This Course: </h2>
          <br></br>
          <div>{course["About This Course"]}</div>
          <br></br>
          <h2>What you learn</h2>
          <br></br>
          <div >{course["What You’ll Learn"]}</div>
          <br></br>
          <br></br>
          <h2>Training Overview</h2>
          <ul style={{marginLeft: '2.1em'}}>
            {course["Training Overview"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <br></br>
          <br></br>
          <h2>Instructors</h2>
          <ul style={{marginLeft: '2.1em'}}>
            {course["Meet the Instructors"].map((instructor, index) => (
              <li key={index}>{instructor}</li>
            ))}
          </ul>
        </div>

        <div class='vertical-separator' />


        <div class='flex-div'>
          <h2>Length: </h2>
          <br></br>
          <div>Effort/Duration: {course["Effort/Duration"]} days</div>
          <div>Cost: ${course["Cost"]}</div>
          <br></br>
          <br></br>
          <h2>Reviews</h2>
          <ul style={{marginLeft: '2.1em'}}>
            {course["Reviews"].map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </div>     
      </div>
      <button type="submit" className="register-btn" onClick={storeCourseName}>Register</button>
    </div>
    
    
  );
}


export default GetCourse;