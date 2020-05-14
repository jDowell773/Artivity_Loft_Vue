<template>
  <div class="home">
    <h1>All Posts</h1>
    <hr>
    <hr>
    <hr>
    <div v-for="post in posts">
      <h2>{{ post.text }}</h2>
      <button v-on:click="deletePost(post)  ">Delete Post</button>
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
      posts: []
    };
  },
  created: function() {
    axios.get("/api/users/"+this.$route.params.id).then(response => {
      console.log(response.data)
      this.posts = response.data.posts;
    });
  },
  methods: {
    deletePost: function(thePost) {
      console.log('deleting the post..')
      axios.delete('/api/posts/' + thePost.id).then(response => {
        console.log(response.data)
        var index = this.posts.indexOf(thePost)
        this.posts.splice(index, 1)
      })
    }
  }
};
</script>



