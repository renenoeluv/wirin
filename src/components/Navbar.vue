<template>
<b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-brand >Welcome User</b-navbar-brand>
      <div v-if="create">
          <b-navbar-brand  v-b-toggle.sidebar-variant>Create Project</b-navbar-brand>
      </div>
      
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
        <b-nav-item-dropdown text="settings" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-navbar-brand >About</b-navbar-brand>
        <b-navbar-brand >Logout</b-navbar-brand>
        
      </b-navbar-nav>
    </b-collapse>    
    </b-navbar>
</template>
<script>
export default {
    props:['create']
}
</script>