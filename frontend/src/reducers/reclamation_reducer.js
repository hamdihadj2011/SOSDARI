export default function(state={},action){
    switch(action.type){

        case 'GET_RECLAM':
        return{
            ...state,
            reclam:action.payload
        }

        default:
        return state
    }
}

