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
    <div :id="componentId"  :class="[componentName + ' |', componentClassObject , componentGeneralClasses]">
        <slot >

        </slot>
    </div>
</template>
<style lang="scss">

    .gnkListview{
        
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow-y: auto;
        position: relative;

        margin:5px;

        background: -color('LEVEL-2');

        border-radius: var(--BORDER-RADIUS);
        border : var(--BORDER-SIZE) solid -color('LEVEL-0', 0.8);
        
        box-shadow: 0px 5px 8px -color('SHADOW', 0.4);
        
        .gnkListviewItem:is(.gnkListviewItem + .gnkListviewItem)::after {
            content: '';
            position: absolute;
            top: 0px;
            right: 16px;
            left: 16px;
            border-top: var(--BORDER-SIZE) solid -color('LEVEL-4');
        }
    }


</style>