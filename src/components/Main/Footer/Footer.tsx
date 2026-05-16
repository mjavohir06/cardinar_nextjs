import Logo from "../Header/LeftSide/Logo";
import { fetcher } from "@/libs/utils/FetchRes";
import SocialLinks from "./elements/socialLinks";
import StaticInfo from "./elements/staticInfo";
import FooterTag from "./elements/Tag";



export default async function Footer() {
    const socialLinks = await fetcher.get<socialLinkstype[]>("/public/socialLink")
    const staticInfo = await fetcher.get<staticInfoType>("/public/staticInfo")



    return (
        <footer className="bg-[#1E1E1E] w-full p-[115px_20px_0px] h-auto">
            <div className="m-[0px_0px_85px] flex sm:justify-start justify-center">
                <Logo />
            </div>
            <div className=" w-full flex flex-wrap sm:flex-row flex-col sm:justify-start content-center gap-15 p-[0px_0px_85px] border-b border-[#7d7d7d]">
                {
                    staticInfo.data &&
                    <StaticInfo info={staticInfo.data} />
                }

                <div className="flex items-center gap-2">
                    {socialLinks.data &&
                        socialLinks.data.map((e, i) => <SocialLinks link={e} key={i} />)
                    }
                </div>
            </div>
            <div className="w-full p-[20px_0] flex justify-center items-center ">
                <FooterTag />
            </div>
        </footer>
    )
}