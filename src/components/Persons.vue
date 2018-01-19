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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Persons',
  data () {
    return {
      results: [],
      errors: []
    }
  },
  created () {
    console.log('loading')
    axios.get('https://api.popit.sinarproject.org/en/persons/')
      .then(response => {
        this.results = response.data.results
      })
      .catch(e => {
        this.errors.push(e)
      })
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
