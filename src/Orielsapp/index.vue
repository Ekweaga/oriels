<template>
<div>
    <NavbarComponent/>
 </div>
 <div class="orielscontainer">
   
    <div class="orielsapp">
        <transition>
        <div class="orielsform shadow p-3" v-if="this.show">
            
                          <article className="row">
                          <div className="form-floating mb-3 ">
      <input type="text" className="form-control " id="floatingInput" placeholder="name@example.com" 
    />
      <label for="floatingInput" className="p-3" >Your Name</label>
    </div>
    <div className="form-floating mb-3 ">
      <input type="email" className="form-control " id="floatingInput" placeholder="name@example.com"
    />
      <label for="floatingInput" className="p-3"> Your Email address</label>
      </div>
                          <div className="form-floating mb-3 ">
      <input type="text" className="form-control " id="floatingInput" placeholder="name@example.com" 
     >
      <label for="floatingInput" className="p-3" >Account Name</label>
    </div>
    
                          </article>

                          <article className="row">
                          <div className="form-floating mb-3  ">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
      />
      <label for="floatingInput" className="p-3">Your Address</label>
    </div>
    <div className="form-floating mb-3">
      <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com"
    />
      <label for="floatingInput" className="p-3">Your Phone no</label>
    </div>
    <div className="form-floating mb-3 ">
      <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" 
      />
      <label for="floatingInput" className="p-3">Your Bank Name</label>
    </div>
                          </article>
                       
                    <article className="row">
                    <div className="form-floating mb-3 ">
      <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" 
      />
      <label for="floatingInput" className="p-3">Your Account No</label>
    </div>
    <div className="form-floating mb-3 ">
      <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" 
      />
      <label for="floatingInput" className="p-3">Client Name</label>
    </div>
    <div className="form-floating mb-3 ">
      <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" 
     />
      <label for="floatingInput" className="p-3">Client Address</label>
    </div>
    
                    </article>
                  
   <article className="row">
   <div className="form-floating mb-3  ">
      <input type="date" className="form-control" id="floatingInput" placeholder="name@example.com" 
      />
      <label for="floatingInput" className="p-3">Invoice Date</label>
    </div>
    <div className="form-floating mb-3 ">
      <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" 
       />
      <label for="floatingInput" className="p-3">Invoice No</label>
    </div>
     
    <div className="form-floating mb-3 ">
      <input type="date" className="form-control" id="floatingInput" placeholder="name@example.com" 
      />
      <label for="floatingInput" className="p-3">Due Date</label>
    </div>
   </article>

   <article className="row">
   
   </article>

   
  
   <div className="form-floating mb-3 ">
      <textarea  row="20" placeholder="Additional notes to clients" class="shadow"></textarea>
     
    </div>
   
  <div class="orielsbtn">
   <button onClick={handle} type="button" className="btn  mt-3" >
      Generate Invoice</button>
       <button onClick={handle} type="button" className="btn  mt-3" >
      Cancel</button>
      </div>
   
   
            </div>
            </transition>
            <div class="orielsinvoices">
                        <h2>Invoices</h2><button @click="this.shows">add new invoice</button>
            </div>
    </div>
    </div>
      <FooterComponent/>
</template>




<script>
import NavbarComponent from "../components/Navbar.vue"
import FooterComponent from "../components/footer.vue"
export default {
   name:"OrielComponent",
   components: {
   NavbarComponent,
   FooterComponent
  },
  data(){
    return{
        show: false
    }
  },

  methods:{
    shows(){
        this.show = !this.show
    }
  }
   
}
</script>

<style>
.orielsheader{
    display:flex;
    flex-direction: column;
    height:100vh;
    background:#EDEFF3;
    width:100px;
    position:fixed;
    bottom: 0;
    left:0;
    z-index:-1111;
   
   
}
.orielscontainer{
    display:flex;
  
}
.orielsapp{
    width:90%;
    margin:50px auto;
    display:flex;
   
}
.orielsform{
    width:500px;
    background: white;
    margin-left:00px;
    transition:all 0.5s ease-in;
}
textarea{
    width:100%;
    resize: none;
    height:250px;
    border:none;
    padding:20px;
}
textarea:focus{
    border:none;
    outline:none;
}
</style>