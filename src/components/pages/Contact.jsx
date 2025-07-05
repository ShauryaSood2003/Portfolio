import { Suspense, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Loader from "../Loader";
import { Canvas } from "@react-three/fiber";
import Dragon from "../../models/Dragon";
import useAlert from "../../hooks/useAlert";
import Alert from "../Alert";


const Contact =()=>{
    const [form,setForm]=useState({name:'',email:'',message:''});
    const [isloading,setIsLoading]=useState(false);
    const [currentAnimation,setCurrentAnimation]=useState('idle');
    const {alert,showAlert,hideAlert} = useAlert();
    const templateParams={
        from_name:form.name,
        to_name:"Shaurya",
        from_email:form.email,
        to_email:"shauryasood293@gmail.com",
        message:form.message
    }

    const formRef=useRef(null);

    const handleForm=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        
    };
    const handelFocus=()=>setCurrentAnimation('walk');
    const handelBlur=()=>setCurrentAnimation('idle');
    const handelSubmit=(e)=>{
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('hit');
        emailjs.send(
            "service_3wdqgrx",
            "template_m7xxkab",
            templateParams,
            "CQHEgBBdazlz0FNeG"
        ).then((response)=>{
            console.log("Status: ",response.status);
            showAlert({text:"Message send Successfully 👍",type:"success"});
            setTimeout(()=>{
                setIsLoading(false);
                setForm({name:'',email:"",message:""});
                setCurrentAnimation('idle');
                hideAlert();
            },3000);
        }).catch((err)=>{
            setCurrentAnimation('idle');
            console.log("Error: ",err.message);
            showAlert({text:"⚒️ Unable to send your message please try again later! ⚒️"});
            setIsLoading(false);
            setTimeout(()=>{
                setForm({name:'',email:"",message:""});
                hideAlert();
            },7000);
        })

    };
    return(
        <section className="relative flex flex-col lg:flex-row max-container">
            {alert.show && <Alert {...alert}/>}
            <div className=" flex-1 min-w-[50%] flex flex-col px-4 sm:px-0">
                <h1 className="text-2xl sm:text-4xl font-semibold sm:leading-snug font-poppins bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Let's Connect</h1>
                <p className="text-gray-600 mt-3 mb-6 sm:mb-8 text-sm sm:text-base">
                    Looking for a senior developer who can take ownership of complex projects? 
                    I'd love to discuss how I can contribute to your team's success.
                </p>
                <form
                    className="w-full flex gap-7 flex-col"
                    onSubmit={handelSubmit}
                    ref={formRef}
                >
                <div className="space-y-2">
                    <label className="text-gray-700 font-semibold text-sm uppercase tracking-wider">Name</label>
                    <input 
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition duration-200" 
                        type="text" 
                        name="name" 
                        placeholder="John Doe"
                        required
                        value={form.name}
                        onChange={handleForm}
                        onFocus={handelFocus}
                        onBlur={handelBlur}
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="text-gray-700 font-semibold text-sm uppercase tracking-wider">Email</label>
                    <input
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition duration-200"
                        name="email"
                        value={form.email}
                        placeholder="john@company.com"
                        onChange={handleForm}
                        onFocus={handelFocus}
                        onBlur={handelBlur}
                        required
                        type="email"
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="text-gray-700 font-semibold text-sm uppercase tracking-wider">Message</label>
                    <textarea
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition duration-200 resize-none"
                        name="message"
                        value={form.message}
                        placeholder="Tell me about your project or opportunity..."
                        onChange={handleForm}
                        onFocus={handelFocus}
                        onBlur={handelBlur}
                        required
                        rows={5}
                    />
                </div>
                
                <button
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 mt-6"
                    type="submit"
                    disabled={isloading}
                    onFocus={handelFocus}
                    onBlur={handelBlur}
                >
                    {isloading ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending Message...
                        </span>
                    ) : "Send Message"}
                </button>
                </form>
            </div>
            <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[330px]">
                <Canvas
                    camera={{
                            position:[0,0,5],
                            fov:75,
                            near:0.1,
                            far:1000
                        }
                    }
                >
                    <Suspense fallback={<Loader/>}></Suspense>
                    <directionalLight position={[1,1,1]} intensity={3}></directionalLight>
                    <ambientLight intensity={1}></ambientLight>
                    <Dragon
                        currentAnimation={currentAnimation}
                        position={[0.5,-0.35,0.6]}
                        rotation={[0,5.8,0]}
                        scale={[0.5,.5,.5]}
                    ></Dragon>   
                </Canvas>
            </div>
        </section>
    );
}
export default Contact;