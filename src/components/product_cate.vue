<template>
    <div class="px-10">
        <h1 class="py-5 font-bold text-3xl">Populor Categories</h1>
        <hr>
        <div class="flex gap-5 py-20 flex-wrap items-center justify-center h-full">

            <div v-for="(item,index) in categories" :key="index" class="h-20 w-100 bg-gray-300 flex items-center gap-4 px-5 rounded-2xl font-bold font-sans">
        <!-- {{ item.name }} -->
                    <!-- <img class="h-16 w-16 rounded-2xl bg-white flex items-center justify-center" :src="item.url" alt=""> -->
               <catelayout :Name = "item.name" :slug="item.slug" />


            </div>
        </div>
    </div>

</template>
<script>
import catelayout from './catelayout.vue';
export default {
    components: {
        catelayout
    },
    data() {
        return {
            categories: []
            ,
            // cate : this.$route.fullPath
        }
    },
    mounted() {
        // Fetch categories from an API or define them statically
        // Example: this.categories = await fetchCategories();
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data=>{
                this.categories = data;
                console.log("Fetched categories:", this.categories);
            });
            
        
    },

}
</script>