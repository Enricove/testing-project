export type UserType = {
    name: string
    surname: string
    codiceFiscale: string
    eMail: string
}

export type OrderType = {
    user: UserType
    creationDate: Date
    updateDate: Date
    giftCard10: number
    giftCard20: number
    giftCard50: number
    giftCard100: number
}
export type GiftcardType = {
    amount: number, 
    value: number,
    type: string
}
export type AmountType = {
    totale: number
    iva: number
    daPagare: number
}