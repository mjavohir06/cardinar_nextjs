import { fetcher } from "@/libs/utils/FetchRes"
import { branchListtype } from "./types"
import BranchColumns from "./elements/BranchColumns"
import BranchName from "./elements/BrachName"
import BranchTitle from "./elements/title"





export default async function StoriesPage(){
    const branch=await fetcher.get<branchListtype[]>("/public/branch")


    return(
        <section>

            <div className="w-full h-auto">
                <BranchTitle/>
                <BranchName/>
                {
                    branch.data.map((e,i)=><BranchColumns branch={e} key={i}/>)
                }
            </div>
        </section>
    )
}