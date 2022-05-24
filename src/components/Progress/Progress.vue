<template>
  <div
    :class="[componentClassObject,componentGeneralClasses]"
    class="gnkProgress --primary"
    role="progressbar"
    :title="`${progressPercentage}%`"
    aria-valuemin="0"
    :aria-valuemax="max"
    :aria-valuenow="value"
  >
    <div  :style="`width: ${progressPercentage}%`" />
  </div>
</template>
<script>
import mixin from "../../mixin/gnkComponent"

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

    progressPercentage() {
      const value = Number(this.value)
      const max = Number(this.max)

      if (Number.isNaN(value) || Number.isNaN(max)) {
        return 0
      }

      return Math.round((value / max) * 100)
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
<style lang="scss">
@import "../../scss/base";

.gnkProgress {
  position: relative;
  
  min-width: 100px;
  height: 10px;

  overflow: hidden;
  border-radius: var(--BORDER-RADIOS);
  background-color: -color('BASE', 0.2);

  &>div {
    position: relative;
    top: 0;
    left: 0;
    height: 100%;

    background-color: -color('BASE', 1);
    border-radius: inherit;
    min-width: calc(var(--BORDER-RADIOS) * 2);
    transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  }


  &.--size-xl {
    border-radius: calc(var(--BORDER-RADIOS) + 4px);
    height: 18px; 
  }
  &.--size-l {
    border-radius: calc(var(--BORDER-RADIOS) + 2px);
    height: 14px;
  }
  &.--size-small {
    border-radius: calc(var(--BORDER-RADIOS) - 2px);
    height: 8px;
  }
  &.--size-mini {
    border-radius: calc(var(--BORDER-RADIOS) - 4px);
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

    &>div {
      background: repeating-linear-gradient(
        145deg,
        -color('BASE', 0.6),
        -color('BASE', 1) 10px,
      );
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
}







</style>
