export function changeInitVal(inputElement){
    console.log("this is from changeInitVal in actions",inputElement.value)
    return {
        type:"CHANGE_VAL",
        payload:{
            initialval:inputElement.value
        }
    }
}

export function changeAfterAddVal(inputElement){

    console.log("this is from changeAfterAddVal in actions",inputElement.value)
    return {
        type:"CHANGE_AFTERADDVAL",
        payload:{
            afteraddval:inputElement.value
        }
    }
}

export function changeAfterSubVal(inputElement){
    return {
        type:"CHANGE_AFTERSUBVAL",
        payload:{
            aftersubval:inputElement.value
        }
    }
}