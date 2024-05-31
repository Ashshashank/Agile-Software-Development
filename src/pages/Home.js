import "./pages.css"
import React, { useRef,  useState} from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Carousel, { CarouselItem } from "./carousel";
import "./carousel.css"
import { Checkbox } from '@mui/material';
import { FormControlLabel } from '@mui/material';
import { FormGroup } from '@mui/material';
import {Routes, Route, useNavigate} from 'react-router-dom';
import pic1 from "./images/1.png";
import pic2 from "./images/2.png";
import pic3 from "./images/3.png";
import pic4 from "./images/4.png";


export default function Home(){

    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const navigateToContactUs = () => {
      // 👇️ navigate to /contacts
      navigate('/ContactUs');
    };
    const navigateToAboutUs = () => {
        // 👇️ navigate to /contacts
        navigate('/AboutUs');
      };
    const navigateToTraining = () => {
    // 👇️ navigate to /contacts
    navigate('/Training');
    };
    const navigateToUpcomingCourses = () => {
        // 👇️ navigate to /contacts
        navigate('/newcourses');
        };
  const sliderRef = useRef(null);
  const scrollAmount = 100;
  const images = [
    {
      id: 1,
      url: pic1
    },
    {
      id: 2,
      url: pic2
    },
    {
      id: 3,
      url: pic3,
    },
    
    {
      id: 4,
      url: pic4,
    },
  ];
    
    return (
        
        <body className="body">
        <h1>Easy E-Learning</h1>
        <br></br>
        <div className = "rowtop">
        <div class="columntop">
                <div class="topbuttonX">
                    <button class="btntopX" onClick={navigateToContactUs}>Collaborate</button>
                </div>
            </div>
            <Carousel>
                <CarouselItem>
                    <img src={`https://as2.ftcdn.net/v2/jpg/03/56/04/97/1000_F_356049725_UvW2FSyPH4E0QR0sJX8o3KUKpKSpzswJ.jpg `} />
                </CarouselItem>
                <CarouselItem>
                    <img src={`https://as1.ftcdn.net/v2/jpg/02/03/91/56/1000_F_203915680_M7OaU5UgMNF1clfJuTeXpaS4yxcpQ1Gc.jpg`} />
                </CarouselItem>
                <CarouselItem>
                    <img src={`https://as1.ftcdn.net/v2/jpg/06/29/94/90/1000_F_629949028_PbhYMp1SkR2br6k4lYfuLZbBvSldqXbW.jpg`} />
                </CarouselItem>
                <CarouselItem>
                    <img src={`https://t4.ftcdn.net/jpg/04/27/12/37/360_F_427123735_IIZzdoLNE1NUoO7HaO9NvNahiUulROcZ.jpg`} />
                </CarouselItem>
            </Carousel>
            <div class="columntop">
                <div class="topbutton">
                    <button class="btntop" onClick={navigateToAboutUs}>Collaborate</button>
                </div>
                <div class="topbutton">
                    <button class="btntop" onClick={navigateToContactUs}>Schedule Assessment</button>
                </div>
                <div class="topbutton">
                    <button class="btntop" onClick={navigateToTraining}>View Courses</button>
                </div>
                <div class="topbutton">
                    <button class="btntop" onClick={navigateToUpcomingCourses}>Our Offerings</button>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <h1>Our Services</h1>
        <br></br>
        <br></br>

        <div class='some-page-wrapper'>
            <div class='row'>
                <div class='column'>
                <div class='grey-column'>
                    <br></br>
                    <h2>Assessment</h2>
                    <br></br>
                    <img class='colImg' src='https://www.freeiconspng.com/thumbs/book-icon/book-stack-icon--icon-search-engine-16.png'></img>
                    <br></br>
                    <br></br>
                    <p> Easy E-Learning agile experts can perform an Agile Maturity Assessment for your company. We thoroughly
                        study your business organization and measure how the software development practices you
                        follow conform to the <a href="https://www.agilealliance.org/agile101/12-principles-behind-the-agile-manifesto/">Agile Manifesto's 12 Agile Principles.</a> 
                    </p>
                </div>
                </div>
                <div class='column'>
                <div class='grey-column'>
                    <br></br>
                    <h2>Coaching</h2>
                    <br></br>
                    <img class='colImg' src='https://freepngimg.com/save/29395-analyst-photos/512x512'></img>
                    <br></br>
                    <br></br>
                    <p>Working one on one with your own technology leaders, Easy E-Learning experts share our decades of Agile  expertise,
                     with just the right level of sensitivity and suitability for your business needs. </p>
                </div>
                </div>
                    <div class='column'>
                <div class='grey-column'>
                    <br></br>
                    <h2>Courses</h2>
                    <br></br>
                    <img class='colImg' src='https://www.freeiconspng.com/thumbs/laptop-icon/laptop-icon-24.png'></img>
                    <br></br>
                    <br></br>
                    <p>Easy E-Learning coursework will thoroughly prepare you for Agile certification. Having worked side-by side with the three 
                    elite certification agencies, we know just what you will need to gain  certification from the three important certification organizations SAFe, Scrum.org, and Scrum  Alliance.</p>
                </div>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>

        <div class='some-page-wrapper'>
            <div class='row2'>
                <div class='column'>
                <div class='white-column'>
                    <br></br>
                    <br></br>
                    <h1>About Us</h1>
                    <br></br>
                    <br></br>
                    <p> Easy E-Learning is a boutique Agile consultancy with decades of software development experience. We  grew up in the era of structured design 
                    methodologies, adapted our learning to the rapid  development approaches, and graduated to Agile. Wherever you are in your software evolution,  
                    we are there to help in your journey.
                    </p>
                    <br></br>
                    <br></br>
                    <div class = "rowb">
                        <div class="fbutton">
                            <button class="btnf" onClick={navigateToAboutUs}>Who We Are</button>
                        </div>
                        <div class="fbutton">
                            <button class="btnf"onClick={navigateToAboutUs}>What We Do</button>
                        </div>
                        <div class="fbutton">
                            <button class="btnf"onClick={navigateToContactUs}>Contact Us</button>
                         </div>
                    </div>
                </div>
                </div>
                <div class='column'>
                <div class='white-column'>
                    <br></br>
                    <br></br>
                    <img class='aboutImg' src='https://as1.ftcdn.net/v2/jpg/01/77/91/20/1000_F_177912003_ncVNX7GxPR6Z2NYcHvJTGPbrD26BcVKF.jpg'></img>
                </div>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Our Partners</h1>
        <br></br>
        <div class='some-page-wrapper'>
            <div class='row2'>
                <div class='column'>
                <div class='white-column'>
                    <br></br>
                    <h3>SAFe</h3>
                    <br></br>
                    <a href='https://scaledagile.com'><img class='partnerImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9U3eojLRvexjqYpj4YNNhVWfkJz1JWuIdUSytD7_&s'></img></a>
                    
                </div>
                </div>
                <div class='column'>
                <div class='white-column'>
                    <br></br>
                    <h3>Scrum Alliance</h3>
                    <br></br>
                    <a href='https://www.scrumalliance.org'><img class='partnerImg' src='https://theme.zdassets.com/theme_assets/67158/c28adb2e3532619ebc9a9072599677f56ebee94b.png'></img></a>
                    
                </div>
                </div>
                <div class='column'>
                <div class='white-column'>
                    <br></br>
                    <h3>Scrum.org</h3>
                    <br></br>
                    <a href='https://www.scrum.org'><img class='partnerImg' src='https://devon.global/wp-content/uploads/2018/11/scrumorg-logo.png'></img></a>
                </div>
                </div>
            </div>
        </div>


        <h1>Get Inspired</h1>
        <br></br>
        <br></br>

        <div className="App">
        <button
            className="nav-btn"
            onClick={() => {
            const container = sliderRef.current;
            container.scrollLeft -= scrollAmount;
            }}
        >
            <ChevronLeftIcon />
        </button>
        <div className="images-container" ref={sliderRef}>
            {images.map((image) => {
            return (
                <img
                className="image"
                alt="sliderImage"
                key={image?.id}
                src={image?.url}
                />
            );
            })}
        </div>
        <button
            className="nav-btn"
            onClick={() => {
            const container = sliderRef.current;
            container.scrollLeft += scrollAmount;
            }}
        >
        <ChevronRightIcon />
      </button>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="rowLast">
        <h1>Stay Connected With Us</h1>
        <br></br>
        <h3>Recieve Information About Upcoming Workshops and Insights</h3>
        <div className="App2">
        <form>
            <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            </div>
            <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            </div>
        </form>
        </div>
        <FormGroup class="checkbox">
            <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to recieve sponsored emails" />
        </FormGroup>
        <button type="submit" className="register-btn" onClick={() => setShowPopup(true)}>Sign Up</button>
        {showPopup && (
            <div className="popup">
                <br></br>
                <div className="popup-inner">
                    <h2>Success!</h2>
                    <div>You have been added to the mailing list!</div>
                    <br></br>
                    <br></br>
                    <button onClick={() => window.location.reload(false)}>Close</button>
                </div>
                
            </div>
            )}
        
    </div>
        

       </body>
    )
}