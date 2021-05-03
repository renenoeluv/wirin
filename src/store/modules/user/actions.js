export async function login({commit},data){
    
    try {
        commit('user/auth_request','',{root:true})
        console.log("login");
        var urlencoded = new URLSearchParams();//codifica la data para el typo de contenido requeroido(x-www...)
        urlencoded.append("email", data.email);
        urlencoded.append("password", data.password);
        let res = await fetch("http://localhost:3000/login",{
            method: 'POST',
            headers: {
                        //'Content-Type': 'application/json'
                        'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      
            body:urlencoded
            
        });
        var resMdd = await res.json();
        console.log(resMdd)
        localStorage.setItem("token",resMdd.token)
        localStorage.setItem("idUser",resMdd.Usuario.nombre)
        commit ('user/auth_success',resMdd,{root:true})
        return true;
    } catch {
        commit('user/auth_error','',{root:true})
        console.log("hubo un error");
        
        return resMdd.err;
    }
}
export function logout({commit}){
   commit('user/logout','',{root:true})
}
