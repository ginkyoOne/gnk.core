<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import createRipple from "../../utils/ripple"
import { setCssVariable } from "../../utils/cssUtils"

export default {
  name: 'gnkDropdown',
  extends: gnkComponent,
  emits: ['update:modelValue','click','mouseleave','mouseover','keydown','keypress','keyup','valueChanged'],
  data() {
    return {
        isOpen: false
    }
  },

  props: {


    value: {
      type: Array,
      required: false,
      default: [],
      skip: true,
    },


    chips: {
      type: Boolean,
      required: false,
      default: false,
    },

    collapseChips: {
      type: Boolean,
      required: false,
      default: false,
    },

    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },

    filter: {
      type: Boolean,
      required: false,
      default: false,
    },

    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },

    icon: {
      type: String,
      required: false,
      default: undefined,
      skip: true
    },

    placeholder: {
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
          '--align-left': this.align === 'left',

          '--size-xl': this.size === 'xl',
          '--size-l': this.size === 'l',
          '--size-small': this.size === 'small',
          '--size-mini': this.size === 'mini',
          '--open': this.isOpen,
        }
    },
  },


  watch: {
  },

  methods: {
    hasFocus(has = false) {
      if (has) {
        
        let { top, height, left, width } = this.componentElementClientRect(this.$refs.base)
        let list = this.$refs.list

        setCssVariable(list, '--top', `${top + height - 5}px`)
        setCssVariable(list, '--left', `${left}px`)
        setCssVariable(list, '--width', `${width}px`)
      }

      this.isOpen = has
      

    }
  }


}
</script>

<template>



  <div :disabled="disabled" :class="[componentName + ' |', componentClassObject , componentGeneralClasses ]"
    :id="componentId"

    @click="this.hasFocus(true)"
    
    @mouseleave="this.componentRaiseEvent('mouseleave',{event: $event})"
    @mouseover="this.componentRaiseEvent('mouseover',{event: $event})"
    @keydown="this.componentRaiseEvent('keydown',{event: $event})"
    @keypress="this.componentRaiseEvent('keypress',{event: $event})"
    @keyup="this.componentRaiseEvent('keyup',{event: $event})"
    @focusin="this.hasFocus(true)"
    @focusout="this.hasFocus(false)"

    >
        <div ref="base" class="--base">
          <input class="--input"
            type="text"
            value="teste"/>
        </div>



        <Teleport to="#app">
          <div ref="list" :class="['gnkDropdown--list |', componentClassObject]">
            <gnkListview dark>
                <gnkListviewItem :to="{ name: 'Home' }">
                    Home
                </gnkListviewItem>

                <gnkListviewItem :to="{ name: 'Dropdown' }">
                    Dropdown
                </gnkListviewItem>

                <gnkListviewItem :to="{ name: 'ExpandPanel' }">
                    Expand Panel
                </gnkListviewItem>

                <gnkListviewItem :to="{ name: 'Input' }">
                    Input
                </gnkListviewItem>

                <gnkListviewItem :to="{ name: 'Radio' }">
                    Radio
                </gnkListviewItem>

                <gnkListviewItem :to="{ name: 'Switch' }">
                    Switch
                </gnkListviewItem>

                <gnkListviewItem :to="{ name: 'Checkbox' }">
                    Checkbox
                </gnkListviewItem>

                <gnkListviewItem :to="{ name: 'Buttons' }">
                    Buttons
                </gnkListviewItem>

                <gnkListviewItem :to="{ name: 'Cards' }">
                    Cards
                </gnkListviewItem>

                <gnkListviewItem :to="{ name: 'Progressbar' }">
                    ProgressBar
                </gnkListviewItem>

                <gnkListviewItem :to="{ name: 'NotFound' }">
                    404
                </gnkListviewItem>


            </gnkListview>
          </div>
        </Teleport>
  </div>
</template>








<style  lang="scss">
  .gnkDropdown{
    display: flex;
    flex-direction: column;


    &>.--base{

      transition: all .25s ease-in-out;
    
      height: fit-content;
      min-height: 38px;
      width: fit-content;

      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      padding: 7px 12px;

      cursor:text;

      background: -color('DARK');
      border-radius: var(--BORDER-RADIUS);
      border: var(--BORDER-SIZE) solid -color('LIGHT');
      box-shadow: var(--SHADOW-COMPONENT);  
      transform: translateY(0);

      
      &>input{
        transition: all .25s ease-in-out;

        appearance: textfield;
        box-sizing: border-box;  
        background: transparent;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;

        inset: 0;
        height : 100%;
        min-width: 15ch;
        width: 100%;

        margin: 0 !important;

        opacity: 0;

        color: -color('MAIN-TEXT');

        &::selection{
          background: -color('BASE');
          border-radius: var(--BORDER-RADIUS) !important;
        }

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button,
        &::-webkit-calendar-picker-indicator{
          display: none;
          margin: 0;
        }
      }
    }

    &:is(.--open)>.--base{
      border-radius: var(--BORDER-RADIUS) var(--BORDER-RADIUS) 0 0;
      border-bottom-style: unset;
      box-shadow: unset;  

      z-index: 999999;
      transform: translateY(-5px);
    }
    
  }



  .gnkDropdown--list{
      transition: all .25s ease-in-out;

      position: absolute;
      z-index: -1;

      top: var(--top) !important;
      left: var(--left) !important;
      width: var(--width);
      max-height: 200px;
      padding: 7px 12px;

      overflow-y: scroll;
      overflow-x: hidden;

      background: -color('DARK');
      border-radius:  0 0 var(--BORDER-RADIUS) var(--BORDER-RADIUS);
      
      border: var(--BORDER-SIZE) solid -color('LIGHT');
      border-top-style: unset;
      
      
      color: -color('MAIN-TEXT');
      box-shadow: var(--SHADOW-COMPONENT);  
      
      opacity: 0;
      transform: translateY(-10px);

      
    &:is(.--open){
      z-index: 99999;

      opacity: 1;
      transform: translateY(-5px);
    }
  }

</style>