export function formatPrice(price: string | number) {
  return Number(price)
    .toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace(/,/g, " ")
}