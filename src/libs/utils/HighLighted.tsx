/**
 * Bu funksiya textni malum qismini highlight qilib beradi!
 * 
 * @param text  highlight qilinishi kerak bo'lgan text
 * @param value  highlight bo'lishi kerak bo'lgan textni bo'lagi
 * @returns highlight holatda qaytgan html element yoki text
 */
export const highlightText = (text: string, value: string) => {
    if (value == "") return text;

    const regex = new RegExp(`(${value})`, "gi");

    return text.split(regex).map((part, i) =>
        part.toLowerCase() === value.toLowerCase()
            ? <mark key={i}>{part}</mark>
            : part
    );
};