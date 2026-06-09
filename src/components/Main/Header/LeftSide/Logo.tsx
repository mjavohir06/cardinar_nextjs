import Image from "next/image";
import Link from "next/link";



export default function Logo() {

    return (
        <Link href={"/"} className="w-43.25 h-8.5">
            <Image src={"/logo.svg"} alt="logo" height={34} width={173} className="w-43.25 h-8.5"/>
        </Link>
    )
}