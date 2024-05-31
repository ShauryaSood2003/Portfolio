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
            "service_wwocsdi",
            "template_plk5enn",
            templateParams,
            "REjicbX3iNd_CqrUt"
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
            <div className=" flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">Get in Touch</h1>
                <form
                    className="w-full flex gap-7 flex-col mt-14"
                    onSubmit={handelSubmit}
                    ref={formRef}
                >
                <label className=" text-black font-semibold text-xl">
                    Name
                    <input 
                        className="input" 
                        type="text" 
                        name="name" 
                        placeholder="Enter your name..."
                        required
                        value={form.name}
                        onChange={handleForm}
                        onFocus={handelFocus}
                        onBlur={handelBlur}
                    >

                    </input>
                </label>
                <label className="text-black font-semibold text-lg sm:text-xl">
                    Email
                    <input
                        className="input"
                        name="email"
                        value={form.email}
                        placeholder="Ex. abc@gmail.com ..."
                        onChange={handleForm}
                        onFocus={handelFocus}
                        onBlur={handelBlur}
                        required
                        type="text"
                    >
                    </input>
                </label>
                <label className="text-black font-semibold text-lg sm:text-xl">
                    Message
                    <textarea
                        className="textarea"
                        name="message"
                        value={form.message}
                        placeholder="Your message ... 🙋‍♂️"
                        onChange={handleForm}
                        onFocus={handelFocus}
                        onBlur={handelBlur}
                        required
                        rows={3}
                    >
                    </textarea>
                    <button
                        className="btn mt-8"
                        type="submit"
                        disabled={isloading}
                        onFocus={handelFocus}
                        onBlur={handelBlur}
                    >
                    {isloading?"Sending Message... ": "Send Message"}
                    </button>
                </label>
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