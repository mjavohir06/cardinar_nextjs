export type PaginatedResultType<S>={
    totalPages: number;
    currentPage: number;
    nextPage?: number;
    totalCount: number;
    data: S[];
}

export type ParamSType={
    search?:string
    page?:string
    size?:string
}