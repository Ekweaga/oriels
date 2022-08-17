<template>

<div style="padding-top:20px;" class="bg-light shadow">
<footer className="text-center text-lg-start text-black">
<section className="">
<div className="container text-center text-md-start mt-5">
 
 <div className="row mt-3">
  
   <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
   
     <h6 className="text-uppercase fw-bold" style="color:#FF7A22;">Oriels</h6>
     <hr
         className="mb-4 mt-0 d-inline-block mx-auto"
     
         />
     <p>
     Go Paperless!. Simple And Easy-to-use Online Invoicing Software for Small Business Owners & Firms
     </p>
   </div>


 
   <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
   
     <h6 className="text-uppercase fw-bold">Links</h6>
     <hr
         className="mb-4 mt-0 d-inline-block mx-auto"
        
         />
    
     <p>
 <router-link to="/" class="nav-link active" style="color:black;"> Home</router-link>
     </p>
     <p><router-link to="/aboutus" class="nav-link active" style="color:black;">About Us</router-link></p>
      <p>
    <router-link to="/login" class="nav-link active" style="color:black;"> Login</router-link>
     </p>
     <p>
   <router-link to="/signup" class="nav-link active" style="color:black;"> Sign up</router-link></p>
     
   </div>
  
   <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
    
    
    
   
   </div>
   
   <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    
     <h6 className="text-uppercase fw-bold">Contact</h6>
     <hr
         className="mb-4 mt-0 d-inline-block mx-auto"
       
         />
     <p><i  className="fas fa-home mr-3"></i>Akure, Ondo state, NG</p>
     <p><i  className="fas fa-envelope mr-3"></i> hikay123@gmail.com</p>
     <p><i  className="fas fa-phone mr-3"></i> +234 9057772744</p>
     <p><i  className="fas fa-print mr-3"></i> +234 8148837221</p>
   </div>
 
 </div>

</div>
</section>



<div
  className="text-center p-3"
  
  >
© 2020 Copyright : Oriels | Go Paperless!!

</div>
</footer>
</div>
</template>


<script>
export default {
    name:"FooterComponent"
    
}
</script>

<style>

</style>