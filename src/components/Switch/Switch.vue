
<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import createRipple from "../../utils/ripple"

export default {
  name: 'gnkSwitch',
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

    indeterminate: {
      type: Boolean,
      default: false,
      skip: true,
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


  },
  
  computed: {
      componentClassObject: function() {
      return {
          '--primary': true,
          '--checked': this.value,


          '--size-xl': this.size === 'xl',
          '--size-l': this.size === 'l',
          '--size-small': this.size === 'small',
          '--size-mini': this.size === 'mini',

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

      

        <input
          aria-hidden="true"
          type="checkbox"
          :disabled="disabled"
          :checked="value"
        />

        
        <div class="--switch">

          <div class="--switch-custom">
            <div class="--ripple" />
          </div>
          <gnk-loading v-if="this.busy" :target="'#' + componentId + '> .--switch'" />

        </div>
        



        <label :for="componentId" class="--switch-label">
            <slot/>
        </label>




        <div class="--badge-holder">
          <slot name="badge" />
        </div>


      



    </div>
</template>


<style lang="scss">

  .gnkSwitch {
    transition: all .25s ease-in-out;
    display: flex;

    height: 28px;
    min-width: 48px;
    

    position: relative;
    user-select: none;
    cursor: pointer;

    border-radius: 100vmax;
    
    &>input{
      display: none;
    }

    
    &>.--badge-holder, &>.--switch>.--switch-custom>.--ripple{
      border-radius: inherit !important;
      position: absolute;
      inset: 0;
      margin: 0;
      border: unset;
    }

    &>.--badge-holder{
      z-index: 2;
    }

    &>.--switch>.--switch-custom>.--ripple{
      opacity: .5;
    }
    
    &>.--switch{
      position: relative;
      height: 100%;
      width: 100%;

      padding: 5px;

      overflow: hidden;
      color: -color('BASE-TEXT');
      background-color: -color('DARK');

      border-width: var(--BORDER-SIZE);
      border-style: solid;
      border-radius: inherit;
      border-color: -color('DARK',1,0,0,2);

      &>.--switch-custom{
        transition: all .25s ease-in-out;
        position: absolute;
        overflow: hidden;
        
        top: 3px;
        left: 3px;

        height: 20px;
        width: 20px;
        border-radius: inherit;
        background-color: -color('LIGHT');
        z-index: 1;
      }

      &::after{
        transition: all .25s ease-in-out;

        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: -color('BASE');
        transform: translateX(-100%);
      }
    }

    &:is(:checked, .--checked){
      &>.--switch{
        &>.--switch-custom{
          left: calc(100% - 23px);
        }

        &::after{
          transform: translateX(0);
          //box-shadow: inset 0px 0px 10px  -color('LEVEL-0', .5,0,0,-10);
        }
      }
    }

    &:active{
      &>.--switch{
        transform: scale(.9);
      }
    }
    
    &.--busy{
      width: 28px;
      min-width: 28px;
      height: 28px;

      pointer-events: none;
      &>.--switch>.--switch-custom{
        left: calc(3px);
      }
    }

    &:is(:disabled, .--disabled){
      pointer-events: none;
      opacity: .6;
      filter:brightness(80%);
    }



/* 
    &:is(:hover,:active, :focus){
      cursor: pointer;

      &>.--switch>.--switch-custom{
        filter:brightness(1.2);
      }
    }

    &:is(:checked, .--checked){
      &:is(.--lineThrough)>.--switch-label{
        color:-color('BASE-TEXT',.6);


        &::after{
          background-color: -color('BASE-TEXT',.6);
          transform: scaleX(1);
        }
        
      }

      &>.--switch{
        &>.--switch-custom{
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

    &>.--switch{
      transition: all 0.5s ease-in-out;
      border-radius: inherit;
      border-width: inherit;
      border-style: inherit;
      border-color: inherit;

      &>input{
        display: none;
      }

      &>.--switch-custom{
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

    &>.--switch-label{
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

 */





    // SIZING
    &.--size-xl {
      height: calc(28px * 2);
      min-width: calc(48px *2);
      width: calc(48px *2);

      &>.--switch>.--switch-custom{
        height: calc(20px * 2);
        width: calc(20px * 2);
        font-size: calc(var(--FONT-SIZE) + 1rem);
      }
      border-radius: calc(20px / 2);
      font-size: calc(var(--FONT-SIZE) + 0.2rem);
      line-height: calc(var(--LINE-HEIGHT) + 0.2rem);
    }

    &.--size-l {
      height: calc(28px * 1.5);
      min-width: calc(48px * 1.5);
      width: calc(48px * 1.5);

      &>.--switch>.--switch-custom{
        height: calc(20px * 2);
        width: calc(20px * 2);
        font-size: calc(var(--FONT-SIZE) + 1rem);
      }
      border-radius: calc(15px / 2);
      font-size: calc(var(--FONT-SIZE) + 0.1rem);
      line-height: calc(var(--LINE-HEIGHT) + 0.1rem);
    }

    &.--size-small {
      height: calc(28px * .8);
      min-width: calc(48px * .8);
      width: calc(48px * .8);

      &>.--switch>.--switch-custom{
        height: calc(20px * .8);
        width: calc(20px * .8);
        font-size: calc(var(--FONT-SIZE) + 1rem);
      }
      border-radius: calc(9px / 2);
      font-size: calc(var(--FONT-SIZE) - 0.1rem);
      line-height: calc(var(--LINE-HEIGHT) - 0.1rem);
    }

    &.--size-mini {
      height: calc(28px * .6);
      min-width: calc(48px *.6);
      width: calc(48px *.6);

      &>.--switch>.--switch-custom{
        height: calc(20px * .6);
        width: calc(20px * .6);

        font-size: calc(var(--FONT-SIZE) + 1rem);
      }
      border-radius: calc(7px / 2);
      font-size: calc(var(--FONT-SIZE) - 0.2rem);
      line-height: calc(var(--LINE-HEIGHT) - 0.1rem);
    }
    
    

    //FORMAT        
    &.--square {
      border-radius: 0px;
    }

    //STYLES          
    &.--border{
      &>.--switch{
        background-color: transparent;
        border-width: calc(var(--BORDER-SIZE) * 2);
        &>.--switch-custom{
          top:2px;
        }
      }
    }

    &.--gradient{
      &:is(:checked, .--checked){
        &>.--switch::after{
          background-image: linear-gradient(30deg, -color('BASE', 0) 50%, -color('BASE', 1, 45, 15, 10) 100%);
        }
      }
    }
    
    &.--shadow{
      &>.--switch{
        box-shadow: 0px 5px 1rem -color('DARK', 0.4);
      }
      &:is(:checked, .--checked){
        &>.--switch{
          box-shadow: 0px 0.25rem 0.5rem -color('BASE', 0.4);
        }
      }
      
    }





 





  }

</style>
