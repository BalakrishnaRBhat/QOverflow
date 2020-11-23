<template>
  <div>
    <v-app-bar
      dense
      color="orange accent-4"
      elevation-12
      fixed
  >
    <v-app-bar-nav-icon v-if="isLoggedIn" @click.stop="check"></v-app-bar-nav-icon>
    <v-toolbar-title @click="titlebtn">QOverflow</v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer
    app
    v-model="drawer"
    temporary
    class="orange lighten-5"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          QOverflow
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    
    <v-list
      dense
      
    >
      <v-list-item-group
      v-model="selectedItem"
        color="yellow darken-4"
      >
        <v-list-item
        link
        to="/createQuery"  
        >
          <v-list-item-icon>
            <v-icon>mdi-pencil</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Create Query</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
        link
        to="/queries"  
        >
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Queries</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
        link
        v-bind:to="'/myqueries/'+user.name"  
        >
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>My Queries</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
        link
        to="/profile"  
        >
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn @click.prevent="logoutUser" block color="yellow darken-1">
          Logout <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
export default {
  data () {
    return {
      state: true,
      drawer: false,
      group: null,
      selectedItem: 1,
      user: {}
    }
  },
  watch: {
    group() {
      this.drawer = false;
    },
    
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    async check() {
      if(this.isLoggedIn) {
        this.drawer = !this.drawer;
        const response = await axios.get('http://localhost:8000/api/user/getUserName/');
        this.user = response.data;
      }
    },
    titlebtn() {
      if(!this.isLoggedIn) {
        this.$router.push('/');
      }
    },
    logoutUser() {
      this.logout();
    },
    ...mapActions(['logout']),
  }
}
</script>

<style scoped>

</style>