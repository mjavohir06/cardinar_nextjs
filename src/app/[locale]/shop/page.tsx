import PageCountShop from '../shop/elements/Ustun2/PageCount'
import { fetcher } from '@/libs/utils/FetchRes'
import { PaginatedResultType } from '@/libs/types/PaginatedResult'
import { tovarProductType } from '../Home/type'
import { Tovar } from '../Home/elements/TovarHome'
import FiltersShop from '../shop/elements/Filters/Filters'
import { categoryType, colorType } from '../shop/elements/Filters/type'

 type PropsShop = {
    searchParams: Promise<{
        page?: string,
        colorId?:number,
        categoryId?:number
    }>
}
export default async function Page({ searchParams }: PropsShop) {
    const param = await searchParams

    const page = Number(param.page) || 1

    let pr=""
    if(param.colorId) pr+=`&colorId=${param.colorId}`
    if(param.categoryId) pr+=`&categoryId=${param.categoryId}`

    const tovars = await fetcher.get<
        PaginatedResultType<tovarProductType>
    >(
        `public/product/tovarsshop?page=${page}&size=10${pr}`
    )

    const colors=await fetcher.get<colorType[]>("/public/color")
    const categories=await fetcher.get<categoryType[]>("/public/category")

    console.log(tovars);
    

    return (
        <div>
            <FiltersShop colors={colors.data} params={param} categories={categories.data}/>
            <div className='flex flex-wrap'>
                {tovars.data.data.map((e) => (
                    <Tovar tovar={e} key={e.id} />
                ))}
            </div>

            <PageCountShop
                currentPage={tovars.data.currentPage}
                totalPages={tovars.data.totalPages}
            />
        </div>
    )
}