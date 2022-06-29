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
                return value.length > 0 && value.includes('http')
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

        animation: {
            type: String,
            required: false,
            default: 'none',
            validator: function(value) {
                return ['none', 'zoomIn-light', 'zoomIn-bw', 'zoomIn-saturation', 'zoomIn-sepia', 'zoomIn-blur', 'zoomIn-rotation', 'zoomOut-light', 'zoomOut-bw', 'zoomOut-saturation', 'zoomOut-sepia', 'zoomOut-blur'].includes(value)
            }
        }
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
            }
        },
        componentStyleObject() {
                console.log('src', this.src)
            return {
                '--img-placeholder-url': `url(${imgUrl})`,
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


    <div :class="[componentName, componentClassObject , componentGeneralClasses]" :id="componentId"
        :style="componentStyleObject">
        <div class="--img-placeholder">

        </div>
        <div class="--img-background" :class="componentClassObject"
            :alt="this.alt">

        </div>
    </div>


</template>

<style lang="scss">





.gnkImage{

    width: var(--img-background-size-w, 100%);
    height: var(--img-background-size-h, 100%);
    min-height: 250px;
    min-width: 250px;

    background: -color('LEVEL-2');

    border-radius: var(--BORDER-RADIUS);
    overflow: hidden;
    position: relative;

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
        background-image: var(--img-placeholder-url);
        
    }
    &>.--img-background {
        transition: all .25s ease;
        background-image: var(--img-background-url);
                






                
        &.--none{
            filter: none;
            transform: none;

            &:is(:hover, :active) {
                transform: none;
                filter:none;
            }
        }
        &.--zoomIn-light{
            filter: brightness(80%);
            
                &:is(:hover, :active) {
                    transform: scale(1.1);
                    filter: brightness(100%);
                }
        }
        &.--zoomIn-bw{
            filter:grayscale(100%);
            
            &:is(:hover, :active) {
                transform: scale(1.1);
                filter: grayscale(0%);
            }
        }
        &.--zoomIn-saturation{
            filter: saturate(10%);

            &:is(:hover, :active){
                transform: scale(1.1);
                filter: saturate(100%);
            }
        }
        &.--zoomIn-sepia{
            filter: sepia(100%);

            &:is(:hover, :active){
                transform: scale(1.1);
                filter: sepia(100%);
            }
        }
        &.--zoomIn-blur{
            filter: blur(2px);

            &:is(:hover, :active){
                transform: scale(1.1);
                filter: none;
            }
        }
        &.--zoomIn-rotation{
            filter: brightness(90%);
            transform: scale(1) rotate(0deg);

            &:is(:hover, :active){
                transform: scale(1.2) rotate(2deg);
                filter: brightness(100%);
            }
        }
        &.--zoomOut-light{
            transform: scale(1.1);
            filter: brightness(80%);

            &:is(:hover, :active){
                transform: scale(1);
                filter: brightness(100%);
            }
        }
        &.--zoomOut-bw{
            filter: grayscale(100%);
            transform: scale(1.1);
            
            &:is(:hover, :active) {
                transform: scale(1);
                filter: grayscale(0%);
            }
        }
        &.--zoomOut-saturation{
            filter: saturate(10%);
            transform: scale(1.1);
            
            &:is(:hover, :active) {
                transform: scale(1);
                filter: saturate(100%);
            }
        }
        &.--zoomOut-sepia{
            filter: sepia(100%);
            transform: scale(1.1);
            
            &:is(:hover, :active) {
                transform: scale(1);
                filter: sepia(100%);
            }
        }
        &.--zoomOut-blur{
            filter: blur(2px);
            transform: scale(1.1);
            
            &:is(:hover, :active) {
                transform: scale(1);
                filter:none;
            }
        }
        &.--zoomOut-rotation {
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