<template>
    <div class="mx-10">

        <h1 class="py-2">{{ $route.fullPath }}</h1>
        {{ $route.params }}

        <div class="flex h-145">

            <div class="h-full w-[50%] flex flex-col gap-8">
                <div class="h-[80%]">
                    <img class="h-full w-full" :src="selectImage || product.thumbnail" alt="some error">
                </div>
              <div class="h-[20%] gap-8 flex">
  <div v-for="(img, index) in product.images" :key="index" @click="selectImage = img" class="h-24 w-40">
    <img class="h-full w-full" :src="img" :alt="'Thumbnail ' + index">
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
                    <p class="text-sm font-bold text-gray-500 w-130"> quidem doloribus natus, porro neque id illum quasi
                        amet,
                        quos, laudantium fuga quaerat tempora autem? Nostrum magni tempore nisi vel!</p>
                </div>
                <hr class="my-7 text-gray-400">
            </div>
        </div>
    </div>

</template>

<script>

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