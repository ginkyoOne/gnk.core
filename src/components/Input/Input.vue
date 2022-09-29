<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import createRipple from "../../utils/ripple"

export default {
  name: 'gnkInput',
  extends: gnkComponent,
  emits: ['update:modelValue','click','mouseleave','mouseover','keydown','keypress','keyup','valueChanged'],
  data() {
    return {
      text: this.modelValue,
      passwordVisible: false,
    }
  },

  props: {


    type: {
      type: String,
      required: false,
      default: 'text',
      skip: true,
      validator: (value) => ['text', 'password', 'search', 'number', 'url', 'time', 'date'].includes(value)
    },

    strenght: {
      type: Boolean,
      require: false,
      default: false,
      skip: true,
    },

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

    min:{
      type: Number,
      required: false,
      default: 1,
      skip: true
    },

    max:{
      type: Number,
      required: false,
      default: 100,
      skip: true
    },

    step:{
      type: Number,
      required: false,
      default: 1,
      skip: true
    },

    required:{
      type: Boolean,
      required: false,
      default: false,
      skip: true
    },

    minlength:{
      type: Number,
      required: false,
      default: undefined,
      skip: true
    },

    maxlength:{
      type: Number,
      required: false,
      default: undefined,
      skip: true
    },

    pattern:{
      type: String,
      required: false,
      default: undefined,
      skip: true
    },

    clearButton: {
      type: Boolean,
      require: false,
      default: true,
    }


    


/*     animate:{
      type: String,      
      required: false,
      skip: true,
      default: 'default',
      validator(type) {
        return ['fade','scale', 'flip','default'].includes(type)
      },
    }, */



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

          '--no-placeholder': (this.placeholder === null || this.placeholder === undefined || this.placeholder == ''),
          '--has-value' : !(this.text === undefined || this.text === null || this.text == '')

        }
    },
    passwordStrenght: function () {
      console.log(this.text)

      try {
        
        let level = 0

        //at least one number
        if (/\d/.test(this.text)) level += 20

        //at least one lowercase character
        if (/(.*[a-z].*)/.test(this.text)) level += 20

        //at least one capital character
        if (/(.*[A-Z].*)/.test(this.text)) level += 20

        //more then 8 characters
        if(this.text.length > 7) level += 20
        
        //at least one special character
        if(/[^A-Za-z0-0]/.test(this.text)) level += 20

        return level
        
      } catch {
        return 0
      }
    },
    passwordStrenghtColor: function () { 
        return {
          
          '--danger': (this.passwordStrenght <= 40),
          '--warning': (this.passwordStrenght >= 40 &  this.passwordStrenght < 80),
          '--success': (this.passwordStrenght >= 80),

        }
    }
    
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
      //console.log(data.event)
      //if (!!data.event & !this.disabled & !this.busy & !this.loading) createRipple.createRipple(data.event)
      if (eventName == 'valueChanged') {
        
        if (this.type == "number"){
          switch (true) {
            case (data.event.target.value == '' || data.event.target.value === undefined):
              this.text = this.min;
              break;
            case (data.event.target.value >= this.max):
              this.text = this.max;
              break;
            case (data.event.target.value <= this.min):
              this.text = this.min;
              break;
            default:
              this.text = data.event.target.value
          }
        }else{
          this.text = (data.event.target.value == '' ? undefined : data.event.target.value)   
        }
                
        this.$emit('update:modelValue', this.text )
      } 


      //this.componentRaiseEvent(eventName, data )
    },
    buttonClicked(eventName) {
      this.$el.getElementsByClassName('--input')[0].focus()

      switch (eventName) {
        case 'clear':

          this.text = (this.type == 'number' ? this.min : undefined)
          this.$emit('update:modelValue', this.text)
          break;
        case 'numberUp':

          let resultup = Number((this.text === undefined ? this.min : this.text)) + (Number(this.step) * 1)
          this.text = (resultup > this.max ? this.max : resultup)
          break;
        case 'numberDown':

          let resultdown = Number((this.text === undefined ? this.min : this.text)) + (Number(this.step) * -1)
          this.text = (resultdown < this.min ? this.min : resultdown)
          break;
        case 'showPassword':

          this.passwordVisible = !this.passwordVisible
          break;
        default:

          return
      }
    },
  }


}
</script>

<template>



  <div :disabled="disabled" :class="[componentName + ' |', componentClassObject , componentGeneralClasses ]"
    :id="componentId"

    @click="[buttonClicked('base'), this.onchange('click',{event: $event})]"
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
          :type="(this.passwordVisible ? 'text' : type)"
          placeholder="  "
          :value="text"
          :name="componentId"
          @input="this.onchange('valueChanged',{event: $event})"
          :disabled="disabled"
          :min="min"
          :max="max"
          :step="step"
          :required="required"
          :minlenght="minlenght"
          :maxlenght="maxlenght"
          :pattern="pattern"
          autofocus/>



          <label class="--placeholder" :for="componentId">{{placeholder}}</label>


          <div class="--button-upDown | flex flex-row" v-if="this.type == 'number'">
            <gnk-button :disabled="disabled" class="--button-down" circular clear light @click="buttonClicked('numberUp')">
              <span class="material-symbols-rounded">
                arrow_upward
              </span>
            </gnk-button>

            <gnk-button :disabled="disabled" class="--button-up" circular clear light @click="buttonClicked('numberDown')">
              <span class="material-symbols-rounded">
                arrow_downward
              </span>
            </gnk-button>
          </div>

          <gnk-button :disabled="disabled" class="--button-showPassword" circular clear light v-if="this.type == 'password'" @click="buttonClicked('showPassword')">
            <span v-if="this.passwordVisible" class="material-symbols-rounded">
              visibility_off
            </span>

            <span v-else class="material-symbols-rounded">
              visibility
            </span>
          </gnk-button>

          <gnk-button :disabled="disabled" class="--button-clear" circular clear light @click="buttonClicked('clear')">
            <span class="material-symbols-rounded">
              close
            </span>
          </gnk-button>


          <gnk-progressbar v-if="this.type == 'password' && this.strenght" :value="passwordStrenght" square :class="[passwordStrenghtColor]">
          </gnk-progressbar>
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
    
    height: fit-content;
    width: fit-content;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    cursor:text;



    background: -color('DARK');
    border-radius: var(--border-radius);
    border: var(--border-size) solid -color('LIGHT');
    box-shadow: var(--SHADOW-COMPONENT);    


    &:is(.--no-placeholder){
      --topPadding: 5px;
    }

    &>.--badge-holder{
      inset: 0px;
      z-index: 0;
    }

    &>.--base{
      height: var(--height);
      width: fit-content;
      min-width: calc(var(--height) * 3);

      transition: all .25s ease-in-out;

      overflow: hidden;
      isolation: isolate;

      border-radius: var(--border-radius);

      display: grid;
      grid-template-columns: auto 1fr auto auto auto;
      grid-template-rows: 1fr auto;
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

      appearance: textfield;
      box-sizing: border-box;  
      background: transparent;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;

      inset: 0;
      height : var(--height) !important;
      min-width: 15ch;
      width: 100%;
      
      transform: translateX(var(--translate-x));
      padding: var(--topPadding) var(--rightPadding) var(--bottomPadding) var(--leftPadding);
      margin: 0 !important;

      opacity: 0;

      color: -color('MAIN-TEXT');

      &::selection{
        background: -color('BASE');
        border-radius: var(--border-radius) !important;
      }

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button,
      &::-webkit-calendar-picker-indicator{
        display: none;
        margin: 0;
      }

    }

    &>.--base>.--placeholder{
      transition: all .25s ease-in-out;

      color: -color('MAIN-TEXT');  
      opacity: .8;
      font-size: 1rem;

      inset: 0;
      transform: translate(var(--translate-x), var(--translate-y));
      padding-left: var(--leftPadding);

      z-index: -1;
      
    }

    .gnkProgressbar{
      position: absolute;

      grid-row: 1;
      grid-column-start: 1;
      grid-column-end: 6;
      margin: 0 !important;

      bottom: -2px;
      left: 0;
      width: 100%;
    }






    &>.--base>.--button-clear, &>.--base>.--button-showPassword, &>.--base>.--button-upDown{
      grid-row: 1;

      margin-top: 0 !important;
      margin-bottom: 0 !important;
      
      transition: all .25s ease-in-out;
      opacity: 0;
      visibility: hidden;

      cursor:text;
    }

    &>.--base>.--button-clear{
      grid-column: 5;
      display: none;
    }
    &:is(.--clearButton){
      &>.--base>.--button-clear{
        display: flex;
      }
    }
      
    &>.--base>.--button-showPassword{
      grid-column: 4 ;
    }
    
    &>.--base>.--button-upDown{
      grid-column: 3 ;
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
        opacity: 1;
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

    &>.--base>:is(.--button-clear, .--button-showPassword, .--button-upDown):is(:focus, :hover){
        transform: scale(1.1);
        opacity: 1;
    }

    &:is(.--has-value)>.--base>.--input {
      opacity: 1;
      --translate-x : 5px;



      +.--placeholder{
          font-size: calc(var(--topPadding) / 1.1);
          opacity: .5;
          
          --translate-x : 5px;
          --translate-y :  calc((var(--topPadding) / 1.1) * -1) ;
      }

      ~.--button-clear, ~.--button-showPassword, ~.--button-upDown{
        visibility: visible;
        opacity: 0.6;
        transform: scale(1.1);
        cursor:pointer;
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
  }



  // SIZING
  &:is(.--size-xl) {
      --height: 51px;
    &>input{
      font-size: 1.2rem;
    }
  }

  &:is(.--size-l) {
      --height: 48px;
    &>input{
      font-size: 1.1rem;
    }
  }

  &:is(.--size-small) {
      --height: 42px;
    &>input{
      font-size: .8rem;
    }
  }

  &:is(.--size-mini) {
      --height: 36px;
    &>input{
      font-size: .6rem;
    }
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