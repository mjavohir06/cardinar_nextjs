export interface productDetailType {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "status": Status_Enum,
    "isPremium": true,
    "images": imagetype[]
}

interface imagetype {
    "id": number,
    "image": string,
    "position": number
}

 enum Status_Enum {
    NEW = "new",
    SALE = "sale",
    HIT = "hit"
}