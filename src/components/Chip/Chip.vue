<script>

import gnkComponent from "../ComponentBase/gnkComponent.vue"



export default {
    name: 'gnkChip',
    extends: gnkComponent,
    
    data() {
    },
    props: {
        value: {
            type: String,
            default: 'value',
            skip: true
        },


        iconPosition: {
            type: String,
            default: 'top-right',
            skip: true,
            validator: (value) => {
                return ['none','top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(value)
            }
        },


        size: {
            type: String,
            required: false,
            default: 'default',
            skip: true,
            validator(type) {
                return ['xl', 'l', 'default', 'small', 'mini'].includes(type)
            },
        },
    },

    computed: {
        componentClassObject() {
            return {
                '--primary': !this.hasStyle,
                [`--size-${this.size}`]: this.size != 'default',
            }
        },
        componentStyleObject() {
            return {
                
            }
        },
    },
    
    methods: {
    },
    mounted() {
        this.parentClientRect = this.$parent.componentElementClientRect();
    },
}
</script>

<template>


    <div
        :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
        :id="componentId"
        :style="componentStyleObject">
        <div class="--content">
            <slot>

            </slot>
        </div>
    </div>



</template>

<style lang="scss">

.gnkChip{
    position: relative;
    
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    vertical-align: middle;

    text-align: center;
    

    border: calc(var(--BORDER-SIZE) /2) solid  -color('BASE',0,0,0,0.5);
    border-radius: var(--BORDER-RADIUS);
    
    min-height: 16px;
    min-width: 16px;

    width: max-content;
    height: max-content;
    
    background-color: -color('BASE');
    color: -color('CONTRAST-TEXT');
    box-shadow: var(--SHADOW);


    &>.--content{
        display: flex;
        margin: 5px;
    }




    &.--size-xl {
        font-size: calc(var(--FONT-SIZE)/ 0.5) !important;
        line-height: calc(var(--FONT-SIZE)/ 0.5) !important;
        padding: 6px 14px;
    }

    &.--size-l {
        font-size: calc(var(--FONT-SIZE)/ 0.8) !important;
        line-height: calc(var(--FONT-SIZE)/ 0.8) !important;
        padding: 4px 8px;
    }

    &.--size-small {
        font-size: calc(var(--FONT-SIZE)/ 1.2) !important;
        line-height: calc(var(--FONT-SIZE)/ 1.2) !important;
        padding: 0px 4px;
    }

    &.--size-mini {
        font-size: calc(var(--FONT-SIZE)/ 1.5) !important;
        line-height: calc(var(--FONT-SIZE)/ 1.5) !important;
        padding: 0px 4px;
    }
    
    &.--top-right{
        position:absolute;
        top: -5px;
        right: -5px;
    }
    &.--top-left{
        position:absolute;
        top: -5px;
        left: -5px;
    }
    &.--bottom-right{
        position:absolute;
        bottom: -5px;
        right: -5px;
    }
    &.--bottom-left{
        position:absolute;
        bottom: -5px;
        left: -5px;
    }
}


</style>