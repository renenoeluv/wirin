export function setProjects(state, projects){
    console.log(projects);
    state.projects = projects
}

export function addProject(state, projects){
    console.log(projects);
    state.projects.cuantos= state.projects.cuantos +1;
    state.projects.proyecto.push(projects.proyecto)
}
