<template>
    <!-- {{ $route.params.categoryName }} -->
<CardContainer :cate="true" :cateHeading =" $route.params.categoryName" :category="Product_cate"/>
</template>
<script>
import CardContainer from './CardContainer.vue';
export default{
    components:{
CardContainer
    }
    ,
    data(){
        return {
             Product_cate :[]
        }
    },
    mounted(){
        fetch('https://dummyjson.com/products/category/' + this.$route.params.categoryName.toLowerCase())
.then(res => res.json())
.then(data=>{
    this.Product_cate = data.products;
    console.log("Fetched category products:", this.Product_cate);
});
    }
}
</script>