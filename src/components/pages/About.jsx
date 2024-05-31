import { skills } from "../../assets/asserts";
import { useEffect } from "react";

import Footer from "../Footer"

const Education=({link,course,institute,duration,percent})=>{
  return(
    <div className="flex flex-wrap lg:gap-16 gap-7 drop-shadow-2xl ed_hid ">
      <img src={link} alt="edu_Image" className=" w-40 h-40"></img>
      <div>
        <h3 className="font-semibold text-[#616161] mb-2">{course}</h3>
        <h1 className=" font-bold lg:text-2xl text-lg mb-2">{institute}</h1>
        <p className="text-[#616161] mb-4 text-sm">{duration}</p>
        <p>{percent}</p>
      </div>
    </div>
  );
}

const About =()=>{
    useEffect(() => {
        const observe = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("sho");
            } else {
              entry.target.classList.remove("sho");
            }
          });
        });
        const observeED = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("ed_sho");
            } else {
              entry.target.classList.remove("ed_sho");
            }
          });
        });
    
        const hidden = document.querySelectorAll(".hid");
        hidden.forEach((e) => {
          observe.observe(e);
        });
        const edu_hidden = document.querySelectorAll(".ed_hid");
        edu_hidden.forEach((e) => {
          observeED.observe(e);
        });
    
       
        return () => {
          observe.disconnect();
        };
      }, []);
    return(
        <section className="max-container">

            <div className="lg:mb-20 mb-6 ">
              <div className="flex mb-5 relative">
                  <h1 className="lg:text-3xl text-2xl font-bold">Hey there,I'm Shaurya</h1>
                  <img className="w-10 h-10 lg:relative absolute bottom-1.5 right-0 " src={process.env.PUBLIC_URL+"/ME.gif"} alt="me"></img>
              </div>
              <h3 className="text-[#616161]">
                  Crafting elegantly simple designs is my passion. 
                  I thrive on transforming complexity into intuitive and visually appealing solutions. 
                  Let's create something beautiful together.
              </h3>
              <div className=" items-center flex justify-center">
                <img 
                    src="https://ouch-cdn2.icons8.com/fgJKMaVTkdnsgrRX516Zcuib9wOWMHQWsdgrJBOzm4s/rs:fit:477:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTQy/L2I4MjEyNGIyLTM2/OGItNDcwMy1hY2U3/LWMyOTc0YTk2OGI3/Mi5wbmc.png"
                    className="mt-10"
                    alt="temp"
                />
              </div>
            </div>
       
            <div className="lg:mt-30 mt-20 lg:mb-20 mb-6">
                <h1 className="lg:text-2xl text-xl font-semibold">Skills</h1>
                <div className="flex lg:gap-24 gap-8 mt-10 flex-wrap">
                    
                        {
                            skills.map((element)=>{
                                return(<img src={element} className="w-23 h-20 rounded-sm hid animate_logo" alt="temp_image"/>);
                            })
                        }
                    
                </div>
            </div>
            
            
            <div className="lg:mb-20 mb-6">
                <h1 className="lg:text-2xl text-xl font-semibold mb-10">Education</h1>
                <div className="flex gap-10 flex-wrap">  
                        <Education 
                              link="https://niecdelhi.ac.in/wp-content/uploads/2018/07/logo-adgitm.jpg" 
                              course="B.Tech (CSE)" 
                              institute="Dr Akhilesh Das Gupta Institute of Technology" 
                              duration="2021 - 2025" 
                              percent="In-progress"
                          >

                        </Education>
                        <Education 
                              link="https://www.schooldekho.org/storage/logo//894aq83o4q4oko448800kow8og0g8ws.jpg" 
                              course="12th Class" 
                              institute="DL DAV MODEL SCHOOL PITAMPURA" 
                              duration="2009 - 2021" 
                              percent="93.2%"
                        >

                        </Education>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
    
}
export default About;