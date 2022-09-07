<script>

import gnkComponent from "../ComponentBase/gnkComponent.vue"



export default {
    name: 'gnkBadge',
    extends: gnkComponent,
    
    data() {
        return {
            parentClientRect: null  ,      
        }
    },
    props: {
        position: {
            type: String,
            default: 'top-right',
            validator: (value) => {
                return ['none','top-right', 'top-left', 'bottom-right', 'bottom-left'].includes(value)
            }
        },


        size: {
            type: String,
            required: false,
            default: 'mini',
            validator(type) {
                return ['xl', 'l', 'default', 'small', 'mini'].includes(type)
            },
        },
    },

    computed: {
        componentClassObject() {
            return {
                '--primary': true,
                '--top-right': this.position === 'top-right',
                '--top-left': this.position === 'top-left',
                '--bottom-right': this.position === 'bottom-right',
                '--bottom-left': this.position === 'bottom-left',


                '--size-xl': this.size === 'xl',
                '--size-l': this.size === 'l',
                '--size-small': this.size === 'small',
                '--size-mini': this.size === 'mini',


            }
        },
        componentStyleObject() {
            if (this.parentClientRect === null) return
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
        <slot>

        </slot>
    </div>



</template>

<style lang="scss">

.gnkBadge{
    position: relative;
    
    display: inline-flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    vertical-align: middle;

    
    font-weight: 600;
    font-size: var(--FONT-SIZE) !important;
    line-height: var(--FONT-SIZE) !important;
    text-align: center;
    

    border: calc(var(--BORDER-SIZE) /2) solid  -color('BASE',0,0,0,0.5);
    border-radius: 100vmax;
    padding: 0px 4px;
    
    min-height: 16px;
    min-width: 16px;
    
    background-color: -color('BASE');
    color: -color('BASE-TEXT');
    box-shadow: 0px 2px 8px -color('SHADOW', 0.4);

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