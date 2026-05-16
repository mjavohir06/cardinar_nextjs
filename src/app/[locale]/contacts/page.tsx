import { fetcher } from "@/libs/utils/FetchRes"
import ContactsUstun1 from "./elements/Ustun1"
import ContactsUstun2 from "./elements/Ustun2"


export default async function ContactsPage(){
    const staticInfo = await fetcher.get<staticInfoType>("/public/staticInfo")
    return(
        <section >
            <ContactsUstun1/>
            <ContactsUstun2 staticInfo={staticInfo.data}/>

        </section>
    )
}