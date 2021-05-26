<template>
    <div>
        <div v-if="projects.length">
            <paginate 
                name="projects"
                :list="projects"
                :per="perPage"
                >
                <b-card-group columns>
                    <project-item
                        v-for="project in paginated('projects')"
                        :project="project"
                        :key="project.id"
                        @openProject="openProject"
                        @modal="modal"
                    >
                    </project-item>
                </b-card-group>
            </paginate>
            <paginate-links
                style="position:relative;left:50%;"
                :async="true"
                for="projects"
                :classes="{
                    'ul': 'pagination',
                    'li': 'page-item',
                    'li > a': 'page-link'
                }"
            ></paginate-links>
            
             <modelE
            :project=project_id
            :name_project=name_Project
            :action=action
            ></modelE>
        </div>
        <b-alert v-else show variant="info">No projects to show</b-alert>
        
    </div>   
    
</template>

<script>
    import {mapActions,/*mapState,/*mapMutations*/} from 'vuex'
    import ProjectItem from './ProjectItem'
    import store from '@/store'
    import modelE from './modals/modalE'
    export default {
        name:'projeclist',
        components:{
            ProjectItem,
            modelE
               
        },
        props:{
            project_id:{},
            name_Project:{},
            action:{}
        },
        mounted(){
            this.fetchProjects(localStorage.getItem("idUser"))//

        },
        data(){
            return{
                paginate:['projects'],
                perPage: 9
            }
            
        },
        computed:{
            projects(){
                return store.state.projects.projects.proyecto
            }

        },
        methods:{
            //...mapState("user",['user']),
            ...mapActions('projects',['fetchProjects']),
            openProject(project,nombre){
                console.log(project)
                localStorage.setItem("idProject",project)
                localStorage.setItem("projectName",nombre)
                return this.$router.push('/project')//devuelve vista de projecto
            },
            modal(id,name_project,action){//funcion auxiliar para modificar props
                console.log(id)
                console.log(name_project)
                console.log(action)
                this.project_id=id
                this.name_Project=name_project
                this.action=action

                
            }
        }
    }
</script>
<style scoped>
ul{
    padding-left: 0%;
}
</style>