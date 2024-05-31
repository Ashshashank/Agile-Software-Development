import './filter.css';
import imageMap from '../ImageMap.js';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ScaledAgile(){
    const navigate = useNavigate();
    return(
        <body class="bodyT">
        <div class="rowT">
                <h1>Scaled Agile 5.0</h1>
        </div>
        <br></br>
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
        
        <button class="undo-btn" onClick={() => navigate(-1)}>Undo Filter</button>
       
        </body>
    )
}