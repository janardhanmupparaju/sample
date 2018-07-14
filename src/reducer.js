export const reducer =(state={
    initvalue:10,
    afteraddvalue:10,
    aftersubvalue:10
},action) => {
    console.log(action)
    switch(action.type){
        case "CHANGE_VAL":
        return Object.assign({},state,{initvalue:action.payload.initialval})

        case "CHANGE_AFTERADDVAL":
        return Object.assign({},state,{afteraddvalue:action.payload.afteraddval})

        case "CHANGE_AFTERSUBVAL":
        return Object.assign({},state,{aftersubvalue:action.payload.aftersubval})

        default:
        return state;
    }
}