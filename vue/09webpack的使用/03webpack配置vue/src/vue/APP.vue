<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <h2>{{name}}</h2>
        <Cpn/>
    </div>
</template>
<script>
import Cpn from './Cpn.vue'
export default {
    components:{
        Cpn
    },
    name:"APP",
    data(){
        return{
            message:'Hello webpack',
            name:'邱模建'
        }
    }
}
</script>
