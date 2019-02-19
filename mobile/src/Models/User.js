import { random } from "shorthash/shorthash";

export default class User {

    
    constructor(data=null) {
        this.data = {
            firstname: "",
            lastname: "",
            email: "",
            id: random(10),
            ...data
        };
    }
    export() { return { ...this.data }; }

    getFirstname() { return this.data.firstname; }
    setFirstname(value) { this.data.firstname=value; return this; }
    getLastname() { return this.data.lastname; }
    setLastname(value) { this.data.lastname=value; return this; }
    getEmail() { return this.data.email; }
    setEmail(value) { this.data.email=value; return this; }
    getId() { this.data.id; }


}