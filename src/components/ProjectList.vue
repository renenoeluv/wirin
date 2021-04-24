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
        </div>
        <b-alert v-else show variant="info">no hay proyectos para mostrar</b-alert>
        
    </div>   
    
</template>

<script>
    import {mapActions,/*mapState,/*mapMutations*/} from 'vuex'
    import ProjectItem from './ProjectItem'
    import store from '@/store'
    
    export default {
        name:'projeclist',
        components:{
            ProjectItem
               
        },
        mounted(){
            this.fetchProjects()
        },
        data(){
            return{
                paginate:['projects'],
                perPage: 50
            }
            
        },
        computed:{
            projects(){
                return store.state.projects.projects.proyecto
            }

        },
        methods:{
            ...mapActions('projects',['fetchProjects']),
            openProject(project){
                console.log(project)
                localStorage.setItem("idProject",project)
                return this.$router.push('/project')//devuelve vista de projecto
            }
        }
    }
</script>