import './filter.css';
import {Link} from 'react-router-dom';
import imageMap from '../ImageMap.js';
import { useNavigate } from 'react-router-dom';
export default function Leader(){
    const navigate = useNavigate();
    return(
        <body class="bodyF">
        <div class="rowT">
                <h1>Leader</h1>
        </div>
        <br></br>
        <div class="rowT">
            <Link  to="/getcourse/Certified Agile Leadership (CAL1)">
                    <img class="imgT2" src={imageMap["Certified Agile Leadership (CAL1)"]}></img>
            </Link>
        </div>
        <button class="undo-btn" onClick={() => navigate(-1)}>Undo Filter</button>
        </body>
    )
}