<script >
import Smposter from "./components/SmPoster.vue"
import Nav from "./components/Nav.vue"
import Banner from "./components/banner.vue"
import Sorting from "./components/Sorting.vue"

export default {
  components:{
    Smposter,
    Nav,
    Banner,
    Sorting
  }
}

</script>

<template>


<div class="home">
<smposter/>
  <Nav/>
  <Banner/>
  <Sorting/>
</div>
  



</template>

<style scoped>                                                          

</style>

