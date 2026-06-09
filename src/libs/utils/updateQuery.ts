import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { ReadonlyURLSearchParams } from "next/navigation"

type keys="page"|"colorId"|"categoryId"

export default function updateQuery(
    searchParams:ReadonlyURLSearchParams,
    key: keys,
    value: string | number,
    router:AppRouterInstance
) {
    const params = new URLSearchParams(
        searchParams.toString()
    )

    params.set(key, String(value))

    router.push(`?${params.toString()}`)
}


export function clearQuery(router: AppRouterInstance) {
    router.push(`?`)
}