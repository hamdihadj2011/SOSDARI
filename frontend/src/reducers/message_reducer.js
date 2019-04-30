export default function(state={},action){
    switch(action.type){

        case 'ADD_MESSAGE':
        return{
            ...state,
            newMsg:action.payload
        }
        case 'GET_MESSAGE':
        return{
            ...state,
            listMsg:action.payload
        }

        default:
        return state
    }
}


