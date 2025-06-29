<template>
  {{ cartStore }}
    <div class="mx-10">

        <h1 class="py-2">{{ $route.fullPath }}</h1>
       
        <div class="flex h-145">

            <div class="h-full w-[50%] flex flex-col gap-8">
                <div class="h-[80%]">
                    <img class=" hover:scale-125 transition-all cursor-pointer h-full w-full" :src="selectImage || product.thumbnail" alt="some error">
                </div>
              <div class="h-[20%] gap-8 flex">
  <div v-for="(img, index) in product.images" :key="index" @click="selectImage = img" class="h-24 transition-all cursor-pointer hover:border-2 w-40">
    <img class="h-full w-full  cursor-pointer" :src="img" :alt="'Thumbnail ' + index">
  </div>
</div>
            </div>
            <div class="px-10 ">
                <div class="flex gap-5 flex-col">
                <h1 class="text-3xl font-bold">{{ product.title }}</h1>
                <p class="text-sm font-bold text-gray-500 w-130">{{ product.description }}</p>
                    </div>
                <div class="text-green-700 gap-3">
            
                    <i v-for="n in fullStars" :key="'fill' + n" class="ri-star-fill"></i>
                    <i v-for="n in emptyStars" :key="'line' + n" class="ri-star-line"></i>

                </div>
                <hr class="my-7 text-gray-400">
                <div class="flex flex-col gap-3">
                    <h1 class="text-3xl font-bold">${{ product.price }}</h1>
                    <p class="text-sm font-bold text-gray-500 w-130"> {{ product.category }}</p>
                </div>
                <hr class="my-7 text-gray-400">
                <div class="flex gap-5">
                    <button class="rounded-3xl cursor-pointer bg-green-700 px-10 py-2 font-bold text-white">Buy Now</button>
                    <button @click = "cartStore.addCart(product.id,product.title,product.price, 2)"  class="rounded-3xl cursor-pointer px-10 py-2 font-bold text-black border-1 border-green-600">Add to cart</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import {useCartStore } from "../store/cart"
export default {
      data(){
           return {
      product: {},
      selectImage :null

  
      
    }

},

    computed: {
  fullStars() {
    return Math.floor(this.product.rating || 0);
  },
  emptyStars() {
    return 5 - Math.floor(this.product.rating || 0);
  }
},
   
    
setup(){
    const cartStore = useCartStore();
    return { cartStore }
  },

  mounted(){
    let id = this.$route.params.id
   fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
        console.log(data); // For debugging
      })
      
  }
  



}
</script>