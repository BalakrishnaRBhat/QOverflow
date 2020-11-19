<template>
  <v-main>
    <v-layout
      row
      wrap
    >
       <v-container class="mt-10">
            <v-row
            align="center"
            justify="center"
            >
              <v-col
                cols="12" sm="8" md="8"
              >
                <v-sheet
                  color="orange lighten-5"
                  class="pa-md-4 mx-lg-auto"
                  elevation="12"
                >
                  <div>
                    <h1 class="display-4 text-center brown--text text--darken-2 ">Welcome to QOverflow</h1>
                    <br>
                    <p class="headline text-center brown--text">QOverflow is an Open Community for developers 
                      and programmers.QOverflow helps developers and programmers get answers 
                      for their questions and share knowledge.
                    </p>
                    <div class="mt-10 text-center">
                      <v-btn @click="login" width="250" height="60" class="ma-2" large rounded color="yellow darken-1">
                        Login <v-icon>mdi-login</v-icon>
                      </v-btn>
                      <v-btn @click="register" width="250" height="60" class="ma-2" large rounded color="yellow darken-1">
                        Register <v-icon>mdi-account</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-sheet>
              </v-col>
          </v-row>
       </v-container>
    </v-layout>
  </v-main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    login() {
      this.$router.push({name: 'Login'});
    },
    register() {
      this.$router.push({name: 'Register'});
    }
  }
}
</script>
