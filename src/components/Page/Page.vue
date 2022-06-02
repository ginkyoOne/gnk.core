<script>
import mixin from "../ComponentBase/gnkComponent"

export default {
    name: 'gnkPage',
    mixins: [mixin.gnkComponent],
    data() {
        return {
            childElements: [],
            }
    },
    props: {

        
    },
    computed: {
        componentClassObject() {
            return {
                'container': true,
                //'--disable-scroll': !!this.store.swipeCapturedBy,
            }
        },

        hasRouter() {
            return !!this.$router
        },
    },
    watch: {
        
    },
    emits: [


    ],
    methods: {
        registerChilds(element){

        },
    },

        

    provide() {
        return {

        }
    },



    mounted() { 

        },

}
</script>
<template>
    <div :id="componentId"  :class="[componentName, componentClassObject , componentGeneralClasses]" >
        <slot>

        </slot>
    </div>
</template>
<style lang="scss">
    .gnkPage{
        background: -color('LEVEL-0');
        overflow-y: scroll;
        height: 100% !important;
    }
    .--disable-scroll{
        overflow: hidden;
    }

</style>

