<template>
 <div>
    <NavbarComponent/>
 </div>
    <div>Aboutus</div>

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

<style scoped>

</style>