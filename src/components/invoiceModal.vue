<template>
     <div class="orielsform shadow p-3" >
        <h2 style="text-align:center; color:#FF7A22;">New Invoice</h2>
            
                          <article className="row">
                            <div><p>Bill From:</p></div>
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
      <div><p>Bill To:</p></div>
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
   <table>
    <tr>
      <th>
      Item Name</th>
       <th>
      Qty</th>
       <th>
      Price</th>
       <th>
      Total</th>
      
      </tr>

   </table>

   <div><button>Add Item</button></div>

   
  
   <div className="form-floating mb-3 ">
      <textarea  row="20" placeholder="Additional notes to clients" class="shadow"></textarea>
     
    </div>
   
  <div class="orielsbtn">
     <button onClick={handle} type="button" className="btn  mt-3" >
      Cancel</button>
   <button onClick={handle} type="button" className="btn" >
      Generate Invoice</button>
     
       <button onClick={handle} type="button" className="btn  mt-3" >
      Save as draft</button>
       <button onClick={handle} type="button" className="btn  mt-3" >
      Save as pending</button>
      </div>
   
   
            </div>
          
</template>

<script>
export default {
   name:"InvoiceModalComponent"
}
</script>

<style>
table{
  width:100%;
}
</style>


