<template>
  <v-layout align-center justify-center>
    <v-main>
      <v-container align-center mt-10>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4">
            <v-card
              color="orange lighten-5"
              elevation="12"
            >
              <v-card-title primary-title class="brown darken-1 justify-center">
                <div>
                  <h3 class="headline font-weight-bold black--text text--accent-4">LOGIN</h3>
                </div>
              </v-card-title>
              <v-snackbar v-if="error" timeout="3000" v-model="formState" color="error">{{error}}</v-snackbar>
              <v-form
                ref="form"
                v-model="valid"
              >
                <v-card-text>
                      <v-text-field
                        color="orange accent-4"   
                        label="Email" 
                        type="text"
                        v-model="user.email"
                        :rules="emailRules"
                        filled           
                        required
                      >
                      </v-text-field>
                      <v-text-field
                        color="orange accent-4"   
                        label="Password"
                        type="password" 
                        v-model="user.password"
                        :rules="passwordRules"
                        filled           
                        required
                      >
                      </v-text-field>
                </v-card-text> 
                <div class="text-center mab-5">
                  <v-btn @click="loginUser" :disabled="!valid" rounded large width="300" color="yellow darken-1">Log in</v-btn>
                </div>
              </v-form>
              <div class="text-center mt-4">
                <router-link to="/register"><p class="text-center black--text font-weight-bold">Create Account?</p></router-link>    
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      formState: false,
      valid: true,
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/.test(v) || 'Password must contain minimum of 8 characters with aleast a number and a special character'
      ],
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    loginUser() {
      this.$refs.form.validate();
      this.formState = true;
      this.login(this.user).then(res => {
        if(res.data.success) {
          this.$router.push('/queries');
        }
      }).catch(err => {
        console.log(err);
      });
    }
  },
  computed: {
    ...mapGetters(['error'])
  }
}
</script>

<style scoped>

</style>