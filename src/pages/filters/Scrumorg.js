import './filter.css';
import imageMap from '../ImageMap.js';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Scrumorg(){
    const navigate = useNavigate();
    return(
        <body class="bodyF">
        <div class="rowT">
                <h1>Scrum.org</h1>
            </div>
            <br></br>
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
        
        <button class="undo-btn" onClick={() => navigate(-1)}>Undo Filter</button>
       
        </body>
    )
}