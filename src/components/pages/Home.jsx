import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import Loader from "../Loader";
import Island from "../../models/Island";
import Sky from "../../models/Sky";
import NightSky from "../../models/nightSky";
import Bird from "../../models/Bird";
import Plane from "../../models/Plane";
import HomeInfo from "../HomeInfo";
import { useTheme } from "../../contexts/ThemeContext";

const LOADING_MSGS = [
    'Initializing 3D engine...',
    'Sculpting the island...',
    'Painting the sky...',
    'Setting up the scene...',
    'Almost ready...',
];

const LoadingScreen = () => {
    const [msgIdx, setMsgIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setMsgIdx(i => (i + 1) % LOADING_MSGS.length);
        }, 900);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 z-20 bg-gray-950 flex flex-col items-center justify-center gap-8 select-none">
            {/* Spinning rings */}
            <div className="relative w-28 h-28">
                <div className="absolute inset-0 border-4 border-gray-700 rounded-full" />
                <div className="absolute inset-0 border-4 border-t-blue-500 border-r-blue-500 rounded-full animate-spin" style={{ animationDuration: '1s' }} />
                <div className="absolute inset-4 border-4 border-t-purple-400 rounded-full animate-spin" style={{ animationDuration: '0.7s', animationDirection: 'reverse' }} />
                <div className="absolute inset-8 border-4 border-t-cyan-400 rounded-full animate-spin" style={{ animationDuration: '1.5s' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                </div>
            </div>

            {/* Name */}
            <div className="text-center space-y-1">
                <p className="text-white font-black text-3xl tracking-[0.2em]">SHAURYA</p>
                <p className="text-blue-400 font-mono text-xs tracking-[0.4em] uppercase">Portfolio</p>
            </div>

            {/* Loading message */}
            <p className="font-mono text-xs text-gray-400 flex items-center gap-2 min-h-5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                {LOADING_MSGS[msgIdx]}
            </p>

            {/* Bouncing dots */}
            <div className="flex gap-2">
                {[0, 1, 2, 3].map(i => (
                    <div
                        key={i}
                        className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 120}ms` }}
                    />
                ))}
            </div>
        </div>
    );
};

// Mounts only after all Suspense siblings have resolved — signals scene is ready
const SceneReady = ({ onReady }) => {
    useEffect(() => { onReady(); }, [onReady]);
    return null;
};

const Home = () => {
    const { isDarkMode } = useTheme();
    const [sceneReady, setSceneReady] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);

    const adjustIslandForScreenSize = () => {
        if (window.innerWidth < 768) return [[0.9, 0.9, 0.9], [0, -6.5, -43.4]];
        return [[1, 1, 1], [0, -6.5, -43.4]];
    };
    const adjustPlaneForScreenSize = () => {
        if (window.innerWidth < 768) return [[2.5, 2.5, 2.5], [0, -1.5, 0]];
        return [[3, 3, 3], [0, -4, -4]];
    };

    const [islandScale, islandPosition] = adjustIslandForScreenSize();
    const [PlaneScale, PlanePosition] = adjustPlaneForScreenSize();

    return (
        <section className="w-full h-screen relative overflow-hidden">
            {!sceneReady && <LoadingScreen />}

            <div className="absolute flex justify-center items-center top-20 sm:top-28 left-0 right-0 z-10 text-blue-500 px-2">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>

            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <SceneReady onReady={() => setSceneReady(true)} />
                    <directionalLight position={[1, 1, 1]} intensity={3} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                    {isDarkMode ? <NightSky isRotating={isRotating} /> : <Sky isRotating={isRotating} />}
                    <Bird />
                    <Island
                        position={islandPosition}
                        rotation={[0.1, 4.7077, 0]}
                        scale={islandScale}
                        setCurrentStage={setCurrentStage}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Plane
                        PlaneScale={PlaneScale}
                        PlanePosition={PlanePosition}
                        isRotating={isRotating}
                        rotation={[0, 20, 0.4]}
                        position={[0, -1.5, 1.4]}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Home;
