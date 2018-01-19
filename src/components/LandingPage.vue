<template>
    <div>
        <h1>This is a demo for calling popit API using vue.js</h1>
        <p>This works by calling the API using the browser. We have CORS enabled on our API, currently <a href="http://xip.io/">xip.io</a>, github.io is whitelisted. So you can experiment using this domains.</p>
        <h2> Here's the demo available</h2>
        <div>
            <md-card>
                <md-card-header>
                    <div class="md-title">Persons List on cards</div>
                </md-card-header>
                <md-card-action>
                    <md-button href="#/persons">Check it out</md-button>>
                </md-card-action>
            </md-card>
        </div>

    </div>
</template>
<script>
export default {
  name: 'Landing Page'
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
