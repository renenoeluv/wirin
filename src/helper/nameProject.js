import store from '@/store'
export function test(name){
    let fa = projects();
    var i=0
    var r=true
    while(r && i<fa.length){
        if(fa[i].nombre===name){
            r=false
        }
        i=i+1
    }
    return r
}

function projects(){
    return store.state.projects.projects.proyecto;
}