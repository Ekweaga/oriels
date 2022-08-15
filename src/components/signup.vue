<template>
 <div className="login">
   <h2 class=""  style="color:#FF7A22; font-size:30px">Oriels</h2>
      <div className='contact row'>
        
        <div className='col-12'><h2>Create an account</h2>
          <p>Please create account to continue</p>
        </div>
        <div className='col-l2'>
            <div className="form-floating mb-3 ">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Your Name</label>
          </div>
          <div className="form-floating mb-3 ">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>
        </div>
          <div className="accountsignup">
            <span>Already have an Account ? <router-link to="/login" style="color:#FF7A22; text-decoration:none;">Login</router-link> </span>
          </div>

        <button type="button" className="btn  mt-3" >
          Login</button>

      </div>
    </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
