import store from '@/store'
export function dataP(idp){
    let fa = projects();
    var i=0
    var r=true
    while(r && i<fa.length){
        if(fa[i].idProyecto===idp){
            r=false
        }
        i=i+1
    }
    console.log(fa[i-1])
    return fa[i-1]
}

function projects(){
    return store.state.projects.projects.proyecto;
}