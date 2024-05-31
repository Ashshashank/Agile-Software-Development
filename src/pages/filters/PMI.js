import './filter.css';
import {Link} from 'react-router-dom';
import imageMap from '../ImageMap.js';
import { useNavigate } from 'react-router-dom';
export default function PMI(){
    const navigate = useNavigate();
    return(
        <body class="bodyF">
        <div class="rowT">
                <h1>PMI</h1>
            </div> 
        <br></br>
            <div class="rowTF"> 
                <Link to="/getcourse/Project Management Professional">
                    <img class="imgT2" src={imageMap["Project Management Professional"]}></img>
                </Link>
                <Link to="/getcourse/PMI Agile Certified Practitioner (PMI-ACP)">
                    <img class="imgT2" src={imageMap["PMI Agile Certified Practitioner (PMI-ACP)"]}></img>
                </Link>
            </div>
        <button class="undo-btn" onClick={() => navigate(-1)}>Undo Filter</button>
        </body>
    )
    }