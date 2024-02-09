import { AmountType, GiftcardType, OrderType, UserType } from "./esempio/types"

let order : OrderType 
const vat = 0.22; //iva al 22%

export const newOrder = (user: UserType):OrderType => {

    //validation
    if(user.name.length==0) throw new TypeError("invalid name");
    if(user.surname.length==0) throw new TypeError("invalid surname");
    if(user.codiceFiscale.length!=16) throw new TypeError ("invalid codice fiscale");
    if(user.eMail.length==0) throw new TypeError ("invalid email");
    if(user.eMail.indexOf("@")==-1) throw new TypeError ("invalid email");
    if(user.eMail.indexOf(".")==-1) throw new TypeError ("invalid email");

    const now: Date = new Date
    order = {
        user: user,
        creationDate: now,
        updateDate: now,
        giftCard10: 0,
        giftCard20: 0,
        giftCard50: 0,
        giftCard100: 0,
    }
    
    return order;
}

export const addGiftcard = (giftcard: GiftcardType) :OrderType => {//must return order
    //validation
    if(giftcard.type!="cartacea"&&giftcard.type!="digitale") throw new TypeError("invalid giftcard type")
    if(!Number.isInteger(giftcard.amount)) throw new TypeError("invalid giftcard amount")
    if(giftcard.amount<=0) throw new TypeError("negative amount of giftcards")
    if(giftcard.value!=10&&giftcard.value!=20&&giftcard.value!=50&&giftcard.value!=100)throw new TypeError ("invalid giftcard value");

    const now: Date = new Date;
    order.updateDate = now;

    if(giftcard.value==10) order.giftCard10+=giftcard.amount;
    else if(giftcard.value==20)order.giftCard20+=giftcard.amount;
    else if(giftcard.value==50)order.giftCard50+=giftcard.amount;
    else if(giftcard.value==100)order.giftCard100+=giftcard.amount;
    return order;
}

export const getAmount = () => {
let tot : number = order.giftCard10*10+order.giftCard20*20+order.giftCard50*50+order.giftCard100*100;

    const amount: AmountType = {
        totale: tot,
        iva: tot*vat,
        daPagare: tot*(1+vat)
    }
    return amount
}
