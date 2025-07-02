import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PageLoaderWrapper({ children }) {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [childDown, setChildDown] = useState(false);
    const [parentUp, setParentUp] = useState(false);
    const [blurIn, setBlurIn] = useState(false);

    useEffect(() => {
        setLoading(true);
        setBlurIn(false);

        // Start blur+opacity animation
        const blurTimeout = setTimeout(() => {
            setBlurIn(true);
        }, 20);

        // After 1s start the child drop
        const initialDelay = setTimeout(() => {
            setChildDown(true);
        }, 120);

        const childTimeout = setTimeout(() => {
            setChildDown(false);
            setParentUp(true);

            setTimeout(() => {
                setLoading(false);
                setParentUp(false);
                setBlurIn(false);
            }, 300);
        }, 600);

        return () => {
            clearTimeout(blurTimeout);
            clearTimeout(initialDelay);
            clearTimeout(childTimeout);
        };
    }, [location]);

    return (
        <>
            {loading && (
                <div
                    className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-[9999]
                        transition-all duration-200 ease-in-out
                        ${blurIn ? 'opacity-100 blur-0' : 'opacity-0 blur-[10px]'}
                        ${parentUp ? '-translate-y-full' : 'translate-y-0'}
                    `}
                    style={{ 
                        backgroundColor: "white",
                        borderBottom: "1px solid var(--black)"
                    }}
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
                        <div className={`w-1/2 h-20 bg-black`}></div>
                    </div>
                </div>
            )}
            {children}
        </>
    );
}