import domModule from './helpers/dom.js'
import domEventsModule from './helpers/domevents.js'
import pageEvents from './helpers/events.js'
import seeder from './helpers/seeder.js'
import {Person} from '../js/person.js'

let people = []
//for testing
seeder.insertPeople(people)
//for real
const form = domModule.qs('#form')
const peopleList = domModule.qs('#peopleList')
//events
domEventsModule.ael(document, 'DOMContentLoaded', true, (event) => { pageEvents.refreshPeopleList(people, peopleList) })

domEventsModule.ael(form, 'submit', true, (event) => {
    const person = new Person('',-1)
    //name
    try{ 
        person.name = event.target.name.value
    }
    catch{
        window.alert("Invalid name")
        return
    }
    //age
    try{ 
        person.age = event.target.age.value
    }
    catch{
        window.alert("Invalid age")
        return
    }
    people.push(person)
    pageEvents.refreshPeopleList(people, peopleList)
})

//for testing
const restore = document.querySelector('#restoreButton')
restore.addEventListener('click', (event) => {
    people = []
    seeder.insertPeople(people)
    pageEvents.refreshPeopleList(people, peopleList)
})