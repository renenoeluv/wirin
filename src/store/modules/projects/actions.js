export async function fetchProjects({commit}){
    try {
        console.log("obteniendo proyectos");
        let res = await fetch("http://localhost:3000/proyecto?idUser=idu1",{
            method: 'GET',
        });
        let resMdd = await res.json();
        commit ('projects/setProjects',resMdd,{root:true})
    } catch {
        console.log("hubo un error");
        
        return Error;
    }
}