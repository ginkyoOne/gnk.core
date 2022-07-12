<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import createRipple from "../../utils/ripple"

export default {
    name: 'gnkListviewItem',
    extends: gnkComponent,
    data() {
        return {
            childElements: [],
            checked: false,
        }
    },

    props: {
        to: {
            type: String,
            required: false,
            default: '',
        },

        type: {
            type: String,
            required: false,
            default: 'button',
            validator(type) {
                return ['button', 'toggle'].includes(type)
            },
        },
        
    },
    computed: {
        componentClassObject() {
            return {
                    '--active': this.checked & this.type == 'toggle' ,
                }
            },

    },
    watch: {


    },
    emits: [


    ],
    methods: {
        async onClick(event) {
            
            createRipple.createRipple(event)
            this?.$router?.push(this.to)
            this.componentRaiseEvent('click')
        }
    },

    mounted() { 

        },

}

</script>
<template>
    <div @click="onClick" :id="componentId"  :class="[componentName, componentClassObject , componentGeneralClasses]">
        <slot >

        </slot>
    </div>
</template>
<style lang="scss" >

    .gnkListviewItem{

        cursor: pointer;
        padding : 16px 16px;
        position: relative;

        background: -color('LEVEL-1');
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        
        color: -color('TEXT');
        overflow: hidden;


        &:is(:hover, :active){
            background: -color('LEVEL-2');
        }

        &:is(.--active){
            background-color: -color('BASE',1);
            color: -color('BASE-TEXT',1);
        }
    }

    

</style>