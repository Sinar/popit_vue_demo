<template>
  <div>
      <h1>Demo on using Popit API with vue.js</h1>
      <p>This works by calling the API using the browser. We have CORS enabled on our API, currently <a href="http://xip.io/">xip.io</a>, github.io is whitelisted. So you can experiment using this domains.</p>
      <md-card v-for="result in results" :key="result.id">
          <md-card-media>
              <img v-if="result.image" :src="result.image" alt="persons">
              <img v-else src="http://via.placeholder.com/320x300">
          </md-card-media>
          <md-card-header>
              <div class="md-title">{{ result.name }}</div>
          </md-card-header>
          <md-card-expand>
              <md-card-actions>
                  <md-card-expand-trigger>
                      <md-button class="md-icon-button">
                          <md-icon>keyboard_arrow_down</md-icon>
                      </md-button>
                  </md-card-expand-trigger>
              </md-card-actions>
              <md-card-expand-content>
                  <md-card-content>
                      {{ result.summary }}
                  </md-card-content>
              </md-card-expand-content>
          </md-card-expand>
      </md-card>
      <p></p>
      <vue-paginate-al :totalPage="total" @btnClick="setPage"></vue-paginate-al>
  </div>
</template>

<script>
import axios from 'axios'
import VuePaginateAl from 'vue-paginate-al'

export default {
  name: 'Persons',
  data () {
    return {
      results: [],
      errors: [],
      total: 0,
      page: 1,
      perPage: 10
    }
  },
  created () {
    console.log('loading')
    axios.get('https://api.popit.sinarproject.org/en/persons/')
      .then(response => {
        this.results = response.data.results
        this.total = response.data.total
        this.perPage = response.data.per_page
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    setPage: function (page) {
      this.page = page
      this.fetchPersons(page)
    },
    fetchPersons: function (page) {
      console.log(page)
      axios.get('https://api.popit.sinarproject.org/en/persons/', {
        params: {
          page: page
        }
      })
        .then(response => {
          this.results = response.data.results
          this.total = response.data.total
          this.perPage = response.data.per_page
          this.page = page
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  components: {
    VuePaginateAl
  }
}
</script>
<style scoped>
.md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
.md-card-media{
    height: 300px; /* Your height here */
    overflow: hidden;
}
</style>
