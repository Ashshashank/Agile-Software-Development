import './pages.css';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import imageMap from './ImageMap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useParams, useNavigate} from 'react-router-dom';



export default function Training(){

    const navigate = useNavigate();


    const handleChange = (event) => {
        const url = event.target.value;
        if (url!==''){
            navigate(url);
        }         
      };
    


    return (
        <body class="bodyT">
            <h1>Public & Corporate Training</h1>
            <br></br>
            <br></br>
            <div className='row1'>
            <div className="dropdown-basic">
                <select className="btnncf" onChange={handleChange}>
                    <option value="">Course Type</option>
                    <option value="/coursetypefilter">Product Owner</option>
                    <option value="/scrummaster">Scrum Master</option>
                    <option value="/developer">Developer</option>
                    <option value="/leader">Leader</option>
                </select>
            </div>

            <div className="dropdown-basic">
                <select className="btnncf" onChange={handleChange}>
                    <option value="">Certify Body</option>
                    <option value="/leadership">Leadership</option>
                    <option value="/scaledagile">Scaled Agile 5.0</option>
                    <option value="/scrumorg">Scrum.org</option>
                    <option value="/scrumalliance">Scrum Alliance</option>
                    <option value="/pmi">PMI</option>
                </select>
            </div>

            <div className="dropdown-basic">
                <select className="btnncf" onChange={handleChange}>
                    <option value="">All Courses</option>
                    <option value="/newcourses">Calender</option>
                </select>
            </div>
            
            </div>
            <div class="rowT">
                <h1>Public Training</h1>
            </div>
            <br></br>
            <div class="rowT">
                <h3>Leadership</h3>
            </div>
            <div class="rowT">
            <Link  to="/getcourse/Certified Agile Leadership (CAL1)">
                    <img class="imgT2" src={imageMap["Certified Agile Leadership (CAL1)"]}></img>
            </Link>
            </div>
            <br></br>

            <div class="rowT">
                <h3>Scaled Agile 5.0</h3>
            </div>
            <div class="rowT">
                <Link to="/getcourse/Certified SAFe® Agilist">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Agilist"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Scrum Master">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Scrum Master"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Product Owner, Product Manager">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Product Owner, Product Manager"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Government Practitioner">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Government Practitioner"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Program Consultant">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Program Consultant"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Advanced Scrum Master">
                <img class="imgT2" src = {imageMap["Certified SAFe® Advanced Scrum Master"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® DevOps Practitioner">
                    <img class="imgT2" src = {imageMap["Certified SAFe® DevOps Practitioner"]}></img>
                </Link>
                <Link to="/getcourse/SAFe® for Architects">
                    <img class="imgT2" src = {imageMap["SAFe® for Architects"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Practitioner">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Practitioner"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Release Train Engineer">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Release Train Engineer"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Agile Software Engineer">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Agile Software Engineer"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Lean Portfolio Manager">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Lean Portfolio Manager"]}></img>
                </Link>
                <Link to="/getcourse/Certified SAFe® Agile Product Manager">
                    <img class="imgT2" src = {imageMap["Certified SAFe® Agile Product Manager"]}></img>
                </Link>
            </div>
            <br></br>

            <div class="rowT">
                <h3>Scrum.org</h3>
            </div>
            <div class="rowT">
                <Link to="/getcourse/Professional Scrum Master Training">
                    <img class="imgT2" src={imageMap["Professional Scrum Master Training"]}></img>
                </Link>
                <Link to="/getcourse/Professional Scrum Product Owner">
                    <img class="imgT2" src={imageMap["Professional Scrum Product Owner"]}></img>
                </Link>
                <Link to="/getcourse/Professional Scrum Developer">
                    <img class="imgT2" src={imageMap["Professional Scrum Developer"]}></img>
                </Link>
            </div>
            <br></br>

            <div class="rowT">
                <h3>Scrum Alliance</h3>
            </div>
            <div class="rowT">
                <Link to="/getcourse/CSM – Certified ScrumMaster® (scrumalliance.org)">
                    <img class="imgT2" src={imageMap["CSM – Certified ScrumMaster® (scrumalliance.org)"]}></img>
                </Link>                
                <Link to="/getcourse/CSPO - Certified Scrum Product Owner">
                    <img class="imgT2" src={imageMap["CSPO - Certified Scrum Product Owner"]}></img>
                </Link>
                <Link to="/getcourse/CSD – Certified Scrum Developer (scrumalliance.org)">
                    <img class="imgT2" src={imageMap["CSD – Certified Scrum Developer (scrumalliance.org)"]}></img>
                </Link>
            </div>
            <br></br>

            <div class="rowT">
                <h3>PMI</h3>
            </div> 
            <div class="rowTF"> 
                <Link to="/getcourse/Project Management Professional">
                    <img class="imgT2" src={imageMap["Project Management Professional"]}></img>
                </Link>
                <Link to="/getcourse/PMI Agile Certified Practitioner (PMI-ACP)">
                    <img class="imgT2" src={imageMap["PMI Agile Certified Practitioner (PMI-ACP)"]}></img>
                </Link>
            </div>

            <div class="rowTF2">
                <h1>Corporate Training</h1>
            </div>
            <div class="rowT">
                <Link to="/getcourse/Value Stream Corporate Workshop">
                <div class="tbutton">
                    <button class="btnt"><b>Value Stream <br></br> Workshop</b></button>
                </div>
                </Link>
                <Link to="/getcourse/SAFe® Portfolio Management">
                <div class="tbutton">
                    <button class="btnt"><b>SAFe® Portfolio<br></br> Management</b></button>
                </div>
                </Link>
                <Link to="/getcourse/Program Increment Workshop (customized offering)">
                <div class="tbutton">
                    <button class="btnt"><b> Program Increment<br></br> Workshop</b></button>
                </div>
                </Link>
                <Link to="/getcourse/Inspect & Adapt (customized offering)">
                <div class="tbutton">
                    <button class="btnt"><b>Inspect & <br></br> Adapt</b></button>
                </div>
                </Link>
                <Link to="/getcourse/Product Management Workshop (customized offering)">
                <div class="tbutton">
                    <button class="btnt"><b>Product Management<br></br> Workshop</b></button>
                </div>
                </Link>
                <Link to="/getcourse/Team Building Workshop">
                <div class="tbutton">
                    <button class="btnt"><b>Team <br></br>Building</b></button>
                </div>
                </Link>
                <Link to="/getcourse/Customized Scrum and Kanban Workshop">
                <div class="tbutton">
                    <button class="btnt"><b> Customized <br></br>Scrum/Kanban<br></br>Workshop</b></button>
                </div>
                </Link>

            </div>


    
        </body>
        )

}