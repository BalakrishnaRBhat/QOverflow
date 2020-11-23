<template>
  <v-main>
      <v-layout
        row
        wrap
      >
        <v-container align-center mt-10>
          <v-row
            align="center" justify="center"
          >
            <v-col
              cols="12" md="4"
            >
              <v-card
                color="orange lighten-5"
                elevation="12"
              >
                <v-card-title primary-title class="brown darken-1 justify-center">
                  <div>
                    <h3 class="headline font-weight-bold black--text text--accent-4">My Profile</h3>
                  </div>
                </v-card-title>
                <v-card-text>
                  <div>
                    <v-simple-table class="orange lighten-5">
                      <template v-slot:default>
                        <tbody>
                          <tr>
                            <td>
                              <h3 class="font-weight-bold">Username</h3>
                            </td>
                            <td>
                              {{user.name}}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h3 class="font-weight-bold">Email</h3>
                            </td>
                            <td>
                              {{user.email}}
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
  </v-main>
</template>
    
<script>
import axios from 'axios';
export default {
  data() {
    return {
      user: {}
    }
  },
  async created() {
    const response = await axios.get('http://localhost:8000/api/user/profile/');
    this.user = response.data.user;
  }
}
</script>

<style>

</style>