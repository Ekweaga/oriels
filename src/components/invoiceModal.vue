<template>
     <div class="orielsform shadow p-3" >
      <Loading v-if="this.loading"/>
        <h2 style="text-align:left; color:#FF7A22;">New Invoice</h2>
            
                          <article className="row">
                            <div><p>Bill From:</p></div>
                          <div className="form-floating mb-3 ">
      <input type="text" className="form-control " id="floatingInput" required placeholder="name@example.com" v-model="this.billerName"
    />
      <label for="floatingInput" className="p-3" >Your Name</label>
    </div>
    <div className="form-floating mb-3 ">
      <input type="email" className="form-control " required id="floatingInput" placeholder="name@example.com" v-model="this.billerEmailAddress"
    />
      <label for="floatingInput" className="p-3"> Your Email address</label>
      </div>
                          <div className="form-floating mb-3 ">
      <input type="text" className="form-control " id="floatingInput" required placeholder="name@example.com" v-model="this.billerAccountName"
     >
      <label for="floatingInput" className="p-3" >Account Name</label>
    </div>
    
                          </article>

                          <article className="row">
                          <div className="form-floating mb-3  ">
      <input type="email" className="form-control" id="floatingInput" required placeholder="name@example.com" v-model="this.billerAddress"
      />
      <label for="floatingInput" className="p-3">Your Address</label>
    </div>
    <div className="form-floating mb-3">
      <input type="number" className="form-control" id="floatingInput" required placeholder="name@example.com" v-model="this.billerPhoneno"
    />
      <label for="floatingInput" className="p-3">Your Phone no</label>
    </div>
    <div className="form-floating mb-3 ">
      <input type="text" className="form-control" id="floatingInput" required placeholder="name@example.com" v-model="this.billerBankName"
      />
      <label for="floatingInput" className="p-3">Your Bank Name</label>
    </div>
                          </article>
                       
                    <article className="row">
                    <div className="form-floating mb-3 ">
      <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" required
      />
      <label for="floatingInput" className="p-3">Your Account No</label>
    </div>
      <div><p>Bill To:</p></div>
    <div className="form-floating mb-3 ">
      <input type="text" className="form-control" id="floatingInput" required  placeholder="name@example.com" v-model="this.clientName"
      />
      <label for="floatingInput" className="p-3">Client Name</label>
    </div>
    <div className="form-floating mb-3 ">
      <input type="text" className="form-control" id="floatingInput" required  placeholder="name@example.com" v-model="this.clientAddress"
     />
      <label for="floatingInput" className="p-3">Client Address</label>
    </div>
    
                    </article>
                  
   <article className="row">
   <div className="form-floating mb-3  ">
      <input type="date"   className="form-control" id="floatingInput" required placeholder="name@example.com" v-model="invoiceDate" 
      />
      <label for="floatingInput" className="p-3">Invoice Date</label>
    </div>
    <div className="form-floating mb-3 ">
      <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" 
       />
      <label for="floatingInput" className="p-3">Invoice No</label>
    </div>
     
    <div className="form-floating mb-3 ">
      <input type="date" className="form-control" id="floatingInput" v-model="this.invoiceDueDate" placeholder="name@example.com" disabled 
      />
      <label for="floatingInput" className="p-3">Due Date</label>
    </div>
   </article>
       <article className="row">
                    <div className="form-floating mb-3 ">
      <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com" 
      />
      <label for="floatingInput" className="p-3">Your Account No</label>
    </div>
      <div><p>Items:</p></div>
    <div className="form-floating mb-3 ">
      <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" v-model="this.ItemName"
      />
      <label for="floatingInput" className="p-3">Item Name</label>
    </div>
    <div className="form-floating mb-3 ">
      <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" v-model="this.ItemPrice"
     />
      <label for="floatingInput" className="p-3">Item Price</label>
    </div>
     <div className="form-floating mb-3 ">
      <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" v-model="this.ItemQty" 
     />
      <label for="floatingInput" className="p-3">Item Quantity</label>
    </div>
    
                    </article>

   <article className="row">
     <div><button class="btn m-3" style="background:#FF7A22; color:white" >Add Item</button></div>
   </article>
   <table>
   <thead>
        <tr>
           <td>Name</td>
            <td>Desc</td>
            <td>Qty</td>
            <td>Price</td>
             <td>Amount</td>
           
          
        </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in itemList" :key="index">
        <td>{{item.name}}</td>
           <td>{{item.desc}}</td>
              <td>{{item.qty}}</td>
                 <td>{{item.price}}</td>
                    <td>{{item.amount}}</td>
      </tr>
    </tbody>

   </table>

   <div>
    Total : {{this.itemTotal}}
   </div>

 

   
  
   <div className="form-floating mb-3 ">
      <textarea  row="20" placeholder="Additional notes to clients" class="shadow" v-model="this.description"></textarea>
     
    </div>
   
  <div class="orielsbtn">
     <button @click="toggle" type="button" className="btn  m-3" style="background:red; color:white" >
      Cancel</button>
   <button  type="button" className="btn m-3" style="background:#FF7A22; color:white" @click="add">
      Generate Invoice</button>
     
       <button  type="button" className="btn  m-3" style="background:green; color:white">
      Save as draft</button>
       <button  type="button" className="btn  m-3" style="background:#09093A; color:white" >
      Save as pending</button>
      </div>
   
   
            </div>
          
</template>

<script>
import { projectfirestore} from '../firebaseconfig';
import { doc, setDoc } from "firebase/firestore"; 
import {getAuth, onAuthStateChanged} from "firebase/auth"
import Loading from "./loading.vue"
import {mapMutations} from "vuex"

export default {
   name:"InvoiceModalComponent",

   components:{
    Loading
   },

   props: ['auth'],
   mounted(){
    console.log("mounted")
    this.users()
   
   
   },
  
   data(){
    return {
      options:{year:"numeric",month:"short",day:"numeric"},
      loading:false,
      user:null,
      billerName:'',
      billerEmailAddress:'',
      billerAddress:'',
      billerAccountName:'',
      billerAccountNumber:'',
      billerPhoneno:'',
      billerBankName:'',
      invoicedraft:null,
      invoicepending:null,
      clientName:'',
      clientAddress:'',
      invoiceDate:null,
      invoiceDueDate:null,
      ItemName:'',
      ItemPrice:'',
      ItemQty:'',
      description:'',
      itemList: [],
      itemTotal:0

    }
   },
    created(){
      this.invoiceDate = new Date(Date.now()).toLocaleDateString('en-us',this.options)
   },

   methods:{
      ...mapMutations(['TOGGLE_INVOICE']),
   
    toggle(){
          this.TOGGLE_INVOICE()
    },
    calinvoicetotal(){
     
    this.itemTotal =this.itemList.reduce((price,item)=> price + item.amount, 0)
    },
    add(){
       const firebase = projectfirestore;
      
      this.itemList.push({
        name:this.ItemName,
        price:this.ItemPrice,
        qty:this.ItemQty,
        desc:this.description,
        amount: this.ItemPrice * this.ItemQty,
        total:this.itemTotal
      })
       this.calinvoicetotal()
     this.loading=true
        setDoc(doc(firebase, `items/${this.user}`), {
        name:this.ItemName,
        price:this.ItemPrice,
        qty:this.ItemQty,
        desc:this.description
      }
      ).then(()=>{
        this.loading = false
          this.TOGGLE_INVOICE()
      })
      
    },
     users(){
        const auth = getAuth()
        onAuthStateChanged(auth,(user)=>{
          if(user){
            console.log(user.uid)
            this.user = user.uid
          }
        })
    }
   }
}

</script>

<style>
table{
  width:100%;
}
</style>


