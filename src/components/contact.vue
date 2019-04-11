<template>
<div>
 <div class="container" style="margin-top: 70px;">
    <v-layout row>
       <v-flex xs12 md8>
           <v-card>
             <v-card-title>
                 Feel Free to Contact Me!
             </v-card-title>
             <v-card-text>
               <v-flex>
                  <v-form>
                    <v-text-field label="Name"></v-text-field>
                    <v-text-field label="Email"></v-text-field>
                    <v-text-field label="Subject"></v-text-field>
                    <v-text-field auto-grow label="Message" rows="2"></v-text-field>
                  </v-form>
               </v-flex>
             </v-card-text>
             <v-card-actions></v-card-actions>
           </v-card>
       </v-flex>
    </v-layout>
 </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>