<template>
 <div>
    <NavbarComponent/>
 </div>
    <div class="AboutUsHeader">
   <h1>About Us</h1>
   <p>Invoicing for small business owners, by small business owners</p>

    </div>

    <div class="Aboutus">
      <div>
            <img src="@/assets/header-image.png"/>
      </div>
       <div>
         <p>
            Since 2014, we’ve been making it easier for small business owners to win more work and get paid. Invoice Simple was started by a small business owner who understood the pain of trying to balance the responsibilities of delivering a remarkable product or service to customers, with handling the administration of a business. 
            Many of our team have experienced the same.
         </p>
          <p>
            Our mission today is to make it effortless for you to manage your finances and stay organized. 
            So now you can focus on more important things—like delighting your customers and getting to bed on time.
          </p>
      </div>
      </div>

      <div class="values shadow">
         <h2 style="margin-top:25px;">Core Benefits</h2>
         <div class="row valuesContainer">
            <div class="value col-lg-3">
               <h1>Transparent</h1>
               <p>Nothing hidden. Be honest and open in everything you do.</p>
            </div>
             <div class="value col-lg-3">
               <h1>Easy to use</h1>
               <p>Invest time in making the complex seem simple. Innovation will follow.</p>
             </div>
              <div class="value col-lg-3">
               <h1>Quick and Fast</h1><p>Oriels makes easy invoice generation and ease sending to different clients</p>
              </div>
               <div class="value col-lg-3">
                  <h1>Be Generous</h1>
                  <p>Always give more than you expect to receive. Be generous with your time and skills.</p>
               </div>
         </div>
      </div>

       <div class="num">
        <div class="numcounts">
           <h1>Join 50+ Small Business Owners Love Oriels Invoice Apps</h1>

           <div><button>Join Now</button></div>
        </div>
    </div>


     <FooterComponent/>
</template>

<script>
import NavbarComponent from "./components/Navbar.vue"
import FooterComponent from "./components/footer.vue"
export default {
    name:'AboutusComponent',
    components: {
   NavbarComponent,
   FooterComponent
  }
}
</script>

<style lang="css">
.AboutUsHeader{
   background:#FF7A22;
   height:300px;
   width:100%;
   margin:30px 0px;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   color:white;
}
.Aboutus{
   display:flex;
   width:70%;
   margin:0 auto;
   gap:20px;

}
.Aboutus img{
   width:350px;
   height:350px;
}
.Aboutus p{
   text-align:justify;
}
.values{
   background:#EDEFF3;
   height:350px;
   width:100%;
   font-size:15px;
   padding:20px;
   margin:60px 0px;

}
.valuesContainer{
   padding:20px;
   text-align: left;
   margin:20px;
}
.valuesContainer h1{
   font-size:17px;
   font-weight: bold;
}

@media screen and (max-width:540px){
   .Aboutus{
   display:flex;
   flex-direction:column;
   width:90%;
   margin:0 auto;
   gap:20px;

}
.values{
   background:#EDEFF3;
   height:max-content;
   width:100%;
   font-size:15px;
   padding:20px;
   margin:60px 0px;

}
}
</style>