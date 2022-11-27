<template>
    <Card>
        <!-- template apontando para slot = #content  -->
        <template #content> 
            lorem ipsum
        </template>
    </Card>
</template>

<script>
import { defineComponent } from 'vue';

import Card from "primevue/card"

export default defineComponent({
    components:{
        Card
    },
})
</script>