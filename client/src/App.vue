<template>
  <v-app id="app">
    <v-main class="main">
      <Header></Header>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    
  }),
};
</script>

<style scoped>
.main {
  background-image: url('./assets/bgimage.jpg');
  background-size: cover;
}
</style>
