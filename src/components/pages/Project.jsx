import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { projects } from '../../assets/asserts';
import { useEffect } from 'react';
import Footer from '../Footer';

const Project = () => {
    useEffect(()=>{
        console.log(projects);
    },[])
    return(
        <section className='max-container'>
            <div className='flex flex-col items-center w-full'>
                <hr className='w-9 h-1 bg-orange-600 drop-shadow-lg mb-1'/>
                <h1 className=' font-semibold sm:text-2xl text-xl mb-4  '>Projects</h1>
                <div className=" text-stone-400 flex flex-col justify-center items-center lg:text-sm text-xs">
                    <p>Exemplary Design</p>
                    <p/>and<p/>
                    <p>Development Taste</p>
                </div>
            </div>
            <div className=' mt-20'>
                <VerticalTimeline>
                    {
                        projects.map((project)=>(
                            <VerticalTimelineElement
                                date={project.duration}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                    <img src={project.logo} alt="logoImages" className='w-[80%] h-[80%] rounded-full object-contain'></img>
                                    </div>
                                }
                                iconStyle={{ background: project.color }}
                                contentStyle={{
                                    borderBottom:`8px solid ${project.color}`,
                                    boxShadow:"none" 
                                }}
                            >
                                <h1 className='font-bold sm:text-2xl text-xl '>{project.title}</h1>
                                <p className="font-semibold sm:text-xl text-base">{project.subTitle}</p>
                                <p className='sm:text-base text-sm text-slate-600'>{project.text}</p>
                                <div className='mt-5'><a href={project.link} target="_blank" className='btn'>Go to Website ↗️</a></div>
                            </VerticalTimelineElement>
                        ))
                    }
                </VerticalTimeline>
            </div>
            <Footer></Footer>
        </section>

    );
}
export default Project;