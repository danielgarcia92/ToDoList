<template>
   <div id="app" class="container">
      <h1>Curso de Vue</h1>

      <!--<ul class="nav nav-tabs">
         <li role="presentation" class="active"><a href="#">Home</a></li>
         <li role="presentation"><a href="#">Profile</a></li>
         <li role="presentation"><a href="#">Messages</a></li>
      </ul>-->

      <ul class="nav nav-tabs">
         <router-link tag="li" to="/" active-class="active" exact><a>DashBoard</a></router-link>
         <router-link tag="li" to="/tasks" active-class="active"><a>Tareas</a></router-link>
      </ul>

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

