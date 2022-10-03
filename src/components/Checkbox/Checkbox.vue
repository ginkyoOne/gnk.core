<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import createRipple from "../../utils/ripple"

export default {
  name: 'gnkCheckbox',
  extends: gnkComponent,
  emits: ['update:modelValue','mouseleave','mouseover','keydown','keypress','keyup'],

  data() {
    return {
      //store: gnk.Store,
      defaultValue: null,
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
        return ['rotate', 'fade','scale', 'flip','default'].includes(type)
      },
    },

  },

  computed: {
    isChecked() {
      return (Array.isArray( this.modelValue) ? this.modelValue.includes(this.defaultValue) : this.modelValue === this.defaultValue)
    },

    //STYLING CLASSES  
    componentClassObject: function () {
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
          '--animate-rotate': this.animate === 'rotate'  && !this.loading && !this.busy ? true : false,

        }
    },
  },

  mounted() {
    this.defaultValue = (this.value === null ? Math.random().toString(36).substr(2, 9) : this.value)
    if(this.checked) this.onchange(null)
  },

  watch: {
    value(newValue) {
      this.defaultValue = (newValue === null ? Math.random().toString(36).substr(2, 9) : newValue)
    },
  },

  methods: {
    onchange(event) {
      if (!!event & !this.disabled & !this.busy & !this.loading) createRipple.createRipple(event)

      
      //CHECK IF MODELVALUE IS AN ARRAY
      if (Array.isArray(this.modelValue)) {

        //IF CHECKED, REMOVE VALUE FROM MODELVALUE
        if (this.isChecked){

          this.modelValue.splice(this.modelValue.indexOf(this.defaultValue), 1)
        }else {

          this.modelValue.push(this.defaultValue)
        }

        this.modelValue.sort()
        this.$emit('update:modelValue', this.modelValue)

      } else {

        if (this.isChecked) {
          this.$emit('update:modelValue', null)
        } else {
          this.$emit('update:modelValue', this.defaultValue)
        }
      }
          
    }
  }

}
</script>


<template>
  <div :disabled="disabled" :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
    :id="componentId"

    @click.prevent="onchange($event)"
    @mouseleave.prevent="this.componentRaiseEvent('mouseleave',{event: $event})"
    @mouseover.prevent="this.componentRaiseEvent('mouseover',{event: $event})"
    @keydown.prevent="this.componentRaiseEvent('keydown',{event: $event})"
    @keypress.prevent="onchange($event)"
    @keyup.prevent="this.componentRaiseEvent('keyup',{event: $event})">

        <input
          :id="componentId"
          :name="name"
          type="Checkbox"
          :checked="isChecked"
          :value="defaultValue"
        />


        <div class="--base">
          <div class="--ripple" />
          
          
          <span v-if="!indeterminate"  class="--thumb | material-symbols-rounded" >
            done
          </span>
          <span v-else  class="--thumb | material-symbols-rounded" >
            remove
          </span>


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

.gnkCheckbox{

  --height: 22px;
  --width: 22px;

  --thumb-size: 1;

  --border-size: var(--BORDER-SIZE);
  --border-radius: calc(var(--BORDER-RADIUS) / 2);



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



  input[type="Checkbox"]{
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

    height:var(--height);
    width: var(--width);

    display: grid;
    grid: 1fr / 1fr;
    align-items: center;
    justify-content: center;

    
    background: -color('DARK');
    border-radius: var(--border-radius);
    border: var(--border-size) solid -color('LIGHT');
    
    box-shadow: var(--SHADOW-COMPONENT);  

    &::after{
      transition: all .25s ease-in-out;
      content: "";
      position: absolute;
      inset: 0;

      border-radius: var(--border-radius);
      background: -color('BASE');

      opacity: 0;
      transform:scale(0);
      z-index: -1;
    }
  }

  &>.--base>.--thumb{
    transition: all .35s ease-in-out;
    position: absolute;

    border-radius: var(--border-radius);

    height: auto;
    width: calc(var(--width) - var(--border-size) * 2);

    transform:scale(0) rotate(45deg);
    text-align: center;

    color: -color('CONTRAST-TEXT');
  }




  //STATUS
  &:is(.--checked){
    &>.--base::after{
      transform:scale(1);
      opacity: 1;
    }
    &>.--base>.--thumb{
      transform:scale(var(--thumb-size)) rotate(0deg);
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
    --width: 28px;
    --padding: 2px;
  }

  &:is(.--size-l) {
    --height: 24px;
    --width: 24px;
  }

  &:is(.--size-small) {
    --height: 18px;
    --width: 18px;
  }

  &:is(.--size-mini) {
    --height: 16px;
    --width: 16px;
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
      &>.--thumb{
        transform:scale(0);
        color: -color('BASE')
      }
    }

    &:is(.--checked){
      &>.--base>.--thumb{
        transform:scale(var(--thumb-size));
      }
    }
  }



  //ANIMATION
  &:is(.--animate-fade){
    &>.--base{
      animation: animation-fade-in .5s ease-in-out 1;
    }
    &:is(.--checked){
      &>.--base{
        animation: animation-fade-out .5s ease-in-out 1;
      } 
    }
  }
  &:is(.--animate-scale){
    &>.--base{
      transition: all 0.5s ease-in-out;
      transform:scale(.8);
    }
    &:is(.--checked){
      &>.--base{
        transition: all 0.5s ease-in-out;
        transform:scale(1);
      } 
    }
  }
  &:is(.--animate-flip){
    &>.--base{
      transition: all 0.5s ease-in-out;
      transform: rotateY(180deg);
    }
    &:is(.--checked){
      &>.--base{
        transition: all 0.5s ease-in-out;
        transform: rotateY(0deg);
      }
    }
  }

  &.--animate-rotate{
      &>.--base{
        transition: all 0.5s ease-in-out;
        transform: rotate(180deg);
      }
      &:is(.--checked){
        &>.--base{
          transition: all 0.5s ease-in-out;
          transform: rotate(0deg);
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
