<template>
  <div class="home">
    <h1>My Posts</h1>
    <hr>
    <hr>
    <hr>
    <div v-for="post in posts">
      <h2>{{ post.text }}</h2>
      <!-- <h2>{{ post.image_url }}</h2> -->
      <img v-bind:src="post.image_url" v-bind:alt="post.image_url" /> 
      <hr>
      <!-- <button v-on:click="newPost(post)  ">New Post</button> -->
      <h6><button v-on:click="deletePost(post)  ">Delete Post</button></h6>
      <hr>
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
    if (!this.$parent.isLoggedIn()) {
      this.$router.push("/login")
    }
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
    },
  }
};
</script>



