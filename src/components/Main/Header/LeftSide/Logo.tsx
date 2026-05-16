import Image from "next/image";
import Link from "next/link";



export default function Logo() {

    return (
        <Link href={"/"} className="w-43.25 h-8.5">
            <Image src={"https://cardinar.uz/img/logo.2ce17415.svg"} alt="logo" height={34} width={173} className="w-43.25 h-8.5"/>
        </Link>
    )
}