import * as util from "./util"
util.hello("TypeScript")

import { hello } from "./util"
hello("TypeScript")

interface PersonInfo {
    name: string|null,
    age: number|null,
    gender: string|null
}

class Family {
    info: PersonInfo[]

    constructor() {
        this.info = []
    }

    AddPerson(info: PersonInfo): void {
        this.info.push(info)
    }
}

const myfamily = new Family()

const me: PersonInfo = { name: "John", age: 30, gender: "male" }
const father: PersonInfo = { name: "Joe", age: 60, gender: "male" }
const mother: PersonInfo = { name: "Jane", age: 55, gender: "female" }
const sister: PersonInfo = { name: "Jessica", age: 28, gender: "female" }

myfamily.AddPerson(me)
myfamily.AddPerson(father)
myfamily.AddPerson(mother)
myfamily.AddPerson(sister)

console.log(myfamily)
