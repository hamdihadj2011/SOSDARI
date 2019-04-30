export default function(state={},action){
    switch(action.type){

        case 'SIGN_USER':
        return{
            ...state,
            user:action.payload
        }
        case 'GET_USERS':
        return{
            ...state,
            user:action.payload
        }

        default:
        return state
    }
}
