
const months=[
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr"
]




export default function DateUzFormat(date:Date|string):string{
    const form=new Date(date)

    return `${months[form.getMonth()]} ${form.getDay()}, ${form.getFullYear()}`

}