<script>
export default{
    props:{
        Name :{
            type:String,
            required:true
        },
        slug :{
            type:String,
            required:true
        }
    }
}
</script>
<template>
       <RouterLink :to="`/categories/${slug}`" class="flex items-center gap-4">
     <div class="h-16 w-16 rounded-2xl bg-white flex items-center justify-center">
        
                </div>
                <div>
                    <!-- {{ console.log(Name) }} -->
                    <h1>{{Name }}</h1>
                </div>
                </RouterLink>
      
</template>