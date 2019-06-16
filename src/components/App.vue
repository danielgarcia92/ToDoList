<template>
   <div id="app" class="container">
      <h1>Curso de Vue</h1>

      <router-link to="/">DashBoard</router-link>
      <router-link to="/tasks">Tareas</router-link>

      <keep-alive>
         <router-view></router-view>
      </keep-alive>

      <footer class="footer">
         <p>&copy Daniel García</p>
      </footer>

   </div>
</template>

<script>

   export default {
      //
   };

</script>

<style lang="scss">
   @import "../sass/app";

   body {
      margin: 10px;
   }

   .container {
      max-width: 650px;

      a {
         cursor: pointer;
         text-decoration: none;
      }

      h2 {
         margin-bottom: 20px;
      }

      footer {
         margin: 40px 0;
         padding-top: 20px;
         border-top: 1px solid #ccc;
         color: #999;
      }
   }

</style>

