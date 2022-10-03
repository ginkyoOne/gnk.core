
<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import createRipple from "../../utils/ripple"

export default {
  name: 'gnkSwitch',
  extends: gnkComponent,
  //emits: ['update:modelValue','click','mouseleave','mouseover','keydown','keypress','keyup'],

  data() {
    return {
      //store: gnk.Store,
      defaultValue: Math.random().toString(36).substr(2, 9),
    }
  },

  props: {
    name: {
      type: String,
      require: false,
      default: '',
      skip: true
    },

    value: {
      default: null,
      required: false,
      skip: true
    },

    notValue: {
      default: null,
      required: false,
      skip: true
    },

    modelValue: {
      default: null,
      required: false,
      skip: true
    },

    checked: {
      type: Boolean,
      required: false,
      default: false,
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
    isChecked() {
      return (Array.isArray( this.modelValue) ? this.modelValue.includes(this.isValueNull) : this.modelValue === this.isValueNull)
    },

    isValueNull() {
      return this.value === null ? this.defaultValue : this.value
    },
    //STYLING CLASSES  
    componentClassObject() {
      return {
          '--primary': true,
          '--checked': this.isChecked,
          '--align-left': this.align === 'left',


          '--size-xl': this.size === 'xl',
          '--size-l': this.size === 'l',
          '--size-small': this.size === 'small',
          '--size-mini': this.size === 'mini',


          '--animate-fade': this.animate === 'fade' && !this.loading && !this.busy ? true : false,
          '--animate-scale': this.animate === 'scale'  && !this.loading  && !this.busy ? true : false,
          '--animate-flip': this.animate === 'flip'  && !this.loading && !this.busy ? true : false,

        }
    },
  },

  mounted() {
    if(this.checked) this.onchange(null)
  },

  methods: {
    onchange(eventName, event) {

      //CREATE RIPPLE EFFECT
      //if (!!event & !this.disabled & !this.busy & !this.loading) createRipple.createRipple(event)


      //VALIDATE VALUE AND PUSH MODELVALUE
      if (this.isChecked) {

        //CHECK IF MODELVALUE IS AN ARRAY
        if (Array.isArray(this.modelValue)) {
          //REMOVE VALUE FROM ARRAY
          this.modelValue.splice(this.modelValue.indexOf(this.isValueNull), 1)
          this.$emit('update:modelValue', this.modelValue)
        } else {

          //PUSH NOT VALUE
          this.$emit('update:modelValue', this.notValue)
        }


      } else {

        //CHECK IF MODELVALUE IS AN ARRAY
        if (Array.isArray(this.modelValue)) {
          //PUSH VALUE TO ARRAY
          this.modelValue.push(this.isValueNull)

          //SORT ARRAY
          this.modelValue.sort()
          this.$emit('update:modelValue', this.modelValue)
        } else {

          //PUSH VALUE
          this.$emit('update:modelValue', this.isValueNull)
        }
      }

      this.componentRaiseEvent(eventName,{event: event})
      
    },

  }

}
</script>


<template>
  <div :disabled="disabled" :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
    :id="componentId"

    @click.prevent="onchange('click',$event)"
    @mouseleave.prevent="this.componentRaiseEvent('mouseleave',{event: $event})"
    @mouseover.prevent="this.componentRaiseEvent('mouseover',{event: $event})"
    @keydown.prevent="this.componentRaiseEvent('keydown',{event: $event})"
    @keypress.prevent="onchange('keypress', $event)"
    @keyup.prevent="this.componentRaiseEvent('keyup',{event: $event})">

        <input
          :id="componentId"
          :name="name"
          type="checkbox"
          :checked="isChecked"
          :value="defaultValue"
        />


        <div class="--base">
          <div class="--ripple" />

          <div v-if="!!this.$slots.on" class="--switch-on">
            <slot name="on"></slot>
          </div> 

          <div class="--thumb">
          </div>
          
          <div v-if="!!this.$slots.off" class="--switch-off">
            <slot name="off">
            </slot>
          </div>
        </div>
        

        <label :for="componentId">
            <slot name="label"/>
        </label>

        <gnk-loading v-if="this.busy" :target="'#' + componentId + '> .--base'" />

        <div class="--badge-holder">
          <slot name="badge" />
        </div>


  </div>
        
</template>


<style lang="scss">

.gnkSwitch{

  --height: 22px;
  --width: calc(var(--height) * 2);

  --thumb-size: .8;

  --border-size: var(--BORDER-SIZE);
  --border-radius: 100vmax;



  transition: all .25s ease-in-out;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  cursor: pointer;
  



  &>.--badge-holder, &>.--base>.--handle>.--ripple{
    inset: 0;
    border-radius: var(--border-radius);
    pointer-events: none;
  }



  input[type="checkbox"]{
    display: none;
  }

  &>label{
    color: -color('MAIN-TEXT');

    &::after{
      transition: all 0.2s ease-in-out;

      content: '';
      position: absolute;
      top: calc(50% - 1px);
      left: 0px;
      width: 100%;
      height: 2px;
      
      background-color: -color('MAIN-TEXT');
      border-radius: inherit;

      transform: scaleX(0);
    }
  }


  &>.--base{
    transition: all .25s ease-in-out;
    
    overflow: hidden;
    isolation: isolate;

    position: relative;

    height:var(--height);
    width: var(--width);
    min-width: var(--width);

    display: grid;
    grid: 1fr / 1fr;
    justify-content: center;
    
    background: -color('DARK');
    border-radius: var(--border-radius);
    border: var(--border-size) solid -color('LIGHT');
    box-shadow: var(--SHADOW-COMPONENT);  
    
    &::after{
      content: "";
      position: absolute;
      inset: 0;//var(--border-size);
      
      border-radius: var(--border-radius);
      background: -color('BASE');
      z-index: -1;

      transition: all .25s ease-in-out;
      transform:translateX(-110%);
    }
  }

  &>.--base>.--thumb{
    transition: all .2s ease-in-out;

    

    grid-column: 1;
    grid-row: 1; 

    position: relative;
    //inset: 0;
    border-radius: var(--border-radius);

    height:calc(var(--height) - (var(--border-size) * 6));
    width: calc(var(--height) - (var(--border-size) * 6));

    background:-color('LIGHT',1,0,0,5);

    top: calc(var(--border-size)*2);
    left: calc(var(--border-size)*2);  

    box-shadow: var(--SHADOW);
  }



  

  &>.--base>.--switch-on, &>.--base>.--switch-off{
    //display: none !important;
    transition: all .35s ease-in-out;

    grid-column: 1;
    grid-row: 1;
    
    height:calc(var(--height) - var(--border-size) * 2);
    width: 100%;
    margin: 0px;
    padding: 15%;

    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;

    z-index: 2;

  }
  
  &>.--base>.--switch-off{
    justify-content:flex-end;
    transform: translateX(0%);
    opacity: 1;
  }

  &>.--base>.--switch-on{
    justify-content:flex-start;
    transform: translateX(-110%);
  }


  //STATUS
  &:is(.--checked){
    &>.--base{

      &::after{
        transform: translateX(0%);
      }

      &>.--thumb{
        left: calc(100% - (var(--height) - (var(--border-size)*4)));
      }
      &>.--switch-off{
        transform: translateX(110%);
        opacity: 0;
      }

      &>.--switch-on{
        transform: translateX(0%);
        opacity: 1;
      }
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
    &>.--base{
      height:var(--height);
      width: var(--height);
      min-width: var(--height);
    }
  }



  //LABEL
  &:is(.--lineThrough){
    &:is(.--checked)>label{
      color: -color('MAIN-TEXT',.6);

      &::after{
        background-color: -color('MAIN-TEXT',.6);
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

    &>label{
      width: 100%;
      display: inline-block;
    }
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
  &:is(.--gradient){
    &>.--base::after{
      background-image: linear-gradient(30deg, -color('BASE', 0) 50%, -color('BASE', 1, 45, 15, 10) 80%);
    }
  }

  &:is(.--shadow){
    &:is(:checked, .--checked){
      &>.--base{
        box-shadow: 0px 0.2rem 0.3rem -color('BASE', .3);
      }
    }
  }

  &:is(.--border){
    --border-size : calc(var(var(--border-size) * 2));
    &>.--base{
      border-color:-color('BASE');
      
      &::after{
        background:transparent;
      }
    }

    &:is(.--checked){
      &>.--base>.--thumb{
        background:-color('BASE');
      }
    }
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







  @keyframes animation-fade-out{
    0%{
      opacity: 1;
    }
    20%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  @keyframes animation-fade-in{
    100%{
      opacity: 1;
    }
    20%{
      opacity: 0;
    }
    0%{
      opacity: 1;
    }
  } 

}

</style>
