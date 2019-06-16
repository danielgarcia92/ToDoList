<template>
   <div id="app" class="container">
      <h1>Curso de Vue</h1>

      <app-tasks></app-tasks>

      <footer class="footer">
         <p>&copy Daniel García</p>
      </footer>

   </div>
</template>

<script>
   import Tasks from 'components/Task/Tasks'

   export default {
      components: {
         'app-tasks': Tasks
      }
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

