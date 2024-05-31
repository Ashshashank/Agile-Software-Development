import './filter.css';
import {Link} from 'react-router-dom';
import imageMap from '../ImageMap.js';
import { useNavigate } from 'react-router-dom';
export default function ScrumMaster(){
    const navigate = useNavigate();
    return(
        <body class="bodyF">
        <div class="rowT">
                <h1>Scrum Master</h1>
        </div>
        <br></br>
        <div class="rowT">
        <Link to="/getcourse/Certified SAFe® Scrum Master">
            <img class="imgT2" src = {imageMap["Certified SAFe® Scrum Master"]}></img>
        </Link>
        <Link to="/getcourse/Certified SAFe® Advanced Scrum Master">
            <img class="imgT2" src = {imageMap["Certified SAFe® Advanced Scrum Master"]}></img>
        </Link>
        <Link to="/getcourse/Professional Scrum Master Training">
            <img class="imgT2" src={imageMap["Professional Scrum Master Training"]}></img>
        </Link>
        <Link to="/getcourse/CSM – Certified ScrumMaster® (scrumalliance.org)">
            <img class="imgT2" src={imageMap["CSM – Certified ScrumMaster® (scrumalliance.org)"]}></img>
        </Link>  
                
        </div>
        <button class="undo-btn" onClick={() => navigate(-1)}>Undo Filter</button>
       
        </body>
    )
    }
