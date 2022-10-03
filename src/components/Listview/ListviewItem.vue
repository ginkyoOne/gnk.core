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
                '--default': true,
                '--active': this.checked & this.type == 'toggle',
                
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
    <div @click="onClick" :id="componentId"  :class="[componentName + ' |', componentClassObject , componentGeneralClasses]">
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
        
        color: -color('CONTRAST-TEXT-BASE');
        overflow: hidden;
        gap: 5px;

        &:is(:hover, :active){
            background-color: -color('BASE');
            color: -color('CONTRAST-TEXT');
            border-radius: var(--BORDER-RADIUS);
            &::after{
                border-top: unset !important;
            }
        }

        &:is(.--active){
            background-color: -color('BASE');
            color: -color('CONTRAST-TEXT');
            border-radius: var(--BORDER-RADIUS);
            border-width: var(--BORDER-SIZE);
            border-style: solid;
            border-color: -color('BASE',1,0,0,1.5); 
        }
    }

    

</style>