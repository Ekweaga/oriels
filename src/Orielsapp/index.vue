<template>
<div>
    <NavbarComponent/>
 </div>
 <div class="orielscontainer">
   
    <div class="orielsapp">

        <div >
          <transition name="invoice">
       <InvoiceModalComponent display="this.show" v-if="this.show"/></transition>
       </div>

            <div class="orielsinvoices">
              <div>  <h2>Invoices</h2>
              <p>There are 4 total invoices</p>
              </div>
                      
                      <div>  <button @click="this.shows" className="btn m-3" style="background:#FF7A22; color:white">add new invoice</button></div>

            </div>
    </div>
    </div>
      <FooterComponent/>
</template>




<script>

import NavbarComponent from "../components/Navbar.vue"
import FooterComponent from "../components/footer.vue"
import InvoiceModalComponent from "../components/invoiceModal.vue"
export default {
   name:"OrielComponent",
   components: {
   NavbarComponent,
   FooterComponent,
   InvoiceModalComponent
  },
  data(){
    return{
        show: false,
        user:null
    }
  },

  methods:{
    shows(){
        this.show = !this.show
    }
  },

  mounted(){
    this.user = JSON.parse(localStorage.getItem('token'))
    
    if(!this.user){
      this.$router.push("/login")
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
  width:90%;
  margin:20px auto;
   
  
}
.orielsapp{
   position:relative;
   margin-bottom:1500px;
    display:flex;
    justify-content: space-between;
   
}
.orielsform{
    width:400px;
    background: white;
    
  position:absolute;
  top:0;
  left:0;
}
.orielsinvoices{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
  margin-top:100px;
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
.invoice-enter-active, .invoice-leave-active{
  transition:0.8s ease all
}
.invoice-enter-from,.invoice-leave-to{
  transform:translateX(-700px)
}
</style>