import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PageLoaderWrapper({ children }) {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [childDown, setChildDown] = useState(false);
    const [parentUp, setParentUp] = useState(false);

    useEffect(() => {
        setLoading(true);

        const initialDelay = setTimeout(() => {
            setChildDown(true); 
        }, 50); 

        // After 400ms child finishes coming down
        const childTimeout = setTimeout(() => {
            setChildDown(false);
            setParentUp(true);
            
            setTimeout(() => {
                setLoading(false);
                setParentUp(false);
            }, 1000);
        }, 600);

        return () => {
            clearTimeout(initialDelay);
            clearTimeout(childTimeout);
        };
    }, [location]);

    return (
        <>
            {loading && (
                <div
                    className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-[9999]
                        transition-transform duration-800 ease-in-out
                        ${parentUp ? '-translate-y-full' : 'translate-y-0'}`}
                    style={{ borderBottom: "1px solid var(--black)" }}
                >
                    <div
                        className={`w-1/2 flex flex-col gap-4
                            transition-transform duration-500 ease-out
                            ${childDown ? 'translate-y-0' : '-translate-y-[30vh]'}`}
                    >
                        <p className="leading-[52px] tracking-[-1px]"
                            style={{ fontFamily: "var(--font-text)", fontSize: "var(--font-text-size)" }}>
                            Hilhagas
                        </p>
                        <div
                            className={`w-1/2 h-20 bg-black`}
                        >
                        </div>
                    </div>
                </div>
            )}
            {children}
        </>
    );
}
