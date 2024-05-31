import './filter.css';
import imageMap from '../ImageMap.js';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function Developer(){
    const navigate = useNavigate();
    return(
        <body class="bodyF">
        <div class="rowT">
                <h1>Developer</h1>
        </div>
        <br></br>
        <div class="rowT">
        <Link to="/getcourse/Certified SAFe® DevOps Practitioner">
            <img class="imgT2" src = {imageMap["Certified SAFe® DevOps Practitioner"]}></img>
        </Link>
        <Link to="/getcourse/Certified SAFe® Agile Software Engineer">
            <img class="imgT2" src = {imageMap["Certified SAFe® Agile Software Engineer"]}></img>
        </Link>
        <Link to="/getcourse/Professional Scrum Developer">
            <img class="imgT2" src={imageMap["Professional Scrum Developer"]}></img>
        </Link>
        <Link to="/getcourse/CSD – Certified Scrum Developer (scrumalliance.org)">
            <img class="imgT2" src={imageMap["CSD – Certified Scrum Developer (scrumalliance.org)"]}></img>
        </Link>
        </div>
        <button class="undo-btn" onClick={() => navigate(-1)}>Undo Filter</button>
        
        
       
        </body>
    )
}