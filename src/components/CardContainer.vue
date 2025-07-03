<template>
    <div>
        <div class="flex px-10 ">
            <h1 class="py-3 text-3xl  font-sans px-2 font-bold">{{ cateHeading +' !' ||' HeadPhone for you !' }}</h1>
        </div>
        <div class="flex  h-full w-360 mx-10 my-10 gap-10 py-10 custom-scrollbar overflow-scroll">
<!-- {{ console.log(productsByCategory) }} -->
      <card v-for="item in products" :key = item.id :id = item.id :prouductName="item.title" :brandName="item.brand" :star="Math.round(item.rating)" :amoundValue="item.price"    :imageUrl="item.thumbnail" />
    

 
     
        </div>
    </div>
</template>

<script>
import card from "./Card.vue"
export default {

    components: {
        card
    },
    props:{
      cateHeading :{
        type:String,
        
      },
      category:{
        type:Array,

      }
    },
    data(){
           return {
      products: [],
      // productsByCategory: this.category,
    }
  },
  mounted(){
    fetch("https://dummyjson.com/products"+(this.cateHeading ? "/category/" + this.cateHeading.toLowerCase() : ""))
      .then((res) => res.json())
      .then((data) => {
        this.products = data.products;
        console.log("Fetched products:", this.products);
      })
  }
  
  

}



</script>
<style>
/* styles.css or inside a <style> block */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: white;
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: gray; /* green-400 */
  border-radius: 20px;
  min-height: 50px;
  width: 10px;
  height: 10px;
  border: 2px solid transparent;
}

</style>