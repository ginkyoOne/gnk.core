  <script>
  import gnkComponent from "../ComponentBase/gnkComponent.vue"
  import createRipple from "../../utils/ripple"


  export default {
    name: 'gnkButton',
    extends: gnkComponent,
    emits: ['onsubmit','onchange', 'onclick','ondblclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onwheel', 'onfocus', 'onblur','onkeydown','onkeypress','onkeyup'],

    data() {
      return {
        checked: false,
        activeStep: 0,
      }
    },

    props: {

      to: {
        type: String,
        skip: true,
        default: '',
      },


      type: {
        type: String,
        required: false,
        skip: true,
        default: 'button',
        validator(type) {
          return ['submit', 'button', 'reset', 'toggle'].includes(type)
        },
      },






      busy: {
        type: Boolean,
        required: false,
        default: false,
      },

      loading: {
        type: Boolean,
        required: false,
        default: false,
      },

      pill: {
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

      transparent:{
        type: Boolean,
        required: false,
        default: false,
      },
      clear: {
        type: Boolean,
        required: false,
        default: false,
      },
      shadow:{
        type: Boolean,
        required: false,
        default: false,
      },

      size:{
        type: String,      
        required: false,
        default: 'default',
        skip: true,
        validator(type) {
          return ['xl', 'l', 'default', 'small', 'mini'].includes(type)
        },
      },


      animate:{
        type: String,      
        required: false,
        skip: true,
        default: 'default',
        validator(type) {
          return ['slide-up','slide-left', 'fade', 'scale', 'rotate', 'default'].includes(type)
        },
      },
      
      animateInactive:{
        type: Boolean,
        required: false,
        default: false,
      },




    },

    computed: {
      buttonType() {
          return this.type
      },

      componentClassObject() {
        return {
          '--checked': this.type === 'toggle' && this.checked,

          '--size-xl': this.size === 'xl',
          '--size-l': this.size === 'l',
          '--size-small': this.size === 'small',
          '--size-mini': this.size === 'mini',


          '--animate': this.$slots?.animate && !this.animateInactive  ? true : false,

          '--animate-slide-up': this.animate === 'slide-up' && !this.loading && !this.busy && !this.animateInactive ? true : false,
          '--animate-slide-left': this.animate === 'slide-left'  && !this.loading  && !this.busy && !this.animateInactive? true : false,
          '--animate-fade': this.animate === 'fade'  && !this.loading && !this.busy && !this.animateInactive ? true : false,
          '--animate-scale': this.animate === 'scale'  && !this.loading && !this.busy && !this.animateInactive? true : false,
          '--animate-rotate': this.animate === 'rotate'  && !this.loading && !this.busy && !this.animateInactive? true : false,

        }
      },
    },

    emits: ['onchange','click', 'mouseover','mouseleave','mouseover','keydown','keypress','keyup'],

    methods: {

      onToggle(eventName, event) {
        // if thers an click event show the ripple  
        if(!!event) createRipple.createRipple(event)

        //check if the button is a toggle button
        if (this.type === 'toggle') {

          // if the button is checked then uncheck it
          this.checked = !this.checked 

          // create the event
          let thisEvent = { componentId: this.componentId, newValue: this.checked, oldValue: !this.checked, event: event }

          // call parent childchange event if it exists(only on button group)
          if ((typeof this.$parent.childChanged === 'function')) this.$parent.childChanged(thisEvent)

          // raise event
          this.componentRaiseEvent('onchange',thisEvent)
        }

        // raise event
        this.componentRaiseEvent(eventName, { event: event })
        if(this.to !== '') this.$router.push(this.to)
      },


    },

    mounted() {

    },

  }
  </script>

<template>
    <button
      :checked="checked"
      :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
      class="cursor-pointer inline-flex flex-centered "
      :disabled="disabled"
      :id="componentId"
      :type="buttonType "


      @click.prevent="onToggle('click',$event)"
      @mouseleave.prevent="this.componentRaiseEvent('mouseleave',{event: $event})"
      @mouseover.prevent="this.componentRaiseEvent('mouseover',{event: $event})"
      @keydown.prevent="this.componentRaiseEvent('keydown',{event: $event})"
      @keypress.prevent="onToggle('keypress',$event)"
      @keyup.prevent="this.componentRaiseEvent('keyup',{event: $event})">


      <transition name="fade">
        <gnk-progressbar v-if="this.loading" loading class="fill " />
      </transition>



      <div class="--ripple" />


      <div class="--content-holder">
        <div class="--content-step1">
          <slot>


          </slot>
        </div>
          <div class="--content-step2" v-if="!!this.$slots.animate">
            <slot name="animate">


            </slot>
          </div>
      </div>


      <transition name="fade">
        <gnk-loading v-if="this.busy" :target="'#' + componentId" />
      </transition>


      <div class="--badge-holder">
        <slot name="badge" />
      </div>


  </button>
</template>

<style lang="scss">

  .gnkButton{
    transition: all 0.3s ease-in-out; 
    isolation: isolate;
    user-select: none;

    position: relative;

  
    background-color: -color('BASE');
    color: -color('BASE-TEXT');
  
    border-radius: var(--BORDER-RADIUS);
    border-width: var(--BORDER-SIZE);
    border-style: solid;
    border-color: -color('BASE',1,0,0,1.5); 
  
    width: max-content;
    height: fit-content;
  
    margin:5px;
    padding: 8px 12px;
  
    font-size: .8rem;
    line-height: 1rem;
  
    //box-shadow: 0px 5px 1rem -color('BASE', 0.4);
    &::after{
      transition: all .2s ease-in-out;
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      -moz-border-radius: inherit;
      -webkit-border-radius: inherit;

      z-index: -1;
      transform:scale(0);
    }

    //INTERACTION
    &:is(:disabled, .--disabled){
      pointer-events: none;
      opacity: .8;
      filter:brightness(80%);
    }

    &:is(:hover, :focus){
      border-width: var(--BORDER-SIZE);
      &>.--content-holder{
        opacity: 1;
      }
      &::after{
        background-color: -color('BASE', .5,0,0,5);
        transform:scale(1);
      }
    }       

    &:is(:active, :checked, .--checked) {
      opacity: 1;
      border-width: var(--BORDER-SIZE);

      &::after {
        background-color: -color('BASE', .5, 0, 0, 10);
        transform:scale(1);
      }
      
      &:not(.--clear):is(:checked , .--checked){
        box-shadow: inset 0px 0px 10px  -color('LEVEL-0', .5,0,0,-10);

        &::after{
          background-color: -color('BASE', .2, 0, 0, -10);
        }
      }


    }

    &:active{
      transform: scale(.9);
    }


    //BASE STYLES
    &.--loading, &.--busy{
      pointer-events: none;
      cursor: auto;
      &>.--content-holder>[class*="--content-step"]{
        color: -color('BASE-TEXT', .5);
      }
    }

    &>.gnkProgressbar,&>.gnkLoading,&>.--badge-holder,&>.--ripple{
      border-radius: inherit !important;
      position: absolute;
      inset: 0;
      margin: 0;
      border: unset;
    }

    &>.--ripple{
      border-radius: var(--BORDER-RADIUS);
      overflow: hidden;
    }

    &>.--content-holder{
      transition: all .2s ease-in-out;
      position: relative;

      display: grid;
      grid: 1fr / 1fr;

      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: inherit !important;
      line-height: inherit !important;

      overflow: hidden;

      &>[class*="--content-step"]{
        
        border-radius: inherit;
        position: relative;
        display: flex;
        grid-column: 1;
        grid-row: 1;

        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        gap: 5px;
        font-size: inherit !important;
        line-height: inherit !important;

        transition: all .25s ease-in-out;
      }
      &>.--content-step2{
        opacity: 0;
      }
    }
  

    // SIZING
    &.--size-xl {
      //border-radius: 20px;
      padding: 15px 20px;
      font-size: calc(var(--FONT-SIZE) + 0.2rem);
      line-height: calc(var(--LINE-HEIGHT) + 0.2rem);
    }

    &.--size-l {
      border-radius: 15px;
      padding: 10px 15px;
      font-size: calc(var(--FONT-SIZE) + 0.1rem);
      line-height: calc(var(--LINE-HEIGHT) + 0.1rem);
    }

    &.--size-small {
      border-radius: 9px;
      padding: 5px 10px;
      font-size: calc(var(--FONT-SIZE) - 0.1rem);
      line-height: calc(var(--LINE-HEIGHT) - 0.1rem);
    }

    &.--size-mini {
      border-radius: 7px;
      padding: 3px 8px;
      font-size: calc(var(--FONT-SIZE) - 0.2rem);
      line-height: calc(var(--LINE-HEIGHT) - 0.1rem);
    }
    
    

    //FORMAT 
    &.--pill{
      border-radius: 100vmax;
    }
                          
    &.--circular {
      height: 34px;
      width: 34px;
      border-radius: 50%;
      aspect-ratio: 1/1;

      & .--size-xl{
        height: 44px;
        width: 44px;
      }
      & .--size-l{
        height: 40px;
        width: 40px;
      }
      & .--size-small{
        height: 32px;
        width: 32px;
      }
      & .--size-mini{
        height: 28px;
        width: 28px;
      }
      
    }

    &.--square {
      border-radius: 0px;
    }

    &.--block {
        width: 100% !important;
        display: block !important;
    }


    //STYLES          
    &.--border{
      border-width: calc(var(--BORDER-SIZE) * 2);
      background-color: transparent;

    }

    &.--gradient{
      background-image: linear-gradient(30deg, -color('BASE', 0) 50%, -color('BASE', 1, 45, 15, 10) 100%);
    }

    &.--transparent{
      
      &:is(.--info,.--primary, .--success,.--warning,.--danger,.--bug){
        color: -color('BASE');
      }

      background-color: transparent;
      border: none;

      &:is(:active, :checked,:hover, :focus ){
        color: -color('BASE-TEXT');
      }
    }

    &.--clear{

      &:is(.--info,.--primary, .--success,.--warning,.--danger,.--bug){
        color: -color('BASE');
      }
      

      background-color: transparent;
      border: none;
      opacity: 0.9;

      &::after{
        visibility: hidden;
      }

      &>.--ripple{
        visibility: hidden;
      }

      &:is(:hover, :focus){
        opacity: 1;
      }

      &:is(:active, :checked){
        opacity: .8;
      }
    }
    
    &.--shadow{
      box-shadow: 0px 0.25rem 0.5rem -color('BASE', 0.4);
    }




    &.--animate{     
        &.--animate-slide-up{
          .--content-step2{
            transform: translateY(100%);
            opacity: 0;
          }
          &:is(:hover, :focus,:active){
            .--content-step1{
              transform: translateY(-100%);
              opacity: 0;
            }
            .--content-step2{
              transform: translateY(0%);
              opacity: 1;
            }
          }
        }

        &.--animate-slide-left{
            .--content-step2{
              transform: translateX(-100%);
              opacity:0;
            }
          &:is(:hover, :focus,:active){
            .--content-step1{
              transform: translateX(100%);
              opacity: 0;
            }
            .--content-step2{
              transform: translateX(0);
              opacity: 1;
            }
          }
        }

        &.--animate-fade{
            .--content-step2{
              opacity: 0;
            }
          &:is(:hover, :focus,:active){
            .--content-step1{
              opacity: 0;
            }
            .--content-step2{
              opacity: 1;
            }
          }
        }

        &.--animate-scale{
            .--content-step2{
              transform: scale(-1);
              opacity: 0;
            }
          &:is(:hover, :focus,:active){
            .--content-step1{
              transform:scale(1.5);
              opacity: 0;
            }
            .--content-step2{
              transform:scale(1);
              opacity: 1;
            }
          }
        }

        &.--animate-rotate{
            .--content-step2{
              transform: rotate(-180deg);
              opacity: 0;
            }
          &:is(:hover, :focus,:active){
            .--content-step1{
              transform: rotate(180deg);
              opacity: 0;
            }
            .--content-step2{
              transform: rotate(0deg);
              opacity: 1;
            }
          }
        }
    }























      //ANIMATIONS
.fade-enter-active,
.fade-leave-active {
  transition: opacity .25s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}



}
</style>
