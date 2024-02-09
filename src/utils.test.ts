import { AmountType, GiftcardType, OrderType, UserType } from "./esempio/types";
import { addGiftcard, getAmount, newOrder} from "./utils";

describe("testcase create order", () =>{
    
    it("create new order", () =>{
        //pass user object and gets an order object
        const user: UserType = {
            name: "enrico",
            surname: "vegliani",
            codiceFiscale: "abcabc12a01f205a",
            eMail: "mail@example.com"
        }
        const order: OrderType = newOrder(user);
        expect(order.user).toBe(user);
        expect(order.creationDate).toBe(order.updateDate);
    })

    it("create order with no name", () =>{
        //pass wrong user and expect error
        const user: UserType = {
            name: "",
            surname: "vegliani",
            codiceFiscale: "abcabc12a01f205a",
            eMail: "mail@example.com"
        }
        
        expect(() =>newOrder(user)).toThrow("invalid name");
    })

    it("create order with no surname", () =>{
        //pass wrong user and expect error
        const user: UserType = {
            name: "enrico",
            surname: "",
            codiceFiscale: "abcabc12a01f205a",
            eMail: "mail@example.com"
        }
        expect(() => newOrder(user)).toThrow("invalid surname");
    })

    it("create order with no codice fiscale", () =>{
        //pass wrong user and expect error
        const user: UserType = {
            name: "enrico",
            surname: "vegliani",
            codiceFiscale: "",
            eMail: "mail@example.com"
        }
        expect(() =>newOrder(user)).toThrow("invalid codice fiscale");
    })

    it("create order with no email", () =>{
        //pass wrong user and expect error
        const user: UserType = {
            name: "enrico",
            surname: "vegliani",
            codiceFiscale: "abcabc12a01f205a",
            eMail: ""
        }
        expect(() =>newOrder(user)).toThrow("invalid email");
    })

    it("create order with wrong email", () =>{
        //pass wrong email and expect error
        const user: UserType = {
            name: "enrico",
            surname: "vegliani",
            codiceFiscale: "abcabc12a01f205a",
            eMail: "mailsbagliata.com"
        }
        expect(() =>newOrder(user)).toThrow("invalid email");
     })

    it("create order with wrong codice fiscale", () =>{
       //pass wrong codice fiscale and expect error
       const user: UserType = {
        name: "enrico",
        surname: "vegliani",
        codiceFiscale: "codice fiscale errato",
        eMail: "mail@example.com"
        }
        expect(() =>newOrder(user)).toThrow("invalid codice fiscale");
    })
    
    
})
describe("testcase add giftcard", ()=>{

    const user: UserType = {
            name: "enrico",
            surname: "vegliani",
            codiceFiscale: "abcabc12a01f205a",
            eMail: "mail@example.com"
        }

    let order: OrderType

    beforeEach(()=>{
         newOrder(user);
    })

    it("add one giftcard", () =>{
        const giftCard: GiftcardType= {
            amount: 1,
            value: 10,
            type: "cartacea"
        }
        order = addGiftcard(giftCard)

        expect(order.giftCard10).toBe(1);
        expect(order.creationDate!=order.updateDate).toBe(true);
    })

    it("add 3 giftcards", () =>{
        const giftCard: GiftcardType= {
            amount: 1,
            value: 10,
            type: "cartacea"
        }
        addGiftcard(giftCard);
        addGiftcard(giftCard);
        order = addGiftcard(giftCard);

        
        expect(order.giftCard10).toBe(3);
    })

    it("add different gift cards", () =>{
        const giftCard1: GiftcardType= {
            amount: 1,
            value: 10,
            type: "cartacea"
        }

        const giftCard2: GiftcardType= {
            amount: 4,
            value: 100,
            type: "digitale"
        }
        addGiftcard(giftCard1);
        addGiftcard(giftCard1);
        order = addGiftcard(giftCard2);

        expect(order.giftCard10).toBe(2);
        expect(order.giftCard100).toBe(4);
    })

    it("add gift card of invalid type", () =>{
        const giftCard: GiftcardType= {
            amount: 1,
            value: 10,
            type: "inesistente"
        }
        expect(() => {addGiftcard(giftCard)}).toThrow("invalid giftcard type")
    })

    it("add gift card of invalid value", () =>{
        const giftCard: GiftcardType= {
            amount: 1,
            value: 25,
            type: "cartacea"
        }
        expect(() => {addGiftcard(giftCard)}).toThrow("invalid giftcard value")
    })

    it("add gift card of invalid amount", () =>{
        const giftCard: GiftcardType= {
            amount: 1.5,
            value: 25,
            type: "cartacea"
        }
        expect(() => {addGiftcard(giftCard)}).toThrow("invalid giftcard amount")
    })

    it("get amount", () =>{
        const giftCard1: GiftcardType= {
            amount: 1,
            value: 10,
            type: "cartacea"
        }

        const giftCard2: GiftcardType= {
            amount: 4,
            value: 100,
            type: "digitale"
        }
        addGiftcard(giftCard1);
        addGiftcard(giftCard1);
        addGiftcard(giftCard2);
        const amount: AmountType = getAmount();
        expect(amount.totale).toBe(420);
        expect(amount.iva).toBe(92.4);
        expect(amount.daPagare).toBe(512.4);
    })

})
