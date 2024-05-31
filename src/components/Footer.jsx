import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

const Footer=()=>{
    return(
        <section>
            <hr className="h-2"/>
            <div className="flex lg:flex-row flex-col justify-between mt-6">
                <h1 className="lg:text-2xl text-xl font-bold">Have a project in mind,<br/>Let's collaborate and bring it to life.</h1>
                <div className="lg:w-auto w-[60%] flex relative">
                    <Link to="/contact" className="btn flex items-center h-12 lg:mt-0 mt-5">Contact Me ↗️</Link>
                    <img className="w-12 h-12 lg:relative absolute bottom-0 right-0" alt="dancingMe" src={process.env.PUBLIC_URL+"/dancingMe.gif"}/>
                </div>
            </div>
            <div className="flex gap-10 mt-12 text-stone-400 justify-center">
                <p>©️copyright by Shaurya Sood </p>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/shaurya-sood-87b968208/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
                    <a href="https://github.com/ShauryaSood2003" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                    <a href="https://x.com/ShauyaSood" target="_blank" rel="noreferrer"><XIcon/></a>
                </div>
            </div>
        </section>
    );
}
export default Footer;