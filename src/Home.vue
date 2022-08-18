<template>
 <div>
    <NavbarComponent/>
 </div>
 <div class="Header">
    <div class="headerTitle">
         <div>
             <h1>Invoice your customers in seconds</h1>
             <div>
              <p>The world's simplest way to invoice customers, from your phone or laptop. Save time, stay organized 
            and look professional!

                 </p>
             </div>
         <div class="headerbtn"><button><router-link to="/login" style="color:white; text-decoration:none;">Create Now</router-link></button></div>
         </div>
    </div>
    <div>
        <img src="./assets/invoice.png"/>
    </div>
 </div>

 <div class="benefitsContainer">
    <div><h1>The Easiest Invoice software ever used</h1></div>
        <div class="benefits">
            <div>
                <h3>Save time</h3>
                <p>Quickly create professional invoices and estimates wherever you are—with a customer, between jobs, or at home. Convert 
                    estimates to invoices with one click.</p>
            </div>
                <div>
                    <h3>Look Professional</h3>
                    <p>Simply choose an invoice template and customize it with your logo. Add a signature, photos, 
                        notes and more. Always look professional 
                        and stay organized.</p>
                </div>
                    <div>
                            <h3>Easy to Use</h3>
                            <p>Simply choose an invoice template and customize it with your logo. Add a signature, photos, notes and 
                                more. Always look professional and stay organized.</p>
                    </div>
        </div>
 </div>

 <div class="gens">
    <div class="gen">
        <div>
            <img src="./assets/ab1.jpg"/>
        </div>
        <div>
            <h3>Online invoice generator</h3>
            <p>Use our invoice generator to manage your invoicing from any device, anytime. 
                Your account is always connected and your data is saved securely for you.</p>

                <div><span style="color:#FF7A22;">Generate Invoice Now</span></div>
        </div>
    </div>



    </div>

     <div class="gens">
    <div class="gen1">
         <div>
            <h3>Easy to use template</h3>
            <p>U Send estimates immediately to new and old clients. Convert those estimates to invoices 
                with a touch of a button..</p>

              
        </div>

        <div>
            <img src="./assets/ab1.jpg"/>
        </div>
       
    </div>



    </div>

    <div class="num">
        <div class="numcounts">
           <h1>Join 50+ Small Business Owners Love Oriels Invoice Apps</h1>

           <div><button>Join Now</button></div>
        </div>
    </div>


    <div class="playstore">
        <div class="playstoreContainer">
            <h1>Oriels Invoice On The Go</h1>
            <div class="row">
               <div class="col-lg-6 sm-12"> <img src="./assets/Google.png"/></div><div class="col-lg-6 sm-12"><img src="./assets/Apple.png"/></div></div>

            <div class="playstorewrite"><p>Take your invoices anywhere with the Oriels Invoice Mobile App</p></div>
        </div>
    </div>




<div class="start">
    <div class="startContainer">
        <h1>Get Started for Free Today</h1>
        <p>Send your first invoice right now (it's free!)</p>

        <div><button>GET STARTED</button></div>
    </div>

</div>

<div class="featured">
    <h1>Featured in</h1>
    <div class="feature">
        <div><img src="./assets/AppAdvice.png"/></div>
         <div><img src="./assets/Referral.png"/></div>
          <div><img src="./assets/Stripe.png"/></div>
           <div><img src="./assets/sheleadsafrica.png"/></div>
           <div><img src="./assets/autogenius.png"/></div>
    </div>
</div>
    <FooterComponent/>
</template>

<script>
import NavbarComponent from "./components/Navbar.vue"
import FooterComponent from "./components/footer.vue"

export default {
  name: 'HomeComponent',
  components: {
   NavbarComponent,
   FooterComponent
  }
}
</script>

<style>
.Header{
    display:flex;
    justify-content: space-around;
    width:75%;
    margin:20px auto;
}
.Header img{
    width:600px;
}
.headerbtn button{
    background-color: rgb(9, 9, 58);
    color:white;
    padding:8px;
    width:250px;
    border:none;
    cursor:pointer;
    height:60px;
    font-size:20px;
}
.benefitsContainer{
    width:100%;
    height:400px;
    background: #FF7A22;
    color:white;
    clip-path:polygon(0 1%, 100% 0%, 100% 96%, 0 75%);
}
.benefitsContainer h1{
    text-align:center;
    padding:20px;
    font-size:25px;
}
.benefitsContainer{
    height:unset;
    padding:5px 10px;
}
.benefits{
    display:flex;
    align-items:center;
   
    gap:25px;
   
    width:80%;
    margin:100px auto;
    font-size:14px;

}
.gen{
    display:flex;
    justify-content: space-around;
    width:80%;
    margin:30px auto;
    gap:20px;
    align-items: center;
}
.gen1{
    display:flex;
    justify-content: space-around;
    width:80%;
    margin:30px auto;
    gap:20px;
    align-items: center;
}
.gen1 img{
    width:500px;
    height:500px;
}
.gen img{
    width:500px;
    height:500px;
}
.gens{
    height:max-content;
}
.num{
    height:200px;
    background: rgb(9, 9, 58);
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
}
.numcounts{
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
}
.numcounts h1{
    font-size:20px;
    margin-bottom:30px;
}
.numcounts button{
    width:200px;
    background: white;
    color:#FF7A22;
    padding:10px;
    cursor:pointer;
    border:none;
    outline:none;
}
.playstore{
    height:350px;
    margin:100px 40px;
}
.playstoreContainer{
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
}
.playstoreContainer img{
    width:250px;
    margin:15px;
}
.playstorewrite{
    width:350px;
    font-size:20px;
    text-align: center;
}
.start{
    background:#FF7A22;
    height:450px;
 display:flex;
 clip-path: polygon(0% 1%, 100% 0%, 100% 75%, 0% 100%);
 
 justify-content:center;
    color:white;
}
.startContainer{
    display:flex;
    flex-direction:column;
   align-items: center;
    justify-content: center;
}
.start button{
    background:white;
    color:#FF7A22;
    border:none;
    width:250px;
    padding:10px;
    height:40px;
    cursor:pointer;
}
.featured{
    height:250px;
    margin-top:50px;
}
.featured h1{
    margin:20px;
    margin-left:50px;
    color:gray;
    text-align:left;
    font-size:25px;
    
}
.feature{
    display:flex;
    width:70%;
    margin:30px auto;
    gap:20px;
    justify-content: center;
    align-items: center;
}
.playstore{
    height:unset;
}
.playstore h1{
    text-align:center;
}

@media screen and (max-width:768px) {
    .featured{
    height:450px;
}
    .playstore img{
    margin-left:70px;
}
    .Header{
    display:flex;
    justify-content: space-around;
    width:75%;
    margin:20px auto;
    flex-direction: column;
}
.Header img{
    width:100%;
}
.benefitsContainer{
    width:100%;
    height:1000px;
    background: #FF7A22;
    color:white;
    clip-path:polygon(0 1%, 100% 0%, 100% 96%, 0 75%);
}
.benefits{
    display:flex;
    align-items:center;
   flex-direction: column;
    gap:25px;
    margin-top:150px;
    width:80%;
    margin:100px auto;

}
.gens{
    height:unset;
}
.gen{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    width:80%;
    margin:30px auto;
    gap:20px;
    align-items: center;
}
.gen1{
    display:flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    width:80%;
    margin:30px auto;
    gap:20px;
    align-items: center;
}
.gen1 img{
    width:100%;
    height:300px;
}
.gen img{
    width:100%;
    height:300px;
}
.numcounts h1{
    font-size:18px;
    text-align:center;
}
.start h1{
    text-align:center;
}
.feature{
    flex-direction:column;
}
}
</style>
