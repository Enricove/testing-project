import { OrderType, UserType } from "./esempio/types";
import { newOrder } from "./utils";

describe("testcase giftcard shop", () =>{
    
    
    it("create new order", () =>{
        //pass user oject and gets an order object
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