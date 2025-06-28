<template>
    <RouterLink :to="'/product/'+ id">
            <div class="flex flex-col flex-shrink-0 w-80 h-120 hover:shadow-2xl hover:border-2 border-black hover:bg-gray-200 cursor-pointer rounded-2xl">

        <div class="flex w-full h-[65%]  ">
            <div class="h-full w-full rounded-2xl overflow-hidden">

                <img class="w-full h-full" :src="imageUrl" alt=""> 
            </div>
        </div>
        <div class="flex justify-between h-[35%] py-2 px-1">
            <div class="flex flex-col gap-1.5">
                <h1 class="font-bold">{{ prouductName }}</h1>
                <p class="text-sm font-bold text-gray-600">{{ brandName }}</p>
                <div class="text-green-700 gap-1">
                  
                  <i v-for="n in star" :key="'fill' + n" class="ri-star-fill"></i>
                   <i v-for="n in 5 - star" :key="'line' + n" class="ri-star-line"></i>

                </div>
                <button
                    class="h-8  w-fit px-3 cursor-pointer rounded-full border-2 border-black  hover:bg-green-600 hover:border-none hover:text-white">Add
                    to cart</button>
            </div>
            <div class="flex flex-col">
                <p class="font-bold">${{ amoundValue }}</p>
            </div>
        </div>
    </div>
    </RouterLink>

</template>
<script>
export default {
    props: {

        id:{
            type:Number,
            requried:true
        },
        imageUrl:{
            type:String,
          required: true
        },
        prouductName: {
            type: String,
            requried: true
        }
        ,
        brandName: {
            type: String,
            requried: true
        },
        star:{
         type:Number,
         requried:true
        }
        ,amoundValue:{
            type:Number,
            requried:true
        }


    }
}
</script>