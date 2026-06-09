"use client"
import { useTranslations } from 'next-intl'
import { premiumProductType } from '../type'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'


const Prem=({ prem }: { prem: premiumProductType })=>{

  return(
    <div className=' relative shrink-0 bg-[linear-gradient(42.19deg,#000000_24.92%,rgba(30, 30, 30, 0)_73.25%)] w-150.5 h-140.5 m-[40px_20px_0] flex justify-center items-center'>
      <Image src={prem.image??"/home/notfound.png"} width={602} height={562} alt='image' className='h-full'/>
      <div className='absolute bottom-5 left-5'>
        <div className='p-[4px_8px] rounded-full bg-white mb-6'><p>PREMIUM</p></div>
        <p className='text-white text-[20px]'>{prem.title}</p>
        <Link href={""} className='text-white text-[16px] underline'>Show Now</Link>
      </div>
      <div className='absolute right-6 top-5'>
        <Image src={"/home/medal.svg"} alt='icon' width={36} height={46} />
      </div>
    </div>
  )
}


const PreamiumsHome = ({ prems }: { prems: premiumProductType[] }) => {
  const t=useTranslations("home.premiums")
  return (
    <div>
      <div className='mb-4 flex justify-center md:w-150 w-auto pl-4'>
        <p className='text-[24px]'>{t("title") }</p>
      </div>

      <div className='flex overflow-x-scroll overflow-y-clip w-full h-auto'>
        {
          prems.length>0?
          prems.map((e,i)=><Prem prem={e} key={i}/>):
          <p className='text-[24px] text-black'>{t("notfound")}</p>
        }
      </div>
    </div>
  )
}

export default PreamiumsHome
