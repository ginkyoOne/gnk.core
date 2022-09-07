<script>

import gnkComponent from "../ComponentBase/gnkComponent.vue"

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
        label: {
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

        type: {
            type: String,
            default: 'loadingType01',
            validator: function(value) {
                return ['loadingType01', 'loadingType02', 'loadingType03', 'loadingType04', 'loadingType05'].includes(value)
            }
        },

    },
    computed: {
        componentClassObject() {
            return {
                '--primary' : true,
                '--modal': this.modal,
                '--loadingType01': this.type === 'loadingType01',
                '--loadingType02': this.type === 'loadingType02',
                '--loadingType03': this.type === 'loadingType03',
                '--loadingType04': this.type === 'loadingType04',
                '--loadingType05': this.type === 'loadingType05',

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
        },

        onEvent(event) {
            event.stopPropagation()
            event.preventDefault()
        },
    
    },
    mounted() {

        this.loaded = true
    },



}
</script>

<template>

    <Teleport v-if="loaded" :to="target">
        <transition name="fade">

            <div
                :class="[componentName, componentClassObject, componentGeneralClasses]"
                :id="componentId"
                :style="componentStyleObject"
                
                @click.prevent="onEvent($event)"
                @mouseleave.prevent="onEvent($event)"
                @mouseover.prevent="onEvent($event)"
                @keydown.prevent="onEvent($event)"
                @keypress.prevent="onEvent($event)"
                @keyup.prevent="onEvent($event)"

                
                class="grid">


                <gnkProgressbar class="--progress" v-if="percentage >= 0 && !modal" size="mini" square block
                    :value="percentage" />

                <div class="row full-height">
                    <div class="col-block">
                        <div class="fill flex-centered">
                            <div class="--loading">

                            </div>
                            <div class="fill flex-centered text-bold" v-if="percentage >= 0">
                                <gnk-Counter :value="percentage"></gnk-Counter>%
                            </div>
                        </div>
                        <p class="--loading-label | text-bold">{{label}}</p>
                    </div>
                </div>
            </div>

        </transition>
    </Teleport>

</template>

<style lang="scss">

.gnkLoading{


    position:absolute;
    inset: 0;
    z-index: var(--TOP-Z-INDEX);

    pointer-events: none !important;
    user-select: none;

    background: -color('DARK', .50);
    
    &.--progress{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: var(--TOP-Z-INDEX);
    }

    &.--modal{
        background: -color('LEVEL-2', 0.9);
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
        pointer-events: none;
        user-select: none;
    }

    & .--loading-label{
        padding-top: 10px;
        width: 100%;
        text-align: center;
    }

    & .--loading {
        position :absolute;
        width: var(--loading-size);
        height: var(--loading-size);

        box-sizing: border-box;
        z-index: 1;
    }

    &.--loadingType01 .--loading {
        
            border: calc(var(--BORDER-SIZE) * 2) solid -color('BASE', 0.5);
            border-bottom-color: -color('BASE');
            border-radius: 50%;
            animation: rotation 1s linear infinite;
        }

    &.--loadingType02 .--loading {
        
        border:calc(var(--BORDER-SIZE) * 2) solid -color('BASE', 0.5);
        border-radius: 50%;
        

        &:after {
            content: '';
            position: absolute;
            
            width:  calc(100% - (var(--BORDER-SIZE) * 4));
            height:  calc(100% - (var(--BORDER-SIZE) * 4));

            border-radius: 50%;
            border: calc(var(--BORDER-SIZE) * 2) solid transparent;
            border-bottom-color: -color('BASE');
            animation: rotation 1s linear infinite;
        }
    }
    
    &.--loadingType03 .--loading {
            
            border: calc(var(--BORDER-SIZE) * 4) solid -color('BASE',.5);
            border-top-color: -color('BASE',.35);
            border-right-color: -color('BASE',.25);
            border-bottom-color: -color('BASE',.15);

            border-radius: 50%;
            animation: rotation 2s linear infinite;
    }

    &.--loadingType04 .--loading {

        border: calc(var(--BORDER-SIZE) * 4) solid -color('BASE');
        border-radius: 50%;
        animation: rotationBorderLevels 1s linear infinite alternate;
    }

    &.--loadingType05 .--loading {
        animation: rotation 1s ease-in-out infinite;
        &:after {
            content: '';
            position: absolute;
            
            width:  calc(100% - (var(--BORDER-SIZE) * 4));
            height:  calc(100% - (var(--BORDER-SIZE) * 4));

            border-radius: 50%;
            border: calc(var(--BORDER-SIZE) * 2) solid transparent;
            border-top-color: -color('BASE',1);

            animation: rotationMaterial 1s linear infinite alternate;
        }
    }

}


@keyframes rotation {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
}

@keyframes rotationMaterial {
    25% {
        border-top-color: -color('BASE',1);
        border-right-color: -color('BASE',0);
        border-bottom-color: -color('BASE',0);
        border-left-color: -color('BASE',0); 
    }
    100% {
        border-top-color: -color('BASE',1);
        border-right-color: -color('BASE',1);
        border-bottom-color: -color('BASE',1);
        border-left-color: -color('BASE',0); 
    }
}

@keyframes rotationBorderLevels {
    0% {
        border-top-color: -color('BASE',1);
        border-right-color: -color('BASE',0);
        border-bottom-color: -color('BASE',0);
        border-left-color: -color('BASE',0); 
    }
    25% {
        border-right-color: -color('BASE',.50);
        border-bottom-color: -color('BASE',0);
        border-left-color: -color('BASE',0);
    }
    50% { 
        border-right-color: -color('BASE',1);
        border-bottom-color: -color('BASE',.50);
        border-left-color: -color('BASE',0);
    }
    75% { 
        border-bottom-color: -color('BASE',1);
        border-left-color: -color('BASE',.50);
    }
    100% { 
        border-left-color: -color('BASE',1);
    }
}


</style>