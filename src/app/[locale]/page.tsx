import FloatingInput from "@/components/shared/Inputs/animateionInput";
import Image from "next/image";
import TopbarHome from "./Home/elements/Topbar";
import BottomPart from "./Home/elements/BottomPart";
import { fetcher } from "@/libs/utils/FetchRes";
import { PaginatedResultType } from "@/libs/types/PaginatedResult";
import { premiumProductType, tovarProductType } from "./Home/type";
import PreamiumsHome from "./Home/elements/Preamiums";
import TovarHome from "./Home/elements/TovarHome";

export default async function Home() {

  const premiums=await fetcher.get<PaginatedResultType<premiumProductType>>("public/product/premiums?page=1&size=10")
  const tovars=await fetcher.get<PaginatedResultType<tovarProductType>>("public/product/tovars?page=1&size=10")

  return (
    <>
      <TopbarHome/>
      <TovarHome tovars={tovars.data.data}/>
      <PreamiumsHome prems={premiums.data.data}/>
      <BottomPart/>
    </>
  );
}
