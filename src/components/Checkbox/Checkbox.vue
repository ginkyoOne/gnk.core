
<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import createRipple from "../../utils/ripple"

export default {
  name: 'gnkCheckbox',
  extends: gnkComponent,
  emits: ['onchange','click', 'mouseover','mouseleave','mouseover','keydown','keypress','keyup'],

  data() {
    return {
      value: false,
    }
  },

  props: {
    checked: {
      type: Boolean,
      required: false,
      default: false,
      skip: true,
    },

    busy: {
      type: Boolean,
      default: false,
    },

    loading: {
      type: Boolean,
      default: false,
    },

    lineThrough: {
      type: Boolean,
      default: false,
    },

    align: {
      type: String,
      default: 'right',
      skip: true,
      validator: (value) => ['left', 'center', 'right'].includes(value)
    },

    indeterminate: {
      type: Boolean,
      default: false,
      skip: true,
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
        return ['rotate','scale', 'flip','default'].includes(type)
      },
    },


  },
  
  computed: {
      componentClassObject: function() {
      return {
          '--primary': true,
          '--checked': this.value,
          '--align-left': this.align === 'left',


          '--size-xl': this.size === 'xl',
          '--size-l': this.size === 'l',
          '--size-small': this.size === 'small',
          '--size-mini': this.size === 'mini',


          '--animate-rotate': this.animate === 'rotate' && !this.loading && !this.busy ? true : false,
          '--animate-scale': this.animate === 'scale'  && !this.loading  && !this.busy ? true : false,
          '--animate-flip': this.animate === 'flip'  && !this.loading && !this.busy ? true : false,
        }
      },
  },

  watch: {
    checked(newValue) {
        // raise event
      console.log('checked changed', newValue)
      this.value = newValue;
      this.componentRaiseEvent('onchange', { componentId: this.componentId, newValue: this.value, oldValue: !this.value, event: null })
    },
  },

  methods: {
    onToggle(eventName, event) {
        if(!!event) createRipple.createRipple(event)
        // if the button is checked then uncheck it
        this.value = !this.value
        // create the event
        let thisEvent = { componentId: this.componentId, newValue: this.value, oldValue: !this.value, event: event }
        // raise event
        this.componentRaiseEvent(eventName, thisEvent)
        this.componentRaiseEvent('onchange', thisEvent)

    },
  },

  mounted() {
    this.value = this.checked
  },

}
</script>


<template>
  <div :disabled="disabled" :class="[componentName, componentClassObject , componentGeneralClasses]"
    :id="componentId"

    @click.prevent="onToggle('click',$event)"
    @mouseleave.prevent="this.componentRaiseEvent('mouseleave',{event: $event})"
    @mouseover.prevent="this.componentRaiseEvent('mouseover',{event: $event})"
    @keydown.prevent="this.componentRaiseEvent('keydown',{event: $event})"
    @keypress.prevent="onToggle('keypress',$event)"
    @keyup.prevent="this.componentRaiseEvent('keyup',{event: $event})">

      
      <div class="--checkbox">
        <input
          aria-hidden="true"
          type="checkbox"
          :disabled="disabled"
          :checked="value"
        />

        

        <div class="--checkbox-custom">
        
          <span v-if="!indeterminate" class="material-symbols-rounded">
            done
          </span>
          <span v-else class="material-symbols-rounded">
            remove
          </span>
        </div>

        <gnk-loading v-if="this.busy" :target="'#' + componentId + '> div > div.--checkbox-custom'" />

        <div class="--ripple" />

      </div>
      

      <label :for="componentId" class="--checkbox-label">
        <slot name="label" />
      </label>

      <div class="--badge-holder">
        <slot name="badge" />
      </div>
    </div>
</template>


<style lang="scss">

  .gnkCheckbox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;


    gap: 5px;

    position: relative;
    user-select: none;
    
    color: -color('BASE-TEXT');

    border-width: var(--BORDER-SIZE);
    border-style: solid;
    border-radius: calc(var(--BORDER-RADIUS) / 2);
    border-color: transparent;



    &>.--badge-holder{
      border-radius: inherit !important;
      position: absolute;
      inset: 0;
      margin: 0;
      border: unset;
    }

  

    &:is(:hover,:active, :focus){
      cursor: pointer;

      &>.--checkbox>.--checkbox-custom{
        filter:brightness(1.2);
      }
    }

    &:active{
      &>.--checkbox>.--checkbox-custom{
        transform: scale(.9);
      }
    }
    

    &:is(:checked, .--checked){
      &:is(.--lineThrough)>.--checkbox-label{
        color:-color('BASE-TEXT',.6);


        &::after{
          background-color: -color('BASE-TEXT',.6);
          transform: scaleX(1);
        }
        
      }

      &>.--checkbox{
        &>.--checkbox-custom{
          background-color: -color('BASE');
          border-color: -color('BASE'); 
          
          box-shadow: inset 0px 0px 10px  -color('LEVEL-0', .5,0,0,-10);

          &::after{
            background-color: -color('BASE', .5, 0, 0, 10);
            transform: scale(1.05);
          }
          
          &>span{
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
        }
      }
    }

    &:is(.--align-left) {
      flex-direction: row-reverse;
    }

    &>.--checkbox{
      transition: all 0.5s ease-in-out;
      border-radius: inherit;
      border-width: inherit;
      border-style: inherit;
      border-color: inherit;

      &>input{
        display: none;
      }

      &>.--checkbox-custom{
        isolation: isolate;
        transition: all 0.5s ease-in-out;

        position:relative;
        width: 25px;
        height: 25px;

        background-color: -color('DARK');
        
        border-radius: inherit;
        border-width: inherit;
        border-style: inherit;
        border-color: -color('DARK',1,0,0,1.5); 

        &::after{
          transition: all .2s ease-in-out;
          content: '';
          position: absolute;
          inset: 0;

          border-radius: inherit;
          background-color: -color('BASE', .5, 0, 0, 10);
          transform: scale(0);
          z-index: -1;
        }

        &>span{
          transition: all 0.5s ease-in-out;

          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0) rotate(90deg);
          opacity: 0;
        }
      }

      &>.gnkProgressbar,&>.gnkLoading,&>.--ripple{
      overflow: hidden;
      border-radius: inherit !important;
      position: absolute;
      inset: 0;
      margin: 0;
      border: unset;
      }

    }

    &:is(:disabled, .--disabled){
      pointer-events: none;
      opacity: .6;
      filter:brightness(80%);
    }

    &.--busy{
      cursor: progress;
      pointer-events: none;
      
    }

    &>.--checkbox-label{
      cursor: pointer;
      border-radius: inherit;
      line-height: inherit;
      font-size: inherit;

      &::after{
        transition: all 0.2s ease-in-out;

        content: '';
        position: absolute;
        top: calc(50% - 1px);
        left: 0px;
        width: 100%;
        height: 2px;
        
        background-color: -color('BASE-TEXT');
        border-radius: inherit;

        transform: scaleX(0);
      }
    }







    // SIZING
    &.--size-xl {
      &>.--checkbox>.--checkbox-custom{
        width: 35px;
        height: 35px;
        font-size: calc(var(--FONT-SIZE) + 1rem);
      }
      border-radius: calc(20px / 2);
      font-size: calc(var(--FONT-SIZE) + 0.2rem);
      line-height: calc(var(--LINE-HEIGHT) + 0.2rem);
    }

    &.--size-l {
      &>.--checkbox>.--checkbox-custom{
        width: 30px;
        height: 30px;
        font-size: calc(var(--FONT-SIZE) + .5rem);
      }
      border-radius: calc(15px / 2);
      font-size: calc(var(--FONT-SIZE) + 0.1rem);
      line-height: calc(var(--LINE-HEIGHT) + 0.1rem);
    }

    &.--size-small {
      &>.--checkbox>.--checkbox-custom{
        width: 20px;
        height: 20px;
      }
      border-radius: calc(9px / 2);
      font-size: calc(var(--FONT-SIZE) - 0.1rem);
      line-height: calc(var(--LINE-HEIGHT) - 0.1rem);
    }

    &.--size-mini {
      &>.--checkbox>.--checkbox-custom{
        width: 15px;
        height: 15px;
      }
      border-radius: calc(7px / 2);
      font-size: calc(var(--FONT-SIZE) - 0.2rem);
      line-height: calc(var(--LINE-HEIGHT) - 0.1rem);
    }
    
    

    //FORMAT        
    &.--circular {
      border-radius: 100vmax;
    }

    &.--square {
      border-radius: 0px;
    }

    &.--block {
      width: 100% !important;
      height: fit-content !important;
      
      &>.--checkbox-label{
        width: 100% !important;
        display: inline-block !important;
      }
    }


    //STYLES          
    &.--border{
      border-width: calc(var(--BORDER-SIZE) * 2);
      &>.--checkbox>.--checkbox-custom{
        background-color: transparent;
      }
    }

    &.--gradient{
      &:is(:checked, .--checked){
        &>.--checkbox>.--checkbox-custom{
          background-image: linear-gradient(30deg, -color('BASE', 0) 50%, -color('BASE', 1, 45, 15, 10) 100%);
        }
      }
    }
    
    &.--shadow{
      &>.--checkbox>.--checkbox-custom{
        box-shadow: 0px 5px 1rem -color('DARK', 0.4);
      }
      &:is(:checked, .--checked){
        &>.--checkbox>.--checkbox-custom{
          box-shadow: 0px 0.25rem 0.5rem -color('BASE', 0.4);
        }
      }
      
    }





  &.--animate-rotate{
      &>.--checkbox{
        transform: rotate(180deg);
      }
      &:is(:checked, .--checked){
        &>.--checkbox{
          transform: rotate(0deg);
        }
      }
  }

  &.--animate-scale{
      &>.--checkbox{
        transform: scale(0.8);
      }
      &:is(:checked, .--checked){
        &>.--checkbox{
          transform: scale(1);
        }
      }
  }

  &.--animate-flip{

      &>.--checkbox{
        transform: rotateY(180deg);
      }
      &:is(:checked, .--checked){

        &>.--checkbox{
          transform: rotateY(0deg);
        }
      }
  }

 





  }

</style>
