<template>
  <div class="home">
    <h1>All Posts</h1>
    <div v-for="post in posts">
      <h2>{{ post.text }}</h2>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      posts: []
    };
  },
  created: function() {
    axios.get("/api/users/"+this.$route.params.id).then(response => {
      console.log(response.data)
      this.posts = response.data.posts;
    });
  },
  methods: {}
};
</script>


