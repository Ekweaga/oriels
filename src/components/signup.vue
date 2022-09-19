<template>
 <div className="login">
   <div style="color:white;  margin-top:20px; margin-bottom:20px; width:300px; padding:5px;" v-if="this.error" class="error">
          {{this.error ? this.error : null}}
      </div>
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
       
            <span style="color:black; margin-bottom:-30px;">Already have an Account ? <router-link to="/login" style="color:#FF7A22; text-decoration:none;">Login</router-link> </span>
          

        <button type="button" className="btn mt-3 btnd " @click="signup" >
          Create account</button>

      </div>
     
       <div>
          {{this.success ? this.success : null}}
      </div>
    </div>
</template>

<script>
import { auth,projectfirestore } from '../firebaseconfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {setDoc,doc} from "firebase/firestore"


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
 
    

    if(this.email === "" || this.pwd === ""){
      
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
       setDoc(doc(projectfirestore, "Users", this.email))
        
      });

      this.success ="Account created successfully"
      this.email = "" 
       this.pwd = ""
       setTimeout(()=>{
        this.$router.push("/login")
       },1000)
    
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
.btnd{

margin-left:60px;
}
.error{
  margin-left:60px;
  background:rgb(243, 104, 104);
}

@media screen and (max-width:768px) {
  .btnd{

margin-left:30px;
}
.error{
  margin-left:30px;
}
}
</style>
