<script>

import gnkComponent from "../ComponentBase/gnkComponent.vue"
import imageData from "../../utils/imageData"

export default {
    name: 'gnkImage',
    extends: gnkComponent,
    
    data() {
        return {
            
        }
    },
    props: {
        
    },

    computed: {
        componentClassObject() {
            return {

            }
        },
    },
    
    methods: {

    
    }
}
</script>

<template>


    <div :class="[componentName, componentClassObject , componentGeneralClasses]" :id="componentId">
        
    </div>


</template>

<style lang="scss">




</style>