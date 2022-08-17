<template>
 <nav class="navbar navbar-expand-lg navbar-light bg-light shadow" >
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style="color:#FF7A22; font-size:30px">Oriels</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >
      <div class="navbar-nav" >
        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        <router-link class="nav-link" to="/aboutus">About Us</router-link>
        <router-link class="nav-link" to="/login">Login</router-link>
       
      </div>
    </div>
  </div>
</nav>
</template>

<script>


export default {
  name: 'NavbarComponent',
  components: {
   
  }
}
</script>

<style>
nav{
  position: sticky;
  top:0;
  left:0;
  margin-top:-55px;
}
</style>
