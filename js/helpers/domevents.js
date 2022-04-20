function ael(element, eventUser, preventDefault, functionToInsert){
    element.addEventListener(eventUser, (event) => {
        if(preventDefault) event.preventDefault()
        functionToInsert(event)
    })
}
export default {ael}