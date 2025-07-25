import { useEffect, useState } from "react";

export default function PageLoaderWrapper({ location, children }) {
    const [loading, setLoading] = useState(true);
    const [childDown, setChildDown] = useState(false);
    const [parentUp, setParentUp] = useState(false);
    const [blurIn, setBlurIn] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        let blurTimeout, initialDelay, childTimeout;

        async function loadFontsAndAnimate() {
            setLoading(true);
            setShowContent(false);
            setBlurIn(false);

            // Wait for fonts
            await document.fonts.ready;

            // Now proceed with your existing loader animation
            blurTimeout = setTimeout(() => setBlurIn(true), 20);

            initialDelay = setTimeout(() => setChildDown(true), 120);

            childTimeout = setTimeout(() => {
                setChildDown(false);
                setParentUp(true);
                setTimeout(() => {
                    setLoading(false);
                    setParentUp(false);
                    setBlurIn(false);
                    setShowContent(true);
                }, 500);
            }, 600);
        }

        loadFontsAndAnimate();

        return () => {
            clearTimeout(blurTimeout);
            clearTimeout(initialDelay);
            clearTimeout(childTimeout);
        };
    }, [location]);

    return (
        <>
            {loading && (
                <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-[9999]
                    transition-all duration-600 ease-in-out
                    ${blurIn ? 'opacity-100 blur-0' : 'opacity-0 blur-[10px]'}
                    ${parentUp ? '-translate-y-full' : 'translate-y-0'}
                `}
                style={{ backgroundColor: "white", borderBottom: "1px solid var(--black)" }}>
                    <div className={`w-1/2 flex flex-col gap-4
                        transition-transform duration-400 ease-out
                        ${childDown ? 'translate-y-0' : '-translate-y-[30vh]'}`}>
                        <p className="leading-[52px] tracking-[-1px]"
                            style={{ fontFamily: "var(--font-text)", fontSize: "var(--font-text-size)" }}>
                            Hilhagas
                        </p>
                        <div className="w-1/2 h-20 bg-black"></div>
                    </div>
                </div>
            )}
            {showContent && children}
        </>
    );
}