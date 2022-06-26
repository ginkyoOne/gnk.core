<script>

import gnkComponent from "../ComponentBase/gnkComponent.vue"
import imageData from "../../utils/imageData"

export default {
    name: 'gnkLoading',
    extends: gnkComponent,
    
    data() {
        return {
            loaded: false,
        }
    },
    props: {
        modal: {
            type: Boolean,
            default: false,
        },

        type: {
            type: String,
            default: 'default',
            validator: function(value) {
                return ['default','points','scale'].includes(value)
            }
        },
        lable: {
            type: String,
            default: '',
        },
        percentage: {
            type: Number,
            default: -1,
            validator: function(value) {
                return value >= -1 && value <= 100
            } 
        },
        progress: {
            type: Number,
            default: -1,
            validator: function (value) {
                return value >= -1 && value <= 100
            } 
        },
        opacity: {
            type: Number,
            default: 1,
            validator: function (value) {
                return value >= 0 && value <= 1
            } 
        },
        target: {
            type: String,
            default: 'body',
            validator: function (value) {
                return (document.querySelector(value) !== null ? value : 'body' )
            } 
        },
    },
    computed: {
        componentClassObject() {
            return {
                '--modal': this.modal,
            }
        },
        componentStyleObject() {
            return {
                '--loading-size': this.getTargetSize() + 'px',
                '--opacity': this.opacity,
        }
        },
    },
    
    methods: {
        getTargetSize() {
            let target = document.querySelector(this.target)
            if (target) {
                return Math.min(Math.min(target.offsetWidth, target.offsetHeight) - 10, 64)
            }
            return 64
        }
    
    },
    mounted() {

        this.loaded = true
    },



}
</script>

<template>

    <Teleport v-if="loaded" :to="target">
        <transition name="fade">

            <div :id="componentId" class="grid --primary" :style="componentStyleObject"
                :class="[componentName, componentClassObject, componentGeneralClasses]">
                <gnk-Progress class="--progress" v-if="progress >= 0 && !modal" size="mini" square block
                    :value="progress" />

                <div class="row full-height">
                    <div class="col-block">
                        <div class="--loading">

                        </div>
                        <div class="--loading-percentage" v-if="percentage >= 0">
                            <p class="text-bold">{{percentage}}%</p>
                        </div>
                        <p class="--loading-label text-bold">{{lable}}</p>
                    </div>
                </div>
            </div>

        </transition>
    </Teleport>





</template>

<style lang="scss">



.gnkLoading{
    background: -color('DARK', 0.5);
    z-index: calc(var(--TOP-Z-INDEX) - 1);
    position:absolute;
    inset: 0;
    color:-color('BASE');

    &.--progress:not(.--modal){
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: var(--TOP-Z-INDEX);
    }

    &.--progress:is(.--modal) {
        visibility: collapse;
    }

    &.--modal{
        background: -color('LEVEL-3', 0.8);
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%);

        height: 100px;
        width: 100px;
        border-radius: var(--BORDER-RADIUS);
        box-shadow: var(--SHADOW);

    }

    &>*{
        pointer-events: none !important;
    }

    & .--loading {
        position: absolute;
        content: '';
    
        top: calc(50% - (var(--loading-size) / 2));
        left: calc(50% - (var(--loading-size) / 2));
    
    
        width: var(--loading-size);
        height: var(--loading-size);


        box-sizing: border-box;
    
        border: 2px solid -color('BASE', 0);
        border-top: 2px solid -color('BASE', var(--opacity, 1));
        //border-bottom: 2px solid -color('BASE', var(--opacity, 1));
        border-radius: 50%;
    
    
        animation: animationDefaultLoading 1s ease-in-out infinite;
    
        z-index: 1;
    }

            
    & .--loading-percentage {
        display: flex;
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    & .--loading-label{
        padding-top: 10px;
        width: 100%;
        text-align: center;
    }

}


@keyframes animationDefaultLoading {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

</style>