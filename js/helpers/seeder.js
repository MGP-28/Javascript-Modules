import {Person} from '../person.js'

function insertPeople(outputArr){
    const arr = [
        new Person('Joao','20'),
        new Person('Pedro','22'),
        new Person('Maria','24'),
        new Person('Bea','26'),
        new Person('Jose','20'),
        new Person('Barbara','22'),
        new Person('Gonçalo','24'),
        new Person('Soraia','26')
    ]
    arr.forEach(person => {
        outputArr.push(person)
    });
}

export default {insertPeople}