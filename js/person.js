class Person {
    #name
    #age
    constructor(n, idd){
        this.#name = n
        this.#age = idd
    }
    get name(){
        return this.#name
    }
    get age(){
        return this.#age
    }
    set name(name){
        if(name.length == 0) throw 'Invalid name'
        this.#name = name
    }
    set age(age){
        if(!age || age < 0 || age > 120) throw 'Invalid age'
        this.#age = age
    }
}

export {Person}