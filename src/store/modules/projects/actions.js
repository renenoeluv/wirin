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
export async function CreateProject({commit},data){
    
    try {
        console.log("ceando proyecto");
        data = await JSON.stringify(data)
        //data = await JSON.parse(data)
        console.log(data)
        //data = await JSON.stringify(data)
        console.log(data)
        let res = await fetch("http://localhost:3000/proyecto",{
            method: 'POST',
            headers: {
                        'Content-Type': 'application/json'
                        //'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      
            body:data
            
        });
        let resMdd = await res.json();
        commit ('projects/addProject',resMdd,{root:true})
        return true;
    } catch {
        console.log("hubo un error");
        
        return Error;
    }
}
export async function UpdateProject({commit},data){
    
    try {
        console.log("actualizando proyectos");
        let id = data._id
        data = await JSON.stringify(data)
        //data = await JSON.parse(data)
        console.log(data)
        //data = await JSON.stringify(data)
        console.log(data)
        let url ="http://localhost:3000/proyecto/"
        url=url+id
        console.log(url)
        let res = await fetch(url,{
            method: 'PUT',
            headers: {
                        'Content-Type': 'application/json'
                        //'Content-Type': 'application/x-www-form-urlencoded',
                      },
                      
            body:data
            
        });
        let resMdd = await res.json();
        commit ('projects/modifyProject',resMdd,{root:true})
        return true
    } catch {
        console.log("hubo un error");
        
        return Error;
    }
}