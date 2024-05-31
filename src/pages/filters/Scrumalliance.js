import './filter.css';
import imageMap from '../ImageMap.js';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Scrumalliance(){
    const navigate = useNavigate();
    return(
        <body class="bodyF">
        <div class="rowT">
                <h1>Scrum Alliance</h1>
            </div>
            <br></br>
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
            <button class="undo-btn" onClick={() => navigate(-1)}>Undo Filter</button>
        
       
        </body>
    )
}