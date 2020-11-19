<template>
  <v-main>
    <v-layout row wrap>
       <v-container
        class="mt-10"
       >
            <v-row
            align="center" justify="center"
            >
            <v-col cols="12" xs="8" sm="8" md="8">
                <v-card
                    color="orange lighten-5"
                    elevation-12
                >
                    <v-card-title primary-title class="brown darken-1 justify-center">
                        <div>
                            <h3 class="headline font-weight-bold black--text text--accent-4">CREATE QUERY</h3>
                        </div>
                    </v-card-title>
                    <v-form
                        ref="form"
                        v-model="valid"
                    
                    >
                        <v-card-text>
                            <v-text-field
                                filled
                                color="orange darken-4"
                                label="Title"
                                :rules="titleRules"
                                v-model="query.title"
                            >                         
                            </v-text-field>
                            <!-- <v-textarea
                                label="Body"
                                value="Enter the details here"
                            >
                            </v-textarea> -->
                            <vue-editor v-model="query.body"></vue-editor>
                            <v-combobox
                                v-model="query.tags"
                                :items="items"
                                :search-input.sync="search"
                                :value="comboValue" 
                                label="Add some tags"
                                multiple
                                small-chips
                                required
                            >
                                <template v-slot:no-data>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <v-list-item-title>
                                                No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                                            </v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </template>
                            </v-combobox>

                        </v-card-text>
                        <div class="text-center mab-5">
                            <v-btn @click.prevent="createQuery" :disabled="!valid" rounded large width="300" color="yellow darken-1">CREATE</v-btn>
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
import '../data/tags'
import { tagnames } from '../data/tags';
export default {
    data() {
        return {
            valid: true,
            items: tagnames,
            titleRules: [
                v => !!v || 'Title is required'
            ],
            comboValue: '', 
            search: null,
            user: {},
            query: {
                author: "",
                title: "",
                body: "Enter details here",
                tags: []
            }
        }
    },
    components: {
        VueEditor
    },
    methods: {
     async createQuery() {
          try {
            await axios.post('http://localhost:5000/api/query/createPost/',this.query);  
            this.$router.push({name: "Queries"});
          } catch (error) {
                console.log(error);
          }
      }  
    },
    async created() {
        const response = await axios.get('http://localhost:5000/api/user/getUserName/');
        this.user = response.data;
        this.query.author = this.user.name;
    }
}
</script>

<style scoped>

</style>