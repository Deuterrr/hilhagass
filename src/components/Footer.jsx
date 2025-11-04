import * as fonts from "@/src/styles/fonts";

export default function Footer() {
    const footerLinks = [
        { name: "GitHub", url: "https://github.com/Deuterrr" },
        { name: "Instagram", url: "https://www.instagram.com/ilhagas_" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/ilham-bagas-priambodo" },
    ];
    return (
    <>
        <div className="max-w-screen grid grid-cols-12 pt-20">
            <div className="col-span-7">

            </div>
            <div className="col-span-5">
                <div className="self-stretch inline-flex flex-col gap-8">
                    <div className="self-stretch inline-flex">
                        <div className="flex-1 self-stretch justify-center">
                            <span className={`${fonts.altSection} text-(--dark-grey)`}>[CONNECT]</span>
                            <span className="text-Black text-4xl font-medium font-['DM_Sans']">       </span>
                            <span className={`${fonts.sectionBody} text-(--black)`}>Whether it’s a quick hello or a project idea, reach me on socials or by email.</span>
                        </div>
                    </div>
                    <div className="self-stretch inline-flex">
                        <div className="flex-1 flex gap-8">
                            <div className="flex-1 py-[3px] inline-flex flex-col gap-4">
                                <div className={`${fonts.alttext} text-(--black)`}>Whatsapp</div>
                                <div className={`${fonts.alttext} text-(--black)`}>GitHub</div>
                            </div>
                        <div className="flex-1 py-1 inline-flex flex-col justify-center items-start gap-4">
                            <div className={`${fonts.alttext} text-(--black)`}>Instagram</div>
                            <div className={`${fonts.alttext} text-(--black)`}>LinkedIn</div>
                        </div>
                        <div className="flex-1 py-1 inline-flex flex-col gap-4">
                            <div className={`${fonts.alttext} text-(--black)`}>Email</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-screen grid grid-cols-12 pt-20 pb-4">
            <div className="col-span-7 pl-16 flex">
                <div className={`${fonts.pageHeader1} text-(--black)`}>Hilhagass</div>
                <div className="pb-4 flex justify-center items-end gap-2.5">
                    <div className={`${fonts.altSection} text-(--black)`}>©2026</div>
                </div>
            </div>
            <div className="col-span-5">
            </div>
        </div>
    </>
    );
}