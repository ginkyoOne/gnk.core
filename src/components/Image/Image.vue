<script>


import gnkComponent from "../ComponentBase/gnkComponent.vue"
import imageData from "../../utils/imageData"
import imgUrl from '../../assets/placeholder-1024x512.png?url'


export default {
    name: 'gnkImage',
    extends: gnkComponent,
    
    data() {
        return {

        }
    },
    props: {
        src: {
            type: String,
            required: true,
            validator: function(value) {
                return value.length > 0 
            }
        },
        size: {
            type: String,
            required: false,
            validator: function(value) {
                return !!value && value.length > 0 && value.includes('x') && value.split('x')[0] > 0 && value.split('x')[1] > 0
            }
        },
        alt: {
            type: String,
            required: false,
            default: '',
        },

        title: {
            type: String,
            required: false,
            default: '',
        },

        showTitle: {
            type: Boolean,
            required: false,
            default: false,
        },

        animation: {
            type: String,
            required: false,
            default: 'none',
            validator: function(value) {
                return ['none', 'zoomIn-light', 'zoomIn-bw', 'zoomIn-saturation', 'zoomIn-sepia', 'zoomIn-blur', 'zoomIn-rotation', 'zoomOut-light', 'zoomOut-bw', 'zoomOut-saturation', 'zoomOut-sepia', 'zoomOut-blur'].includes(value)
            }
        }
    },

    watch: {
    },

    mounted() {
    },

    computed: {
        componentClassObject() {
            return {
                '--none': this.animation === 'none',
                '--zoomIn-light': this.animation ==  'zoomIn-light',
                '--zoomIn-bw': this.animation == 'zoomIn-bw',
                '--zoomIn-saturation': this.animation == 'zoomIn-saturation',
                '--zoomIn-sepia': this.animation ==  'zoomIn-sepia',
                '--zoomIn-blur': this.animation ==  'zoomIn-blur',
                '--zoomIn-rotation': this.animation == 'zoomIn-rotation',
                '--zoomOut-light': this.animation == 'zoomOut-light',
                '--zoomOut-bw': this.animation == 'zoomOut-bw',
                '--zoomOut-saturation': this.animation == 'zoomOut-saturation',
                '--zoomOut-sepia': this.animation == 'zoomOut-sepia',
                '--zoomOut-blur': this.animation == 'zoomOut-blur',
                '--default': true
            }
        },
        componentStyleObject() {
            return {
                '--img-background-url': `url(${this.src})`,
                '--img-background-alt': `url(${this.alt})`,
                '--img-background-size-w': (!!this.size && this.size.length > 0 && this.size.includes('x') && this.size.split('x')[0] > 0 && this.size.split('x')[1] > 0 ? `${this.size.split('x')[0]}px` : '100%') ,
                '--img-background-size-h': (!!this.size && this.size.length > 0 && this.size.includes('x') && this.size.split('x')[0] > 0 && this.size.split('x')[1] > 0 ? `${this.size?.split('x')[1]}px` : '100%'),
            }
        },
    },
    
    methods: {
    }
}
</script>

<template>


    <div :class="[componentName + ' |', componentClassObject , componentGeneralClasses]" :id="componentId"
        :style="componentStyleObject">
        <div class="--img-placeholder">
        </div>
<!--         <gnk-progress loading light class="fill">
        </gnk-progress> -->
        <div class="--img-background | " :class="componentClassObject"
            :alt="this.alt">

        </div>
        <div v-if="this.showTitle && (this.title.constructor ===  String && this.title.length > 0 )"
        class="--title | flex flex-centered">
            <h3>{{this.title}}</h3>
        </div>
    </div>


</template>

<style lang="scss">





.gnkImage{

    width: var(--img-background-size-w, 100%);
    height: var(--img-background-size-h, 100%);
    min-height: 250px;
    min-width: 250px;

    background: -color('LIGHT');

    border-radius: var(--BORDER-RADIUS);
    position: relative;
    overflow: hidden;
    isolation: isolate;

    &>.gnkProgress{
        opacity: 20%;
    }

    &>[class*="--img"]{
        transition: all .25s ease;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: var(--BORDER-RADIUS);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    &>.--img-placeholder{
        //background-image: var(--img-placeholder-url);
        width: 100%;
        height: 100%;
        position: relative;

        &::after{
            content: '';
            position: absolute;
            top: calc((100% - 80px ) / 2);
            left: calc((100% /2) - 100px) ;

            border-right : 80px solid transparent;
            border-bottom : 80px solid -color('DARK',1,0,0,0);
            border-left : 80px solid transparent;
        }  
        &::before{
            content: '';
            position: absolute;
            top: calc((100% - 60px ) / 2);
            left: calc((100% / 2) - 20px);

            border-right : 60px solid transparent;
            border-bottom : 60px solid -color('DARK',1,0,0,-10);
            border-left : 60px solid transparent;
        }   
        
    }
    &>.--img-background {
        background-image: var(--img-background-url);
    }
    &>.--title{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: fit-content;
        
        padding: 15px;
        text-align: center;

        color: -color('TEXT');
        
        z-index: 1;

        background: rgb(0,0,0);
        background: linear-gradient(0deg, -color(BASE-TEXT,.5) 0%, -color(BASE-TEXT,.0) 100%);
    }



    &.--none{
        &>[class*="--img"]{
            filter: none;
            transform: none;
        }
        &:is(:hover, :active) {
            &>[class*="--img"]{
                transform: none;
                filter:none;
            }
        }
    }
    &.--zoomIn-light{
        &>[class*="--img"]{
            filter: brightness(80%);
        }
        &:is(:hover, :active) {
            &>[class*="--img"]{
                transform: scale(1.1);
                filter: brightness(100%);
            }
        }
    }
    &.--zoomIn-bw{
        &>[class*="--img"]{
            filter:grayscale(100%);
        }
        &:is(:hover, :active) {
            &>[class*="--img"]{
                transform: scale(1.1);
                filter: grayscale(0%);
            }
        }
    }
    &.--zoomIn-saturation{
        &>[class*="--img"]{
            filter: saturate(10%);
        }
        &:is(:hover, :active){
            &>[class*="--img"]{
                transform: scale(1.1);
                filter: saturate(100%);
            }
        }
    }
    &.--zoomIn-sepia{
        &>[class*="--img"]{
            filter: sepia(100%);
        }
        &:is(:hover, :active){
            &>[class*="--img"]{
                transform: scale(1.1);
                filter: sepia(100%);
            }
        }
    }
    &.--zoomIn-blur{
        &>[class*="--img"]{
                
            filter: blur(2px);

            &:is(:hover, :active){
                transform: scale(1.1);
                filter: none;
            }
        }
    }
    &.--zoomIn-rotation{
        &>[class*="--img"]{
                
            filter: brightness(90%);
            transform: scale(1) rotate(0deg);

            &:is(:hover, :active){
                transform: scale(1.2) rotate(2deg);
                filter: brightness(100%);
            }
        }
    }
    &.--zoomOut-light{
        &>[class*="--img"]{
                
            transform: scale(1.1);
            filter: brightness(80%);

            &:is(:hover, :active){
                transform: scale(1);
                filter: brightness(100%);
            }
        }
    }
    &.--zoomOut-bw{
        &>[class*="--img"]{
                
            filter: grayscale(100%);
            transform: scale(1.1);
            
            &:is(:hover, :active) {
                transform: scale(1);
                filter: grayscale(0%);
            }
        }
    }
    &.--zoomOut-saturation{
        &>[class*="--img"]{
                
            filter: saturate(10%);
            transform: scale(1.1);
            
            &:is(:hover, :active) {
                transform: scale(1);
                filter: saturate(100%);
            }
        }
    }
    &.--zoomOut-sepia{
        &>[class*="--img"]{
            
            filter: sepia(100%);
            transform: scale(1.1);
            
            &:is(:hover, :active) {
                transform: scale(1);
                filter: sepia(100%);
            }
        }
    }
    &.--zoomOut-blur{
        &>[class*="--img"]{
            
            filter: blur(2px);
            transform: scale(1.1);
            
            &:is(:hover, :active) {
                transform: scale(1);
                filter:none;
            }
        }
    }
    &.--zoomOut-rotation {
        &>[class*="--img"]{
                
            filter: brightness(90%);
            transform: scale(1.2) rotate(2deg);

            &:is(:hover, :active) {
                transform: scale(1) rotate(0deg);
                filter: brightness(100%);
            }
        }
    }

}

</style>