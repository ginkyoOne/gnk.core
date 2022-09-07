<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import {sleep,random, animateValue} from "../../utils/animateValue"

export default {
  name: 'gnkProgressbar',
  extends:gnkComponent,

  data() {
    return {
      progressPercentage: 0,
    }
  },

  props: {
    value: {
      type: Number,
      required: false,
      default: 0,
    },
    max: {
      type: Number,
      required: false,
      default: 100,
    },

    showlabel: {
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


    gradient: {
      type: Boolean,
      required: false,
      default: false,
    },
    shadow: {
      type: Boolean,
      required: false,
      default: false,
    },
    striped: {
      type: Boolean,
      required: false,
      default: false,
    },
    sections: {
      type: Boolean,
      required: false,
      default: false,
    },


    
    loading:{
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    progressInPixels() {
      return ((this.progressPercentage * (this.componentElementClientRect().width / this.max)))
    },

    componentClassObject() {
      return {
        '--primary': true,
        '--size-xl': this.size === 'xl',
        '--size-l': this.size === 'l',
        '--size-small': this.size === 'small',
        '--size-mini': this.size === 'mini',


      }
    },

    componentStyleObject() {
      return {
        '--progress-label': (this.progressInPixels <= 0
                          ? '0'
                          : (this.progressInPixels >= (this.componentElementClientRect().width - 32)
                          ? (this.componentElementClientRect().width - 34) + 'px'
                          : (this.progressInPixels - 15) + 'px')),


        '--progress-label-footer': (this.progressInPixels <= 5
                                  ? '-4px'
                                  : (this.progressInPixels >= (this.componentElementClientRect().width - 25)
                                  ? (this.componentElementClientRect().width - 26) + 'px'
                                  : (this.progressInPixels - 15) + 'px')),

      }
    },
  },

  watch: {

    value(value) {
        this.progressPercentage = value
    },
    max(max) {
      this.max = max
      this.progressPercentage = this.value
    }

  },

  async mounted() {
        await sleep(random(500, 5000))
        this.progressPercentage = this.value
  },
  
}
</script>

<template>
<div
  aria-valuemin="0"
	:aria-valuemax="max"
	:aria-valuenow="progressPercentage"
  :title="`${value}`"
	role="progressbar"
	
  
  :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
  :style="[componentStyleObject]"
	:id="componentId"
  
>

    <div>
        <div :style="`width: ${Math.round((progressPercentage / max) * 100)}%`" class="--progressBar"></div>
        <div v-if="this.sections" class="--sections-steps">
          <div v-for="index in (this.max -1)" :key="index">
          </div>

        </div>
    </div>



<!-- 
    <svg v-if="circular" class="ring"  viewBox="0 0 100 100" preserveAspectRatio="none">
        
        <defs>
          <linearGradient id="gradient"  y1="50%">
            <stop offset="0%" stop-color="var(--color-stop-1)" />
            <stop offset="50%" stop-color="var(--color-stop-2)" />
          </linearGradient>
        </defs>

        <circle stroke-width="18" fill="transparent" r="40" cx="50" cy="50" stroke-linecap="round"  stroke-dasharray="200 200" strokeDashoffset="200" />
        <circle class="ring-circle" stroke-linecap="round" stroke-width="14" fill="transparent" r="40" cx="50" cy="50" :stroke-dasharray="(progressPercentage/ max) * 200 +  ' 253'"   /> 
    </svg>
 -->
  </div>
</template>

<style lang="scss">


.gnkProgressbar{
  min-width: 50px;
  height: 10px; 
  margin: 10px;

  border-radius: var(--BORDER-RADIUS);
  border: var(--BORDER-SIZE)  solid -color('DARK',1,0,0,1);

  background-color: -color('DARK');
  color: -color('BASE-TEXT');

  //PROGRESSBAR CONTAINER
  &>div{
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border: inherit;
    border-radius: inherit;
  }

  //PROGRESSBAR BAR
  & .--progressBar{
    transition: width 1s ease-in-out;
    
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;

    align-items: center;
    justify-content: center;

    background-color: -color('BASE',1,0,0,2);
    border-radius: inherit;
  }

  //PROGRESSBAR LABEL
  &.--showlabel{
    margin-top: 20px;

    &::before{
      transition: transform 1s ease-in-out;

      position: absolute;
      top: -20px;
      left: 0px;
      width: 20px;
      
      padding: 2px 5px;
      display: flex;
      align-items: center;
      justify-content: center;

      content: attr(aria-valuenow);
      font-size: .6rem;
      line-height: .7rem;

      color:inherit;
      background-color: -color('BASE',1,0,0,0);
      border-radius: 5px;
      border: var(--BORDER-SIZE) solid -color('BASE',1,0,0,1);

      transform: translateX(var(--progress-label));
    }
    &::after{
      transition: transform 1s ease-in-out;

      position: absolute;
      top: -5px;
      left: 10px;

      content: '';

      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid  -color('BASE',1,0,0,1);
      
      transform: translateX(var(--progress-label-footer));
      z-index: 0;
    }
  }


  &:is(:disabled, .--disabled){
    pointer-events: none;
    opacity: .8;
    filter:brightness(80%);
  }


  //FORMAT

  &.--square {
    border-radius: 0px;
  }

  //SIZING 

  &.--block{
    width: 100%;
  }
  &.--size-xl {
    border-radius: calc(var(--BORDER-RADIUS) + 4px);
    height: 18px!important;; 
  }
  &.--size-l {
    border-radius: calc(var(--BORDER-RADIUS) + 2px);
    height: 14px!important;
  }
  &.--size-small {
    border-radius: calc(var(--BORDER-RADIUS) - 2px);
    height: 8px!important;
  }
  &.--size-mini {
    border-radius: calc(var(--BORDER-RADIUS) - 4px);
    height: 6px!important;
    padding: 2px;
    border: unset;
  }



  //DECORATION

  &.--gradient{
    & .--progressBar{
      background-image: linear-gradient(90deg, -color('BASE', 1) 0%, -color('BASE', 1, 45, 15, 10) 100%);
    }
  }
  &.--shadow{
    box-shadow: 0px 0.25rem 0.5rem -color('BASE', 0.4);
  }
  &.--striped{
    & .--progressBar{
      background-image: linear-gradient(
        135deg,
        -color('BASE', 1,0,0,-5) 25%,
        -color('BASE') 25%,
        -color('BASE') 50%, 
        -color('BASE', 1, 0, 0, -5) 50%, 
        -color('BASE', 1, 0, 0, -5) 75%, 
        -color('BASE') 75%, 
        -color('BASE'));

      animation: progress-bar-stripes 2s linear infinite;
    }
  }
  &.--loading{
    & .--progressBar{
      width: 100% !important;
      background-image: linear-gradient(
        135deg,
        -color('BASE', 1,0,0,-5) 25%,
        -color('BASE') 25%,
        -color('BASE') 50%, 
        -color('BASE', 1, 0, 0, -5) 50%, 
        -color('BASE', 1, 0, 0, -5) 75%, 
        -color('BASE') 75%, 
        -color('BASE'));

      background-size: 40px 40px;
      animation: progress-bar-stripes 2s linear infinite;
    }
  }

  &.--sections{
    background-color: -color('DARK',1,0,0,2);
    border: var(--BORDER-SIZE) solid -color('DARK');

    & .--sections-steps{
        
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height:inherit;

        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;

        gap: 1%;
        
        &>div{
          width: 2px;
          background-color: -color('DARK');
        }
      }
  }




  //ANIMATIONS
  @keyframes progress-bar-stripes {
    to {
      background-position: 40px 0;
    }

    from {
      background-position: 0 0;
    }
  }
}












</style>
