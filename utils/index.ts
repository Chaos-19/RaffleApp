export function formatTransactionPrice(price:number){
    return price < 0? `-$${Math.abs(price)}`:`+$${Math.abs(price)}`
}