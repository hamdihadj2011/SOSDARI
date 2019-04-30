import axios from 'axios'

export function addMessage(message){

    const request=axios.post('/ContactUs',message)
    .then(res=>res.data)
    .then(()=>alert('Message Sent'))
    return{
        type:'ADD_MESSAGE',
        payload:request
    }
}

export function getMessage(){
const request =axios.get('/admin/messages').then(res=>res.data)

return{
    type:'GET_MESSAGE',
    payload:request
}
}

export function getReclamation(){
    const request =axios.get('/admin/reclamation').then(res=>res.data)

    return{
        type:'GET_RECLAM',
        payload:request
    }
}

export function getUsers(){
    const request =axios.get('/admin/users').then(res=>res.data)

    return{
        type:'GET_USERS',
        payload:request
    }
}
export function getWorkers(){
    const request =axios.get('/admin/workers').then(res=>res.data)

    return{
        type:'GET_WORKERS',
        payload:request
    }
}

export function signUser(user){
    const request =axios.post('/user/signup',user)
    .then(res=>res.data)
    .then(()=>alert('User addedto User Collection'))

    return{
        type:'SIGN_USER',
        payload:request
    }
}

export function signWorker(worker){
    const request =axios.post('/worker/signup',worker)
    .then(res=>res.data)
    .then(()=>alert('Worker addedto Worker Collection'))

    return{
        type:'SIGN_WORKER',
        payload:request
    }
}


