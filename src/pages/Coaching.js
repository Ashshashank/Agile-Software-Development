import {Routes, Route, useNavigate} from 'react-router-dom';
import './pages.css'

export default function Coaching(){

    const navigate = useNavigate();

    const navigateToContactUs = () => {
      // 👇️ navigate to /contacts
      navigate('/ContactUs');
    };
    return (
    <body class="body">
        <div className="coaching-main-img">
          
        </div>
        <div className='coaching-content'>
           
            <h1>Agile Transformation</h1>
            <br></br>
            <div>Want to introduce the power of Agile to your organization? Our coaches can work with your teams to bring them up to speed. We will define the roles and responsibilities of the various team members and stakeholders, assist with implementing Agile practices including Scrum, Kanban and Lean, and help to position your group into moving ahead on your own.</div>
            <br></br>
            <h1>DevOps Transformation</h1>
            <br></br>
            <div>Combining both software development and operations, an Agile DevOps environment maximizes productivity by coordinating a shared vision. This enables your organization to cooperate on a common set of tools and practices, from planning to maintenance.</div>
            <br></br>
            <h1>Tools Assessments & Implementations</h1>
            <br></br>
            <div>Agile is a set of principles – there are a plethora of tools available, but which ones are best for your specific needs and goals? With this coaching session, we help you assess your current toolset and your organization’s strengths and challenges, and we assemble a collection of tools specific to your requirements.</div>
          
        </div>  
        <div className='b-ctu-btn'>
          <button onClick={navigateToContactUs} class="ctu-btn">Contact Us</button>
        </div>
    </body>
    )
}