<template>
  <v-main>
      <v-layout
        row
        wrap
      >
        <v-container
          class="mt-10"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12" xs="8" md="8"
            >
              <v-card
                color="orange lighten-5"
                
                elevation-12
              >
                <v-card-title
                  primary-title class="font-weight-bold headline"
                >
                  {{query.title}}
                </v-card-title>
                <v-card-text v-html="query.body">
                </v-card-text>
                <v-card-actions>
                  <v-chip-group
                    v-for="tag in query.tags"
                    v-bind:key="tag"
                    column
                  >
                    <v-chip color="yellow darken-1">
                      {{tag}}
                    </v-chip>
                  </v-chip-group>
                </v-card-actions>
                <v-card-actions>
                  <p class="ma-2 font-weight-bold">No of Answers: {{query.no_of_answers}}</p>
                  <v-spacer></v-spacer>
                    Asked by, <span class="font-weight-bold">{{query.author}}</span>
                </v-card-actions>
              </v-card>
              <v-divider>
              </v-divider>    
                          
              <v-list 
                class="overflow-y-auto"
                color="orange lighten-5"
                v-if="query.answers && query.answers.length"
              >
              <h1 class="headline font-weight-bold:">
                 Answers
              </h1>
                <template
                  v-for="answer in query.answers"
                >
                  <v-list-item
                    v-bind:key="answer.answer"
                  >
                    <v-list-item-content>
                      <v-card
                        width="600px"
                        color="orange lighten-5"
                        elevation-12
                      >
                      <v-card-title class="subtitle-1">
                      By, {{answer.ans_user}}
                      </v-card-title>
                        <v-card-text
                         v-html="answer.answer"
                        >
                        </v-card-text>
                      </v-card>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
              <v-card
              color="orange lighten-5"
              elevation-12
              >
                <v-card-title primary-title class="brown darken-1 justify-center">
                  <div>
                    <h3 class="headline font-weight-bold black--text text--accent-4">Post Answer</h3>
                  </div>
                  </v-card-title>
                <v-form
                  ref="form"
                  v-model="valid"
                >
                  <v-card-text>
                    <vue-editor v-model="answer.answer"></vue-editor>
                  </v-card-text>
                  <div class="text-center mab-5">
                    <v-btn @click.prevent="postAnswer" :disabled="!valid" rounded large width="300" color="yellow darken-1">Post Answer</v-btn>
                  </div>
                </v-form>
                <v-card-actions> </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
  </v-main>
</template>

<script>
import { VueEditor } from "vue2-editor";
import axios from 'axios';
export default {
  data() {
    return {
      valid: true,
      id: this.$route.params.queryId,
      query: {},
      answer: {
        ans_user: "",
        answer: "Enter the answer here"
      }
    }
  },
  components: {
    VueEditor
  },
  async created() {
    const response = await axios.get('/api/query/'+this.id);
    this.query = response.data;
    const res = await axios.get('/api/user/getUserName/');
    this.user = res.data;
    this.answer.ans_user = this.user.name;
  },
  methods: {
    async postAnswer() {
      try {
        await axios.post('/api/query/'+this.query.author, this.answer);
        this.$router.go(this.$router.currentRoute)
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>

</style>