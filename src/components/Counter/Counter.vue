<script>

import gnkComponent from "../ComponentBase/gnkComponent.vue"
import {sleep, animateValue} from "../../utils/animateValue"


export default {
    name: 'gnkCounter',
    extends: gnkComponent,
    
    data() {
        return {
            currentValue: 0,
        }
    },
    props: {
        value: {
            type: Number,
            default: 0,
            validator: (value) => {
                return value >= 0
            }
        },

        duration: {
            type: Number,
            required: false,
            default: 5000,
            validator(type) {
                return type >= 0
            },
        },
    },

    computed: {
        componentClassObject() {
            return {
                
            }
        },
        componentStyleObject() {
            return {
                
            }
        },
    },

    watch: {
        value(newValue) {
            if (this.currentValue !== newValue) {
                this.currentValue = newValue
                animateValue(0, this.value, this.duration,
                
                (value) => {
                        this.currentValue = value
                },
                (value) => { });
            } 
        },
    },
    
    methods: {

    },
    async mounted() {
        await sleep(2000)
        animateValue(0, this.value, this.duration, 
        (value) => {
                this.currentValue = value
        },
        (value) => { });
    },
}
</script>

<template>


    <div :class="[componentName + ' |', componentClassObject , componentGeneralClasses]" :id="componentId"
        :style="componentStyleObject">
        {{ currentValue }}
    </div>



</template>

<style lang="scss">

.gnkCounter{
    all: inherit;
    display: inline-block;
    width: fit-content;
    height: fit-content;

    &.--info{
        color: -color('INFO') !important;
    }
    &.--primary{
        color: -color('PRIMARY') !important;
    }
    &.--success{
        color: -color('SUCCESS') !important;
    }
    &.--warning{
        color: -color('WARNING') !important;
    }
    &.--danger{
        color: -color('DANGER') !important;
    }
    &.--bug{
        color: -color('BUG') !important;
    }
    &.--dark{
        color: -color('DARK') !important;
    }
    &.--light{
        color: -color('LIGHT') !important;
    }


    

}


</style>