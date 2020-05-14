<template>
  <div class="home">
    <h1>Main Board</h1>
    <hr>
    <div v-for="post in posts">
      <h2>{{ post.text }}</h2>
      <hr>

      <!-- Feature 1 -->
<article id="first" class="container box style1 right">
  <a href="#" class="image fit"><img src="images/pic01.jpg" alt="" /></a>
  <div class="inner">
    <header>
      <h2>On This Day In Music:<br /></h2>
    </header>
    <p>A daily music history fact will go here.</p>
  </div>
</article>

<!-- Feature 2 -->
<article class="container box style1 left">
  <a href="#" class="image fit"><img src="images/pic02.jpg" alt="" /></a>
  <div class="inner">
    <header>
      <h2>What's new in theatre:<br /></h2>
    </header>
    <p>Latest theatre releated news will go here.</p>
  </div>
</article>


<!-- Generic -->
<!--
<article class="container box style3">
  <header>
    <h2>Generic Box</h2>
    <p>Just a generic box. Nothing to see here.</p>
  </header>
  <section>
    <header>
      <h3>Paragraph</h3>
      <p>This is a subtitle</p>
    </header>
    <p>Phasellus nisl nisl, varius id <sup>porttitor sed pellentesque</sup> ac orci. Pellentesque
    habitant <strong>strong</strong> tristique <b>bold</b> et netus <i>italic</i> malesuada <em>emphasized</em> ac turpis egestas. Morbi
    leo suscipit ut. Praesent <sub>id turpis vitae</sub> turpis pretium ultricies. Vestibulum sit
    amet risus elit.</p>
  </section>
  <section>
    <header>
      <h3>Blockquote</h3>
    </header>
    <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget.
    tempus euismod. Vestibulum ante ipsum primis in faucibus.</blockquote>
  </section>
  <section>
    <header>
      <h3>Divider</h3>
    </header>
    <p>Donec consectetur <a href="#">vestibulum dolor et pulvinar</a>. Etiam vel felis enim, at viverra
    ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
    facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
    tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
    posuere cubilia.</p>
    <hr />
    <p>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
    ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
    facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
    tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
    posuere cubilia.</p>
  </section>
  <section>
    <header>
      <h3>Unordered List</h3>
    </header>
    <ul>
      <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
      <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
      <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
      <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
    </ul>
  </section>
  <section>
    <header>
      <h3>Ordered List</h3>
    </header>
    <ol>
      <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
      <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
      <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
      <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
    </ol>
  </section>
  <section>
    <header>
      <h3>Table</h3>
    </header>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>45815</td>
            <td>Something</td>
            <td>Ut porttitor sagittis lorem quis nisi ornare.</td>
            <td>29.99</td>
          </tr>
          <tr>
            <td>24524</td>
            <td>Nothing</td>
            <td>Ut porttitor sagittis lorem quis nisi ornare.</td>
            <td>19.99</td>
          </tr>
          <tr>
            <td>45815</td>
            <td>Something</td>
            <td>Ut porttitor sagittis lorem quis nisi ornare.</td>
            <td>29.99</td>
          </tr>
          <tr>
            <td>24524</td>
            <td>Nothing</td>
            <td>Ut porttitor sagittis lorem quis nisi ornare.</td>
            <td>19.99</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3"></td>
            <td>100.00</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>
  <section>
    <header>
      <h3>Form</h3>
    </header>
    <form method="post" action="#">
      <div class="row">
        <div class="col-6 col-12-mobile">
          <input class="text" type="text" name="name" id="name" value="" placeholder="John Doe" />
        </div>
        <div class="col-6 col-12-mobile">
          <input class="text" type="text" name="email" id="email" value="" placeholder="johndoe@domain.tld" />
        </div>
        <div class="col-12">
          <select name="department" id="department">
            <option value="">Choose a department</option>
            <option value="1">Manufacturing</option>
            <option value="2">Administration</option>
            <option value="3">Support</option>
          </select>
        </div>
        <div class="col-12">
          <input class="text" type="text" name="subject" id="subject" value="" placeholder="Enter your subject" />
        </div>
        <div class="col-12">
          <textarea name="message" id="message" placeholder="Enter your message"></textarea>
        </div>
        <div class="col-12">
          <ul class="actions">
            <li><input type="submit" value="Submit" /></li>
            <li><input type="reset" class="style3" value="Clear Form" /></li>
          </ul>
        </div>
      </div>
    </form>
  </section>
</article>
-->

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
