import { copyrightSign } from "../../assets/icons";
import { footerLogo } from "../../assets/images";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
    return (
        <>
        <footer className="max-container">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img src={ footerLogo } alt="footer logo" width={150} height={40}/>
                    </a>
                    <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
                        Gey shoes ready for the new tern at your nearest Nike store.
                        Find Your Perfect Size In Store. Get Rewards
                    </p>
                    <div className="flex items-center gap-5 mt-8">
                        { socialMedia.map((icon)=> {
                            return(
                                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer hover:bg-coral-red">
                                    <img src={ icon.src } alt={ icon.alt } width={24} height={24}/>
                                </div>
                            )
                        }) }
                    </div>
                </div>

                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    { footerLinks.map((section)=> (
                        <div key={section}>
                            <h4 className="text-white text-2xl font-montserrat font-bold leading-normal mb-6">{ section.title }</h4>
                            <ul>
                                { section.links.map((link)=> (
                                    <li key={ link.name } 
                                        className="mt-3 text-white-400 font-mantserrat leading-normal text-base cursor-pointer hover:text-coral-red">
                                           <a href="/">{ link.name }</a>
                                    </li>
                                )) }
                            </ul>
                        </div>
                    )) }
                </div>
            </div>

            <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer font-montserrat">
                    <img src={ copyrightSign } alt="copy right sign" width={20} height={20} className="rounded-full m-0"/>
                    <p>Copyright. All rights reserved</p>
                </div>
                <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
            </div>
        </footer>
        </>
    )
}

export default Footer ; 