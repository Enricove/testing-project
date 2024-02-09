import { OrderType, UserType } from "./esempio/types"

export const newOrder = (user: UserType) =>{

    //validation
    if(user.name.length==0) throw new TypeError("invalid name");
    if(user.surname.length==0) throw new TypeError("invalid surname");
    if(user.codiceFiscale.length!=16) throw new TypeError ("invalid codice fiscale");
    if(user.eMail.length==0) throw new TypeError ("invalid email");
    if(user.eMail.indexOf("@")==-1) throw new TypeError ("invalid email");
    if(user.eMail.indexOf(".")==-1) throw new TypeError ("invalid email");
    //if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.eMail)) throw new Error("invalid email");

    const now: Date = new Date
    const order : OrderType = {
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

