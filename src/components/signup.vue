<template>
 <div className="login">
      <div className='contact row'>
        <div className='col-12'><h2>Welcome back</h2>
          <p>Please login to continue</p>
        </div>
        <div className='col-l2'>
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
            <span>Don't have an Account ? </span>
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
