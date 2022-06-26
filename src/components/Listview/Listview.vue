<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"

export default {
    name: 'gnkListview',
    extends: gnkComponent,
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
                    
                }
            },


    },
    watch: {


    },
    emits: [


    ],
    methods: {
        registerChilds(element){
            element.$options.name == 'gnkListviewItem' ? this.childElements.push(element) : null
        },
    },

        

    provide() {
        return {
            registerChild: this.registerChilds
        }
    },



    mounted() { 

        },

}

</script>
<template>
    <div :id="componentId"  :class="[componentName, componentClassObject , componentGeneralClasses]">
        <slot >

        </slot>
    </div>
</template>
<style lang="scss">

    .gnkListview{
        
        position: relative;
        background: -color('LEVEL-2');

        border: 1px solid -color('LEVEL-0');
        border-radius: var(--BORDER-RADIUS);

        display: flex;
        flex-direction: column;
        width: 100%;
        overflow-y: auto;
        
        .gnkListviewItem:is(.gnkListviewItem + .gnkListviewItem)::after {
                content: '';
                position: absolute;
                top: 0px;
                right: 16px;
                left: 16px;
                border-top: calc(var(--BORDER-SIZE) / 2) solid -color('LEVEL-4');
        }
    }


</style>