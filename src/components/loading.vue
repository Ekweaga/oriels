<template>
    <div class="loading">
        <span>Loading</span>
    </div>
</template>


<script>
export default {
   name:"LoadingComponent"
}
</script>
<style>
.loading{
top:0;
left:0;
z-index:123;
height: 100%;
width:100%;
background-color:rgba(0,0,0,0.5);
position: absolute;
display:flex;
align-items:center;
justify-content: center;
@keyframes spin{
    to{
        transform:rotateZ(360deg);
    }
}
}
span{
display:block;
width:60px;
height:60px;
margin:0 auto;
border: 3px solid transparent;
border-top-color:white;
border-bottom-color:white;
border-radius:50%;
color:white;
animation: spin ease 100ms infinite;
}

</style>