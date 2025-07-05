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
                className="text-lg sm:text-xl sm:leading-snug text-center neo-brutalism-blue text-white py-3 sm:py-4 px-4 sm:px-8 mx-2 sm:mx-5"
            >
                Hi, I'm <span className="font-bold">Shaurya Sood</span> 
                <br/>
                <span className="text-xs sm:text-sm">Senior Full Stack Developer | Building Scalable SaaS Solutions</span>
            </h1>
        ),
        2:(
            <InfoBox 
            text="From intern to core product owner in 12 months. I deliver high-scale products end-to-end with modern tech stacks."
            btnText="Explore My Journey"
            link="/about"
            />
            
        ),
        3:(
            <InfoBox 
            text="Led production systems processing more 25K+ bookings. Used by the organizations like Google, Amazon & Flipkart."
            btnText="View My Work"
            link="/project"
            />
        ),
        
        4:(
            <InfoBox 
            text="Looking for a senior developer who can own complex projects? Let's discuss how I can contribute to your team."
            btnText="Get In Touch"
            link="/contact"
            />
        ),
    }
    return renderContent[currentStage] || null;
}
export default HomeInfo;