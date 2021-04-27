export function setProjects(state, projects){
    console.log(projects);
    state.projects = projects
}

export function addProject(state, projects){
    console.log(projects);
    state.projects.cuantos= state.projects.cuantos +1;
    state.projects.proyecto.push(projects.proyecto)
}
export function modifyProject(state, projects){
    console.log(projects)
    var i=0
    state.projects.proyecto.forEach(element => {
        if(element._id==projects.proyecto._id){
            state.projects.proyecto[i]=projects.proyecto
        }
        i=i+1
    });

}
