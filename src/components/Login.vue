<template>
  <div className="login">
      <h2 class=""  style="color:#FF7A22; font-size:30px">Oriels</h2>
      <div className='contact row'>
        <div className='col-12'><h2>Welcome back</h2>
          <p>Please login to continue</p>
        </div>
        <div className='col-l2'>
          <div className="form-floating mb-3 ">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" v-model="this.email"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" v-model="this.pwd"/>
            <label for="floatingPassword">Password</label>
          </div>
        </div><br><br>
          <div className="accountsignup">
            <span>Don't have an Account ? <router-link to="/signup" style="color:#FF7A22; text-decoration:none;">Sign up</router-link> </span>
          </div>

       <div> <button type="button" className="btn  mt-3" @click="login">
          Login</button></div>

      </div>
    </div>
</template>

<script>
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebaseconfig';


export default {
  name: 'App',
  components: {
   
  },
  data(){
    return{
email:'',
pwd:'',
error:''
    }
  }, 
  methods:{
      async login(){
         if(this.email === "" || this.pwd === "" ){
          this.error="Fields empty"
    }

   else{
    try{
      await signInWithEmailAndPassword(auth,this.email,this.pwd)
   
     
   }
   catch(err){
     console.log(err)
     this.error = err.message
     
   }

   }
      }
  }
}
</script>

<style>
.login{
  width:30%;
  margin-left:auto;
  margin-right:auto;
  margin-top:0px;
}
.login button{
  width:300px;
  background-color: #FF7A22;
  color:white;
}
@media screen and (max-width:768px){
  .login{
  width:90%;
  margin-left:auto;
  margin-right:auto;
  margin-top:200px;
}
}
</style>
