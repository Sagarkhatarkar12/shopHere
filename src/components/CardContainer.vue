<template>
    <div>
        <div class="flex px-10 "> 
            <h1 class="py-3 text-3xl font-sans px-2 font-bold">HeadPhone for you !</h1>
        </div>
        <div class="flex h-fit flex-wrap px-10 py-10 gap-10 justify-center">
<card/>
<card/>
<card/>
<card/>
<card/>
<card/>
<card/>
<card/>
<card/>
<card/>
        </div>
    </div>
</template>

<script>
import card from "./Card.vue"
export default{
components:{
    card
}
}

</script>
