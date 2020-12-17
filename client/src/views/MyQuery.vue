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
                  {{myquery.title}}
                </v-card-title>
                <v-card-text v-html="myquery.body">
                </v-card-text>
                <v-card-actions>
                  <v-chip-group
                    v-for="tag in myquery.tags"
                    v-bind:key="tag"
                    column
                  >
                    <v-chip color="yellow darken-1">
                      {{tag}}
                    </v-chip>
                  </v-chip-group>
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-card-actions>
                  <p class="font-weight-bold">No of Answers: {{myquery.no_of_answers}}</p>
                </v-card-actions>
              </v-card>
              <v-divider>
              </v-divider>    
                          
              <v-list 
                class="overflow-y-auto"
                color="orange lighten-5"
                v-if="myquery.answers && myquery.answers.length"
              >
              <h1 class="headline font-weight-bold:">
                 Answers
              </h1>
                <template
                  v-for="(answer, index) in myquery.answers"
                >
                  <v-list-item
                    v-bind:key="index"
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
                        <v-card-actions>
                          <v-btn
                            class="ma-2"
                            icon
                            color="green"
                            @click="upvoteVote(answer._id)"
                          >
                            <v-icon>mdi-thumb-up</v-icon>
                          </v-btn>
                            {{answer.vote}}
                          <v-btn
                            class="ma-2"
                            icon
                            color="red"
                            @click="downvoteVote(answer._id)"
                          >
                            <v-icon>mdi-thumb-down</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
  </v-main>
</template>

<script>
import axios from 'axios';

async function upvote(id) {
      try {
        await axios.patch('/api/query/upvote/'+id);
      } catch (error) {
        console.log(error);
      }
}

async function downvote(id) {
      try {
        await axios.patch('/api/query/downvote/'+id);
      } catch (error) {
        console.log(error);
      }
}
export default {
  data() {
    return {
      id: this.$route.params.queryId,
      myquery: {},
      user: {}
    }
  },
  methods: {
    async upvoteVote(id) {
      upvote(id)
      // update the view
      const res = await axios.get('/api/user/getUsername/');
      this.user = res.data;
      const response = await axios.get('/api/query/user/'+this.user.name+'/'+this.id);
      this.myquery = response.data;
    },
    async downvoteVote(id) {
      downvote(id)
      
      // update the view
      const res = await axios.get('/api/user/getUsername/');
      this.user = res.data;
      const response = await axios.get('/api/query/user/'+this.user.name+'/'+this.id);
      this.myquery = response.data;
    }
  },
  async created() {
    const res = await axios.get('/api/user/getUsername/');
    this.user = res.data;
    const response = await axios.get('/api/query/user/'+this.user.name+'/'+this.id);
    this.myquery = response.data;
  }
}
</script>

<style>

</style>