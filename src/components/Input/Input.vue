<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import createRipple from "../../utils/ripple"

export default {
  name: 'gnkInput',
  extends: gnkComponent,
  emits: ['update:modelValue','click','mouseleave','mouseover','keydown','keypress','keyup'],
  data() {
    return {
      text: this.modelValue,
    }
  },

  props: {

    modelValue: {
      type: String,
      required: false,
      default: undefined,
      skip:true,
    },

    placeholder: {
      type: String,
      required: false,
      default: undefined,
      skip: true,
    },
    
    icon: {
      type: String,
      required: false,
      default: undefined,
      skip: true
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

    square: {
        type: Boolean,
        required: false,
        default: false,
    },

    lineThrough: {
      type: Boolean,
      required: false,
      default: false,
    },

    align: {
      type: String,
      default: 'right',
      skip: true,
      validator: (value) => ['left', 'center', 'right'].includes(value)
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
        return ['fade','scale', 'flip','default'].includes(type)
      },
    },



  },

  computed: {
    //STYLING CLASSES  
    componentClassObject: function () {
      return {
          '--primary': true,
          '--align-left': this.align === 'left',


          '--size-xl': this.size === 'xl',
          '--size-l': this.size === 'l',
          '--size-small': this.size === 'small',
          '--size-mini': this.size === 'mini',


          '--animate-fade': this.animate === 'fade' && !this.loading && !this.busy ? true : false,
          '--animate-scale': this.animate === 'scale'  && !this.loading  && !this.busy ? true : false,
          '--animate-flip': this.animate === 'flip'  && !this.loading && !this.busy ? true : false,

          '--no-placeholder' : this.placeholder === undefined,

        }
    },
  },


  watch: {
    modelValue(newModelValue) {
      this.text = newModelValue
    },
    text(newValue) {
      this.$emit('update:modelValue', newValue)
    },
  },

  methods: {
    onchange(eventName, data) {
      console.log(data.event)

      if (!!data.event & !this.disabled & !this.busy & !this.loading) createRipple.createRipple(data.event)
      this.componentRaiseEvent(eventName, data )
    },
    clearText(event) {
      //if (!!event & !this.disabled & !this.busy & !this.loading) createRipple.createRipple(event)
      this.text = undefined
      this.$emit('update:modelValue', undefined)

    }
  }


}
</script>

<template>



  <div :disabled="disabled" :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
    :id="componentId"

    @click="this.onchange('click',{event: $event})"
    @mouseleave="this.componentRaiseEvent('mouseleave',{event: $event})"
    @mouseover="this.componentRaiseEvent('mouseover',{event: $event})"
    @keydown="this.componentRaiseEvent('keydown',{event: $event})"
    @keypress="this.componentRaiseEvent('keypress',{event: $event})"
    @keyup="this.componentRaiseEvent('keyup',{event: $event})">

        <div class="--base">
          <div class="--ripple" />

          <span v-if="this.icon != undefined" class="--icon | material-symbols-rounded">
            {{this.icon}}
          </span>

          <input class="--input"
          ref="input"
          type="text"
          placeholder="  "
          :value="text"
          :name="componentId"
          @input="text = $event.target.value"
          :disabled="disabled"
          autofocus/>

          <label class="--placeholder" :for="componentId">{{placeholder}}</label>

          <gnk-button :disabled="disabled" class="--button" circular clear light @click="clearText($event)">
            <span class="material-symbols-rounded">
              close
            </span>
          </gnk-button>
        
        </div>
        
        <gnk-loading class="--loading" v-if="this.busy" :target="'#' + componentId + '> .--base'" />

        <div class="--badge-holder">
          <slot name="badge" />
        </div>


  </div>
</template>








<style  lang="scss">
  .gnkInput{

    
    --border-radius: var(--BORDER-RADIUS);
    --border-size: var(--BORDER-SIZE);
    --height: 45px;

    --leftPadding: 7px;
    --rightPadding: 7px;
    --topPadding: 12px;
    --bottomPadding: 5px;

    --translate-x: 0px;
    --translate-y: 0px;


    transition: all .25s ease-in-out;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    cursor:text;

    height: var(--height);
    width: fit-content;
    min-width: calc(var(--height) * 3);

    background: -color('DARK');
    border-radius: var(--border-radius);
    border: var(--border-size) solid -color('LIGHT',1,0,0,-5);
    box-shadow: var(--BOX-SHADOW);    


    &:is(.--no-placeholder){
      --topPadding: 5px;
    }

    &>.--badge-holder{
      inset: 0px;
      z-index: 0;
    }

    &>.--base{
      transition: all .25s ease-in-out;

      overflow: hidden;
      isolation: isolate;

      border-radius: var(--border-radius);

      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      
      height: 100%;
      width: 100%;
      z-index: 1;  
    }

    &>.--base>.--input, &>.--base>.--placeholder{
        grid-row-start: 1;
        grid-column: 2;
    }

    &>.--base>.--ripple,  &>.--base>.--loading{
      border-radius: var(--border-radius) ;
      grid-column-start: 1 ;
      grid-column-end: 3 ;
    }



    &>.--base>.--icon{
      position: relative;

      transition: all .25s ease-in-out;
      
      grid-row-start: 1;
      grid-column: 1;

      color : -color('BASE');

      padding: var(--bottomPadding) var(--rightPadding) var(--bottomPadding) var(--leftPadding);
      transform: scale(1);

      &::after{
        position: relative;
        content: '';
        top: 5%;
        right: -5px;
        height: 90%;

        border-right: var(--border-size) solid -color('BASE');
        
      }
    }

    &>.--base>.--input{
      transition: all .25s ease-in-out;

      box-sizing: border-box;  
      background: transparent;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;

      inset: 0;
      height : var(--height) !important;
      width: 100%;
      
      transform: translateX(var(--translate-x));
      padding: var(--topPadding) var(--rightPadding) var(--bottomPadding) var(--leftPadding);
      margin: 0 !important;

      color: -color('TEXT');

      &::selection{
        background: -color('BASE');
        border-radius: var(--border-radius) !important;
      }

    }

    &>.--base>.--placeholder{
      transition: all .15s ease-in-out;

      color: -color('TEXT');  
      opacity: .8;
      font-size: 1rem;

      inset: 0;
      transform: translate(var(--translate-x), var(--translate-y));
      padding-left: var(--leftPadding);

      z-index: -1;
      
    }

    &>.--base>.--button{
      display: none;
      grid-row-start: 1;
      grid-column: 3;
      opacity: 0;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      
      transition: all .25s ease-in-out;
      transform: scale(0)
    }



  //STATUS
    &:is(:focus-within, :hover, :focus, :active){
      border: var(--border-size) solid  -color('BASE') ;
      
      &>.--base{
        --translate-x : 5px;
      }

      &>.--base>.--icon{
        transform: scale(1.2) translateX(5px);
        
        &::after{
          border-right: var(--border-size) solid -color('BASE');
        }
      }

      &>.--base>.--input{
        transform: translateX(5px);
      }

      &>.--base>.--placeholder{
          font-size: calc(var(--topPadding) / 1.1);    
          opacity: .5;

          --translate-x : 5px;
          --translate-y :  calc((var(--topPadding) / 1.1) * -1) ;
      }

      &>.--base>.--ripple{
        opacity: .5;
      }
    }

    &>.--base>.--button:is(:focus, :hover){
        opacity: 1 !important;
        transform: scale(1)
    }

    &>.--base>.--input:not(:placeholder-shown) {
      --translate-x : 5px;



      +.--placeholder{
          font-size: calc(var(--topPadding) / 1.1);
          opacity: .5;
          
          --translate-x : 5px;
          --translate-y :  calc((var(--topPadding) / 1.1) * -1) ;
      }

      ~.--button{
        display: flex;
        opacity: 0.6;
        transform: scale(1)
      }
    }


    &:is(:disabled, .--disabled,.--busy,.--loading){
      cursor:not-allowed;
      pointer-events: none;
    }

    &:is(:disabled, .--disabled){
      opacity: .6;
      filter:brightness(50%);
    }

    &:is(.--busy){
      cursor:progress;
    }


    
 //TEXT
  &:is(.--lineThrough){
    &:is(.--checked)>label{
      color: -color('TEXT',.6);

      &::after{
        background-color: -color('TEXT',.6);
        transform: scaleX(1);
      }
    }
  }
  
  &:is(.--align-left) {
    flex-direction: row-reverse;
  }


//FORMAT
  &:is(.--square) {
    --border-radius: 2px;
  }

  &:is(.--block) {
    width: 100% ;
  }



  // SIZING
  &:is(.--size-xl) {
    --height: 28px;
    --width: 58px;
  }

  &:is(.--size-l) {
    --height: 24px;
    --width: 50px;
  }

  &:is(.--size-small) {
    --height: 18px;
    --width: 38px;
  }

  &:is(.--size-mini) {
    --height: 16px;
    --width: 33px;
  }
  


  //STYLE

  &:is(.--shadow){
      &>.--base{
        box-shadow: 0px 0.2rem 0.3rem -color('BASE', .3);
      }
  }

  &:is(.--border){
    --border-size : calc(var(var(--border-size) * 2));
    border-color:-color('BASE');
  }



  //ANIMATION
  &:is(.--animate-fade){
    &>.--base>.--thumb, &>.--base::after{
      animation: animation-fade-in .5s ease-in-out 1;
    }
    &:is(.--checked){
      &>.--base>.--thumb, &>.--base::after{
        animation: animation-fade-out .5s ease-in-out 1;
      } 
    }
  }
  &:is(.--animate-scale){
    &>.--base>.--thumb{
      transition: all 0.5s ease-in-out;
      transform:scale(.8);
    }
    &:is(.--checked){
      &>.--base>.--thumb{
        transition: all 0.5s ease-in-out;
        transform:scale(1);
      } 
    }
  }
  &:is(.--animate-flip){
    &>.--base>.--thumb{
      transition: all 0.5s ease-in-out;
      transform: rotateY(180deg);
    }
    &:is(.--checked){
      &>.--base>.--thumb{
        transition: all 0.5s ease-in-out;
        transform: rotateY(0deg);
      }
    }
  }





  }







</style>