<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">ARTIVITY LOFT</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <!-- <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a> -->
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link" href="/home">Home</a>
      </li> -->
      <li class="nav-item">
        <a class="nav-link" href="/main_board">Main Board</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Authentication
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
           <a v-if="!isLoggedIn()" class="dropdown-item" href="/login">Login</a> |

           <a v-if="isLoggedIn()" class="dropdown-item" href="/logout">Logout</a>

          <div class="dropdown-divider"></div>
          <!-- <a v-if="!isLoggedIn()" class="dropdown-item" href="/signup">Sign Up</a> -->
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/new_post">New Post</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/users/current">My Profile</a>
      </li>
      <!-- <li class="nav-item">
        <a class="nav-link disabled" href="/new_post" tabindex="-1" aria-disabled="true">New Post</a>
      </li> -->
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="search users" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

    <!-- Header -->
<section id="header">
  <header>
    <h1>Artivity Loft</h1>
    <p>Welcome to Artivity Loft!</p>
  </header>
  <footer>
    <a href="#banner" class="button style2 scrolly-middle">Your daily source of creative arts news!</a>
  </footer>
</section>

<!-- Banner -->
<section id="banner">
  <header>
    <h2>Artivity Loft</h2>
  </header>
  <p>Created to keep artists connected through music, theatre, performing arts & creative arts.</p>
  
  <footer>
    <a href="#footer" class="button style2 scrolly">STAY CONNECTED!</a>
  </footer>
</section>

<p v-if="isLoggedIn()">Currently Logged In</p>
<p v-else-if="!isLoggedIn()">I am NOT Logged In</p>


<router-view/>


<!-- Banner -->
<section id="banner">
  <header>
    <h2>Artivity Loft</h2>
  </header>
  <p>Your daily source of music, theatre, & creative arts news. Artivity Loft is a great way to stay connected with other artists & learn about upcoming events.</p>
  <!-- <p>Created by Jonathan Dowell</p> -->
  <footer>
    <a href="#header" class="button style2 scrolly">STAY CONNECTED!</a>
  </footer>
</section>



<section id="footer">
<ul class="icons">
  <!-- <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li> -->
  <!-- <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li> -->
  <li><a href="#" class="icon brands fa-google-plus-g"><span class="label">Google+</span></a></li>
  <!-- <li><a href="#" class="icon brands fa-pinterest"><span class="label">Pinterest</span></a></li> -->
  <li><a href="https://github.com/jDowell773" class="icon brands fa-github"><span class="label">Github</span></a></li>
  <!-- <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li> -->
  <li><a href="https://www.linkedin.com/in/jonathan-dowell773/" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>
</ul>
<div class="copyright">
  <ul class="menu">
    <li>&copy; Untitled. All rights reserved.</li><li>Created by: <a href="https://www.linkedin.com/in/jonathan-dowell773/">Jonathan Dowell</a></li>
  </ul>
</div>
</section>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(54, 165, 202);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>

export default {
  methods: {
    isLoggedIn: function() {
      console.log(' i am checking if i\'m logged in')
      if (localStorage.getItem("jwt")) {
        return true 
      } else {
        return false
      }
    }
  }
}
</script>