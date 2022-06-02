<script>
import mixin from "../ComponentBase/gnkComponent"

export default {
  name: 'gnkProgress',
  mixins:[mixin.gnkComponent],

  props: {
    value: {
      type: [Number, String],
      required: false,
      default: 0,
    },
    max: {
      type: [Number, String],
      required: false,
      default: 100,
    },


    border:{
      type: Boolean,
      required: false,
      default: false,
    },
    gradient:{
      type: Boolean,
      required: false,
      default: false,
    },
    relief:{
      type: Boolean,
      required: false,
      default: false,
    },
    transparent:{
      type: Boolean,
      required: false,
      default: false,
    },
    shadow:{
      type: Boolean,
      required: false,
      default: false,
    },


    circular: {
      type: Boolean,
      required: false,
      default: false,
    },
    square: {
      type: Boolean,
      required: false,
      default: false,
    },
    size:{
      type: String,      
      required: false,
      default: 'default',
      validator(type) {
        return ['xl', 'l', 'default', 'small', 'mini'].includes(type)
      },
    },
    loading:{
      type: Boolean,
      required: false,
      default: false,
    },

    block:{
      type: Boolean,
      required: false,
      default: false,
    },
    floating:{
      type: Boolean,
      required: false,
      default: false,
    },
    flat:{
      type: Boolean,
      required: false,
      default: false,
    },

  },

  computed: {

    progressCircularPercentage() {
      console.log('progressCircularPercentage', this.value, this.max)
      return (200 * ((Number.isNaN(Number(this.value)) ? 0 : Number(this.value)  ) / (Number.isNaN(Number(this.max)) ? 100 : Number(this.max)))) ;
    },

    progressPercentage() {
      return Math.round(((Number.isNaN( Number(this.value)) ? 0 : Number(this.value)) / (Number.isNaN(Number(this.max))? 100 : Number(this.max))) * 100)
    },
    componentClassObject() {
      return {

        '--floating': this.floating,

        '--flat': this.flat,
        '--border': this.border,
        '--gradient': this.gradient,
        '--relief': this.relief,
        '--transparent': this.transparent,
        '--shadow': this.shadow,

        '--size-xl': this.size === 'xl',
        '--size-l': this.size === 'l',
        '--size-small': this.size === 'small',
        '--size-mini': this.size === 'mini',

        
        '--loading': this.loading,
      }
    },
  },
  
}
</script>

<template>
  <div
    :id="componentId"  :class="[componentName, componentClassObject , componentGeneralClasses]"
    class="--primary"
    role="progressbar"
    :title="`${progressPercentage}%`"
    aria-valuemin="0"
    :aria-valuemax="max"
    :aria-valuenow="value"
  >
    <div v-if="!circular"  :style="`width: ${progressPercentage}%`" />

    <svg v-if="circular" class="ring"  viewBox="0 0 100 100" preserveAspectRatio="none">
        
        <defs>
          <linearGradient id="gradient"  y1="50%">
            <stop offset="0%" stop-color="var(--color-stop-1)" />
            <stop offset="50%" stop-color="var(--color-stop-2)" />
          </linearGradient>
        </defs>

        <circle stroke-width="18" fill="transparent" r="40" cx="50" cy="50" stroke-linecap="round"  stroke-dasharray="200 200" strokeDashoffset="200" />
        <circle class="ring-circle" stroke-linecap="round" stroke-width="14" fill="transparent" r="40" cx="50" cy="50" :stroke-dasharray="progressCircularPercentage +  ' 253'"   /> 
    </svg>

  </div>
</template>

<style lang="scss">

.gnkProgress {
  position: relative;
  
  min-width: 100px;
  height: 10px;

  overflow: hidden;
  border-radius: var(--BORDER-RADIUS);
  background-color: -color('BASE', 0.2);

  &>div {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;

    background-color: -color('BASE', 1);
    border-radius: inherit;
    min-width: calc(var(--BORDER-RADIUS) * 2);
    transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  }

  &.--size-xl {
    border-radius: calc(var(--BORDER-RADIUS) + 4px);
    height: 18px; 
  }
  &.--size-l {
    border-radius: calc(var(--BORDER-RADIUS) + 2px);
    height: 14px;
  }
  &.--size-small {
    border-radius: calc(var(--BORDER-RADIUS) - 2px);
    height: 8px;
  }
  &.--size-mini {
    border-radius: calc(var(--BORDER-RADIUS) - 4px);
    height: 6px;
  }


  &.--floating{
    &:is(:hover):not(.--relief, .--flat) {
        transition: transform 0.2s ease;
        transform: translateY(-2px);
        opacity: 1;
      
        &:is(.--size-small) {
          box-shadow: 0px 5px 10px -2px -color('BASE', 1);
        }
        &:is(.--size-mini) {
          box-shadow: 0px 5px 10px -1px -color('BASE', 1);
        }
        &:not(.--size-small, .--size-mini) {
          box-shadow: 0px 5px 10px -4px -color('BASE', 1);
        }
    }

  }


  &.--block{
    width: 100% !important;
  }
  &.--square{
    border-radius: 0;
    &>div {
      border-radius: 0;
    }
  }



  &.--flat{
    transition: opacity 0.2s ease, color 0.2s ease;
    &>div {
      background-color: -color('BASE', 0.5);
    }

    &:is(:hover){
      background-color: -color('BASE',0.4);
      &>div {
        background-color: -color('BASE', 1);
      }
    }

  }
  &.--border{

    transition: border 0.2s ease, background-color 0.4s ease, color 0.2s ease ,transform 0.2s ease !important;
    border:  var(--BORDER-SIZE) solid -color('BASE', 0.2);
    background: transparent;
    

    &:is(:hover){
      border: var(--BORDER-SIZE)  solid -color('BASE', 0.6);
      &:not(.disabled, .--flat,.--relief){
        transition: transform 0.2s ease;
        transform: translateY(-2px);
      }
    }

  }
  &.--gradient{
    transition: opacity 0.2s ease, color 0.2s ease;
        &>.ring>.ring-circle {
          stroke: url(#gradient) -color('BASE');
        }
        
    &>div {
      background:repeating-linear-gradient(
        145deg,
        -color('BASE', 1),
        -color('BASE', 1) 10px,
        -color('BASE', 1, 0,0,-5) 10px,
        -color('BASE', 1, 0,0,-5) 20px,
      ),
      linear-gradient(
        90deg,
        transparent,
        -color('BASE', 1, 0,0,-5),
      )
    }
  }
  &:is(.--primary, .--success):is(.--gradient){
      &::after{
        filter: hue-rotate(40deg);
      }
  }

  &.--relief{
    
    background: -color('BASE',0.2);
    color: -color('BUTTON-TEXT');
    overflow: hidden;
    
    transition: all 0.3s ease;
    
    transform: translateY(-4px) scale(1,1);
    padding-bottom: 4px;
    

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;

      width: 100%;
      height: calc(100% - 4px);

      filter: contrast(2) grayscale(.4);
      border-bottom: 3px solid -color('BASE', 1);
      border-radius: inherit;
      box-sizing: border-box;
      
      z-index: 2;
    }
  }


  &.--shadow{
    transition: box-shadow 0.2s ease, translateY 0.2s ease;
    background:transparent; 
    transform:translateY(0px);

    &:is(:hover){
      transform:translateY(-2px);
      box-shadow: 0px 5px 15px 0px -color('DARK', 0.8) !important;
    }
  }


  &.--transparent{
    background:transparent;
    
    &::after{
      content: '';
      background: -color('BASE', .2);
      position: absolute;
      box-sizing: border-box;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 100%;

      border-radius: inherit;

      transition: all .25s ease;
      transform: scale(.5);
      opacity: 0;
      
      z-index: 1;
    }

    &:is(:hover){
      &::after{
        opacity: 0.8;
        transform: scale(1) !important;
      }
    }

  }


  &.--loading{
    pointer-events: none;
    user-select: none;
    &>div {
      position:absolute;
      width: 100%!important;
      animation: loading 3s infinite;
      animation-timing-function: ease-in-out;
    }
  }


  @keyframes loading {
    0% {
      left:-100%;
    }
    50%{
      left:0%;
    }
    100% {
      left: 100%;
    }
  }



  &.--circular{
    
    --color-stop-2: hsla(calc(var(--COLOR-BASE-H)), var(--COLOR-BASE-S)  , var(--COLOR-BASE-L), 1);
    --color-stop-1: hsla(calc(var(--COLOR-BASE-H) + 45), var(--COLOR-BASE-S)  , var(--COLOR-BASE-L), 1);

    background: transparent;
    min-width: 100px;
    min-height: 100px;
    &>.ring {
        display: block;
        transform: rotate(125deg);
        stroke: -color('BASE', 0.3);
      &>.ring-circle {

          transition: stroke-dashoffset 0.60s ease;
      }
    }

    
  }
}







</style>
