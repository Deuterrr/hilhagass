export default function Footer() {
    const footerLinks = [
        { name: "GitHub", url: "https://github.com/Deuterrr" },
        { name: "Instagram", url: "https://www.instagram.com/ilhagas_" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/ilham-bagas-priambodo" },
    ];
    return (
        <div className="flex flex-col w-full h-screen"
            style={{backgroundColor: "var(--white)"}}>
            <div className="flex w-full h-full p-[190px_80px] flex-col">
                <p className="leading-[110px] tracking-[-5px]"
                   style={{fontFamily: "var(--font-header)", fontSize: "var(--font-header1-size)", color: "var(--light-grey)"}}>
                    ILHAM
                </p>
                <p className="leading-[110px] tracking-[-5px]"
                   style={{fontFamily: "var(--font-header)", fontSize: "var(--font-header1-size)", color: "var(--light-grey)"}}>
                    PRIAMBODO
                </p>
            </div>
            <div className="flex w-full gap-16 justify-center p-4">
                  <>
                    {footerLinks.map((link) => (
                        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                            <p style={{ fontFamily: "var(--font-text)", color: "var(--light-grey)", fontSize: "var(--font-small-text-size)" }}>
                            {link.name}
                            </p>
                        </a>
                    ))}
                </>
                {/* <p style={{fontFamily: "var(--font-text)", color: "var(--light-grey)", fontSize: "var(--font-small-text-size)"}}>GitHub</p>
                <p style={{fontFamily: "var(--font-text)", color: "var(--light-grey)", fontSize: "var(--font-small-text-size)"}}>Instagram</p>
                <p style={{fontFamily: "var(--font-text)", color: "var(--light-grey)", fontSize: "var(--font-small-text-size)"}}>LinkedIn</p> */}
            </div>
        </div>
    );
}