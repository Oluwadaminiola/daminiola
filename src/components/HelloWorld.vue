<template>
<div >
<div class="home" style="height: 100vh;" >
  <nav id="sidebar" >
    <button class="btn btn-menu mr-0" style="color:white;" v-on:click="closeSide" ><i class="icon ion-md-redo"></i></button>
    <div class="sidebar-header px-3" >
      <img src="../assets/img/niola.png" height="50px" >
      Daminiola.
    </div>
    <ul class="list-unstyled components" >
      <li class="py-2">
          HOME 
      </li>
      <li class="py-2">
          ABOUT 
      </li>
      <li class="py-2">
          STACK 
      </li>
      <li class="py-2">
          PROJECT 
      </li>
      <li class="py-2">
          CONTACT ME 
      </li>
    </ul>
  </nav>
  <div id="content" style="height: 100vh;" >
    <nav class="navbar navbar-expand-lg nann" >
      <button class="btn btn-menu" v-on:click="openSide" >
        <i class="icon ion-md-menu"></i>        
      </button>
    </nav>
    <div class="container" >
      <div class="row" >
      <div class="col-lg-12" >

      </div>
    </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods: {
    openSide(){
      document.getElementById('sidebar').style.width = '100px';
      document.getElementById('content').style.marginLeft = '100px';
    },
    closeSide(){
      document.getElementById('sidebar').style.width = '0';
      document.getElementById('content').style.marginLeft = '0';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
