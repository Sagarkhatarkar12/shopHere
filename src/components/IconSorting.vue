<template>
    <div     :class="[
      'flex gap-1 h-10 px-4 rounded-full items-center',
      sort ? 'bg-gray-50' : 'bg-gray-100'
    ]">
        <p class="font-bold">{{ Name }}</p>
        <span v-if="filter" class="font-bold"><i class="ri-sound-module-line"></i></span>
        <span v-else-if="sort" class="font-bold"><i class="ri-sort-asc"></i></span>

        <span v-else class="font-bold"><i class="ri-arrow-up-s-line"></i></span>
    </div>
</template>
<script>
import Sorting from './Sorting.vue';

export default{
props:{
Name:{
    type:String,
    required:true
}
,
filter:{
    type:Boolean,
    required:true
},
sort:{
type:Boolean,
required:true
}
}

}
</script>