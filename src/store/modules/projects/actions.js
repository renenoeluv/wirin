export async function fetchProjects({commit},user){
    try {
        var myHeaders = new Headers();
        myHeaders.append("token",localStorage.getItem("token"));
        console.log("obteniendo proyectos");
        console.log(user)
        let url=process.env.VUE_APP_GET_PROJECT
        url=url + "idUser="+user+"&state=true"
        console.log(url)
        let res = await fetch(url,{
            method: 'GET',
            headers:myHeaders,
        });
        let resMdd = await res.json();
        commit ('projects/setProjects',resMdd,{root:true})
        return true
    } catch {
        console.log("hubo un error");
        
        return Error;
    }
}
export async function CreateProject({commit},data){
    console.log(data)
    try {
        var myHeaders = new Headers();
        myHeaders.append("token",localStorage.getItem("token"));
        myHeaders.append('Content-Type', 'application/json')
        
        console.log("ceando proyecto");
        data = await JSON.stringify(data)
        //data = await JSON.parse(data)
        console.log(data)
        //data = await JSON.stringify(data)
        console.log(data)
        let res = await fetch(process.env.VUE_APP_CREATE_PROJECT,{
            method: 'POST',
            headers: myHeaders,
                      
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
export async function UpdateProject({dispatch,commit},data){
    
    try {
        console.log("actualizando proyectos");
        let id = data._id
        
        data = await JSON.stringify(data)
        //data = await JSON.parse(data)
        
        //data = await JSON.stringify(data)
        console.log(data)
        let url =process.env.VUE_APP_UPDATE_PROJECT
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
        console.log(resMdd)
        await dispatch('fetchProjects',(localStorage.getItem("idUser")))
        commit ('projects/modifyProject',resMdd,{root:true})
        return true
    } catch {
        console.log("hubo un error");
        
        return Error;
    }
}