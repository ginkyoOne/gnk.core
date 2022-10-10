<script>

import gnkComponent from "../ComponentBase/gnkComponent.vue"
export default {
    name: 'gnkIcon',
    extends: gnkComponent,
    
    data() {
        return {
            //parentClientRect: null  ,      
        }
    },
    props: {
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
                '--noStyle': !this.hasStyle,
                [`--size-${this.size}`]: this.size != 'default'
            }
        },
        componentStyleObject() {
            return {
                
            }
        },
    },
}
</script>

<template>


    <div
        :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
        :id="componentId"
        :style="componentStyleObject">
        <span v-if="!!this.$slots.default" class="material-symbols-rounded">
            <slot>
        
            </slot>
        </span>
    </div>



</template>

<style lang="scss">

.gnkIcon{
    &>.material-symbols-rounded{
        color: -color('BASE');
        font-size: var(--FONT-SIZE);
        line-height: var(--FONT-SIZE);
    }

    &:is(.--noStyle)>.material-symbols-rounded{
        color: inherit !important;
    }

    &:is(.--size-xl)>.material-symbols-rounded {
        font-size: calc(var(--FONT-SIZE)/ 0.5) !important;
        line-height: calc(var(--FONT-SIZE)/ 0.5) !important;
    }

    &:is(.--size-l)>.material-symbols-rounded{
        font-size: calc(var(--FONT-SIZE)/ 0.8) !important;
        line-height: calc(var(--FONT-SIZE)/ 0.8) !important;
    }

    &:is(.--size-small)>.material-symbols-rounded{
        font-size: calc(var(--FONT-SIZE)/ 1.2) !important;
        line-height: calc(var(--FONT-SIZE)/ 1.2) !important;
    }

    &:is(.--size-mini)>.material-symbols-rounded {
        font-size: calc(var(--FONT-SIZE)/ 1.5) !important;
        line-height: calc(var(--FONT-SIZE)/ 1.5) !important;
    }
}


</style>