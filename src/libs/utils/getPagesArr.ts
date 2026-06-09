export function getPagesArr(totalPages: number, currentPage: number) {
    if (totalPages <= 7) {
        return Array.from(
            { length: totalPages },
            (_, i) => i + 1
        )
    }

    const pages: (number | string)[] = [1, 2, 3]

    if (currentPage > 3 && currentPage < totalPages - 2) {
        if(currentPage!==4){pages.push("...")
        pages.push(
            currentPage - 1,
            currentPage,
            currentPage + 1
        )}
        else{
            pages.push(currentPage,currentPage+1)
        }
    }

    if (currentPage >= totalPages - 2) {
        pages.push("...")
        pages.push(
            totalPages - 2,
            totalPages - 1
        )
    }

    if(totalPages-2>currentPage) pages.push("...")
    pages.push(totalPages)

    return pages
}