import {Link} from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const InfoBox=({text,btnText,link})=>{
    return(
        <div className="info-box">
            <p className="font-medium sm:text-xl text-center">{text}</p>
            <Link to={link} className="neo-btn neo-brutalism-white">
                {btnText}
                <ArrowForwardIcon/>
            </Link>
        </div>
    );

    
}

const HomeInfo=({currentStage})=>{
    const renderContent={
        1:
        (
            <h1 
                className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue text-white py-4 px-8 mx-5"
            >
                Hi, Im <span className="font-bold">Shaurya</span> 🙋‍♂️
                <br/>
                A Full Stack Developer 🖥️
            </h1>
        ),
        2:(
            <InfoBox 
            text="My goal is to blend creativity with functionality to deliver engaging and user-friendly applications."
            btnText="Learn More"
            link="/about"
            />
            
        ),
        3:(
            <InfoBox 
            text="Explore my work and discover the projects that have shaped my skills along the way."
            btnText="Visit my Portfolio"
            link="/project"
            />
        ),
        
        4:(
            <InfoBox 
            text="Feel free to reach out if you have a project in mind, want to discuss technology, or just want to say hello."
            btnText="Contact Me "
            link="/contact"
            />
        ),
    }
    return renderContent[currentStage] || null;
}
export default HomeInfo;