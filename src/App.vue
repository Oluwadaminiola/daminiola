<template>
  <div id="app">
    <div class="home"  >
    <nav id="sidebar" >
      <button class="btn btn-menu2 mr-0" style="color:white;" v-on:click="closeSide" ><i class="icon ion-md-redo"></i></button>
      <!-- <div class="sidebar-header px-4" >
        <img :src="require('@/assets/img/p2.png')" height="40px" >
        
      </div> -->
      <ul class="list-unstyled components mt-3" >
        <li class="p-3 my-4 text-right " :class="{'active' : $route.path == '/'}">
            <router-link to="/" style="color: white; text-decoration: none;" >Home</router-link>
        </li>
        <!-- <li class="p-3">
            <router-link to="/stack" >Stack</router-link> 
        </li> -->
        <li class="p-3 my-4 text-right" :class="{'active' : $route.path == '/projects'}" >
            <router-link to="/projects" style="color: white; text-decoration: none;" >Projects</router-link> 
        </li>
        <li class="p-3 my-4 text-right" :class="{'active' : $route.path == '/contactme'}" >
            <router-link to="/contactme" style="color: white; text-decoration: none;" >Contact Me</router-link>
        </li>
        <li class="px-3 py-2 my-1 icos text-right " >
            <a href="#" ><i class="icon ion-logo-twitter"></i></a>
        </li>
        <li class="px-3 py-2 my-1 icos text-right " >
            <a href="#" ><i class="icon ion-logo-instagram"></i></a>
        </li>
        <li class="px-3 py-2 my-1 icos text-right " >
            <a href="#" ><i class="icon ion-logo-linkedin"></i></a>
        </li>
        <li class="px-3 py-2 my-1 icos text-right " >
            <a href="#" ><i class="icon ion-logo-github"></i></a>
        </li>

      </ul>
    </nav>
    <div id="content" style="" >
      <!-- <nav class="navbar navbar-expand-lg " > -->
        <a href="#" class="brand" >
          Pelumi Oni.
          <!-- <img src="../static/PPP.png" height="50px" > -->
        </a>
        <button class="btn btn-menu ml-auto" v-on:click="openSide" >
          <i class="icon ion-md-menu"></i>        
        </button>
      <!-- </nav> -->
      <div class="" >
        
        <router-view/>
      </div>
      </div>
    </div>
  </div>
    
  
</template>

<script>
export default {
  name: 'App',
  methods: {
    openSide(){
      document.getElementById('sidebar').style.width = '80px';
      document.getElementById('content').style.marginRight = '80px';
    },
    closeSide(){
      document.getElementById('sidebar').style.width = '0';
      document.getElementById('content').style.marginRight = '0';
    }
  },
}
</script>

<style scoped>
a.brand{
  font-family: pacifico !important;
  color: black;
  font-size: 20px;
}
</style>
