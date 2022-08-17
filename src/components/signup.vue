<template>
 <div className="login">
   <h2 class=""  style="color:#FF7A22; font-size:30px">Oriels</h2>
      <div className='contact row'>
        
        <div className='col-12'><h2>Create an account</h2>
          <p>Please create account to continue</p>
        </div>
        <div className='col-l2'>
            <div className="form-floating mb-3 ">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" v-model="this.username"/>
            <label for="floatingInput">Your Name</label>
          </div>
          <div className="form-floating mb-3 ">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" v-model="this.email"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" v-model="this.pwd"/>
            <label for="floatingPassword">Password</label>
          </div>
        </div>
          <div className="accountsignup">
            <span>Already have an Account ? <router-link to="/login" style="color:#FF7A22; text-decoration:none;">Login</router-link> </span>
          </div>

        <button type="button" className="btn  mt-3 ml-3" @click="signup">
          Login</button>

      </div>
      <div>
          {{this.error ? this.error : null}}
      </div>
       <div>
          {{this.success ? this.success : null}}
      </div>
    </div>
</template>

<script>
import { auth } from '../firebaseconfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default {
  name: 'App',
  components: {
   
  },
  data(){
    return{
  email:"",
    pwd:'',
    username:'',
    error:'',
    success:''
    }
  

  },
  methods:{
   async signup() {
 
    

    if(this.email === "" || this.password === ""){
      alert("empty")
      this.error="Fields are empty"
    }
    else if(this.pwd.length < 6){
      this.error="Password length must be greater than 6 characters"
    
    }
   else{
    try{
      await createUserWithEmailAndPassword(auth,this.email,this.pwd).then((response)=>{

        console.log(response.user.refreshToken)
        this.sucess="Account created successfully"
        localStorage.setItem('token', JSON.stringify(response.user.refreshToken))
        
      });
    
   }
   catch(err){
  
   console.log(err)
   
   }
   }
    }

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
