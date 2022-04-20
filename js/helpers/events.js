import domModule from './dom.js'
import domEventsModule from './domevents.js'

function refreshPeopleList(people, tableToBuild){
    wipePeopleList(tableToBuild)
    if(people.length != 0) buildPeopleList(people, tableToBuild)
}

function buildPeopleList(people, tableToBuild){
    tableToBuild.parentElement.classList.remove('hidden')
    for (let index = 0; index < people.length; index++) {
        addRowPerson(people, tableToBuild, [people[index].name, people[index].age], index)
    }
}

function wipePeopleList(tableToBuild){
    tableToBuild.parentElement.classList.add('hidden')
    while( tableToBuild.firstChild ) { tableToBuild.removeChild( tableToBuild.firstChild ) }
}

function removePerson(people, index, tableToBuild){
    people.splice(index, 1)
    refreshPeopleList(people, tableToBuild)
}

function addRowPerson(people, tableToAppend, contentArr, index){
    const rowToAdd = domModule.createHTMLElement('tr', [], [ ((index % 2 != 0) ? ['bg-teal-900'] : ['bg-teal-800']) ], [] )
    rowToAdd.append(buildDeleteButtonToName(people, index, tableToAppend))
    contentArr.forEach( content => rowToAdd.append( addPersonInfo(content) ) )
    tableToAppend.append(rowToAdd)
}

function buildDeleteButtonToName(people, index, tableToAppend){
    const btnRemover = domModule.createHTMLElement(
        'button', 
        [ {'name': 'index', 'value': index} ], 
        [ 'remover','border', 'rounded-md','bg-red-700', 'my-1', 'w-8', 'h-8', 'drop-shadow-2xl' ], 
        [ domModule.createHTMLElement('i', [], ['fa-regular','fa-trash-can'], []), ]
    )
    domEventsModule.ael(btnRemover, 'click', true, (event) => {
        event.stopPropagation()
        removePerson(people, event.currentTarget.getAttribute('index'), tableToAppend)
    })
    return domModule.createHTMLElement('td', [], ['p-1','flex','justify-center'], [btnRemover])
}

function addPersonInfo(contentToColumn){
    const item = domModule.createHTMLElement('div', [], ['overflow-hidden','w-full'], [document.createTextNode(contentToColumn)])
    return domModule.createHTMLElement('td', [], [], [ item ] )
}

//export

export default {
    refreshPeopleList, 
    buildPeopleList, 
    wipePeopleList, 
    removePerson, 
    addRowPerson
}