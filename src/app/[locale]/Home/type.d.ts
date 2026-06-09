export interface premiumProductType {
    id: number,
    title: string,
    isPremium: boolean,
    image?:string
}

export interface tovarProductType {
    id: number,
    title: string,
    price:number,
    image?:string
}