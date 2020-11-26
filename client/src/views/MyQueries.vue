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
                cols="12" xs="8" md="8"
              >
              <v-toolbar class="brown darken-1 rounded">
                <v-toolbar-title class="display-1">
                  My Queries
                </v-toolbar-title>
                <v-spacer></v-spacer> 
                <v-autocomplete 
                  v-model="searchTag"
                  small
                  rounded
                  class="brown lighten-1"
                  height="50"
                  small-chips
                  :search-input.sync="search"
                  :items="items"
                  placeholder="Search by Tag"
                  hide-details 
                  single-line
                ></v-autocomplete>
              </v-toolbar>
                <v-list
                  class="overflow-y-auto"
                  color="orange lighten-5"
                >
                  <template
                    v-for="query in filteredQueries"                    
                  >
                    <v-list-item
                      v-bind:key="query._id"
                    >
                      <v-list-item-content>
                          <v-card
                            width="600px"
                            color="orange lighten-4"
                            elevation-12
                            v-bind:to="'/myquery/'+query._id"
                          >
                            <v-card-title
                              primary-title class="font-weight-bold headline"
                            >
                              {{query.title}}
                            </v-card-title>
                            <v-card-text v-html="query.body">
                            </v-card-text>
                            <v-card-actions
                            >
                            <v-chip-group
                               v-for="tag in query.tags"
                               v-bind:key="tag"
                               column
                            >
                              <v-chip
                              color="yellow darken-1">
                                {{tag}}
                              </v-chip>
                            </v-chip-group>
                            <v-spacer></v-spacer>
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
import { tagnames } from '../data/tags';
export default {
  data() {
    return {
      myqueries: [],
      search: null,
      searchTag: null,
      items: tagnames,
      author: this.$route.params.userName
    }
  },
  async created() {
    const response = await axios.get('/api/query/user/'+this.author);
    this.myqueries = response.data;
  },
  computed: {
    filteredQueries() {
      return this.myqueries.filter(query => {
        if(this.searchTag == null) {
          return query;
        } else {
          return query.tags.includes(this.searchTag);
        }
      })
    }
  }
}
</script>

<style>

</style>