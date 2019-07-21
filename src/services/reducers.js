function reducer(state, action){
    switch(action.type){
        case 'loadData':
            return state = action.data
        case 'setData':
            return state = [...state, action.elem]
        case 'removeData':
            return state.filter((elem)=>{
                return state.indexOf(elem) !== action.index
            })
        default:
            throw new Error()
    }
}

export default reducer