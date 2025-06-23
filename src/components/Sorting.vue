<script>
import Icon from "../components/IconSorting.vue"
export default {
    components:{
        Icon
    }
}
</script>
<template>
<div class="flex m-10 justify-between">
    <div class="flex gap-5">

        <Icon :Name = "'Headphone Type'" />
        <Icon :Name = "'Price'" />
        <Icon :Name = "'Review'" />
        <Icon :Name = "'Color'" />
        <Icon :Name = "'Material'" />
        <Icon :Name = "'offer'" />
        <Icon :Name = "'All filter'" :filter="true" />
    </div>
    <div class="flex">
        <Icon :Name = "'Sort by'" :sort="true" />
    </div>
</div>
</template>
