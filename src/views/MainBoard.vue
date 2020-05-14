<template>
  <div class="home">
    <h1>Welcome to the Main Board! Your daily source of music & performing arts related news!</h1>
    <hr>
    <div v-for="post in posts">
      <h2>{{ post.text }}</h2>
      <hr>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      posts: [],
    };
  },
  created: function() {
    axios.get("/api/users/12").then(response => {
      console.log(response.data)
      this.posts = response.data.posts;
    });
  },
  methods: {}
};
</script>
