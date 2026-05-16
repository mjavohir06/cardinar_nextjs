

export function clickOtherPlace(
    setOpen: (param: boolean) => void
) {
    const handler = (e: MouseEvent) => {
        setOpen(false)
    }

    document.addEventListener('click', handler)

    // tozalash uchun
    return () => {
        document.removeEventListener('click', handler)
    }
}