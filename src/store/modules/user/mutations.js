export function auth_success(state, user){
    state.user= user.Usuario.nombre
    state.token=localStorage.getItem("token")

}
export function auth_request(state){
    state.status='success'
}

export function auth_error(state){
    state.status= 'error'
}
export function logout(state){
    state.status=''
    state.token=''
}