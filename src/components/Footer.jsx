export default function Footer() {
    const footerLinks = [
        { name: "GitHub", url: "https://github.com/Deuterrr" },
        { name: "Instagram", url: "https://www.instagram.com/ilhagas_" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/ilham-bagas-priambodo" },
    ];
    return (
        <div className="flex flex-col w-full
        md:h-screen h-fit
        md:gap-0 gap-12
        md:mt-0 mt-8
        "
            style={{backgroundColor: "var(--white)"}}>
            <div className="flex w-full h-full flex-col
            md:pl-20 pl-10
            md:pt-32 pt-22 
            md:gap-4 gap-0
            ">
                <p className="leading-[var(--leading-header1-size)] tracking-[-1px]"
                style={{fontFamily: "var(--font-title)", fontSize: "var(--font-header1-size)", color: "var(--light-grey)"}}>
                    ILHAM <br />
                    PRIAMBODO
                </p>
            </div>
            <div className="flex w-full justify-center p-4
            md:gap-16 sm:gap-10 gap-6
            ">
                  <>
                    {footerLinks.map((link) => (
                        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                            <p style={{ fontFamily: "var(--font-header)", color: "var(--light-grey)", fontSize: "var(--font-small-text-size)" }}>
                                {link.name}
                            </p>
                        </a>
                    ))}
                </>
            </div>
        </div>
    );
}