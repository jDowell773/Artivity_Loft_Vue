<template>
  <div class="new_post">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Make a new post</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Type here:</label> 
          <input type="text" class="form-control" v-model="type_here">
          <hr>
          <label>Place image here:</label>
          <input type="text" class="form-control" v-model="image_url">

          <!-- <img v-bind:src="photo.url" v-bind:alt="photo.name" /> -->

        </div>
        <input type="submit" class="btn btn-primary" value="Post">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      type_here: "",
      image_url: "",
      errors: []
    };
  },
  created: function() {
    if (!this.$parent.isLoggedIn()) {
      this.$router.push("/login")
    }
    
  },
  methods: {
    submit: function() {
      var params = {
        text: this.type_here,
        image_url: this.image_url
      };
      axios
        .post("/api/posts", params)
        .then(response => {
          this.$router.push("/users/current");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>

