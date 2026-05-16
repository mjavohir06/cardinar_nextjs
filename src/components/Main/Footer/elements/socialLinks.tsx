import Image from "next/image";
import Link from "next/link";


export default function SocialLinks({link}:{link:socialLinkstype}){

    return(
        <Link href={link.link} className="w-13.75 h-13.75 rounded-[50%] border border-[hsla(0,0%,69%,.508)] hover:border-white flex justify-center items-center">
            <Image src={link.icon} alt="icon" width={20} height={20} className="w-5 h-5"/>
        </Link>
    )
}