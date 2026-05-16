export function formatPhone(phone: string): string {
    const cleaned = phone.replace(/\D/g, '') // faqat raqamlar: 998772530707
    
    return `+${cleaned.slice(0, 3)} (${cleaned.slice(3, 5)}) ${cleaned.slice(5, 8)} ${cleaned.slice(8, 10)} ${cleaned.slice(10, 12)}`
}