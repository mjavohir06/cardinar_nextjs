import { fetcher } from '@/libs/utils/FetchRes'
import React from 'react'
import TovarHome from '../../Home/elements/TovarHome'
import { tovarProductType } from '../../Home/type'
import { PaginatedResultType } from '@/libs/types/PaginatedResult'
import { productDetailType } from './type'
import Detail from './elements/detail'

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id
  const detail=await fetcher.get<productDetailType>(`public/product/one/${id}`)
  const tovars=await fetcher.get<PaginatedResultType<tovarProductType>>("public/product/tovars?page=1&size=10")

  if(!detail.data) return<></>
  return (
    <div>
      <Detail detail={detail.data}/>

      <TovarHome tovars={tovars.data.data}/>
      
    </div>
  )
}
