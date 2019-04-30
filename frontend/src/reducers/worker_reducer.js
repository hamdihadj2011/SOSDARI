export default function(state={},action){
    switch(action.type){

        case 'SIGN_WORKER':
        return{
            ...state,
            worker:action.payload
        }
        case 'GET_WORKERS':
        return{
            ...state,
            workers:action.payload
        }

        default:
        return state
    }
}


