<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"

export default {
    name: "gnkSidebar",
    extends: gnkComponent,
    emits: ["update:modelValue", "mouseleave", "mouseover", "keydown", "keypress", "keyup"],
    data() {
        return {
            //store: gnk.Store,
            isOpen: false,
        };
    },
    props: {
        modelValue: {
          default: null,
          required: false,
          skip: true
        },

        square: {
            type: Boolean,
            required: false,
            default: false,
        },
        align: {
            type: String,
            default: "left",
            skip: true,
            validator: (value) => ["left", "top", "right","bottom"].includes(value)
        },
        border: {
            type: Boolean,
            required: false,
            default: false,
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
        animate: {
            type: String,
            required: false,
            skip: true,
            default: "default",
            validator(type) {
                return ["fade", "scale", "flip", "default"].includes(type);
            },
        },
    },
  computed: {
       //STYLING CLASSES  
        componentClassObject: function () {
            return {
              "--open": this.modelValue,
              "--align-left": this.align == 'left',
              "--align-right": this.align == 'right',
              "--align-top": this.align == 'top',
              "--align-bottom": this.align == 'bottom',
              
            };
        },
    },
    mounted() {
      this.isOpen = this.modelValue
    },
    watch: {
        value(newValue) {
        },
    },
    methods: {
      onchange(event) {
          console.log(event)
      },
      
      close(event) {
        this.isOpen = !this.modelValue
        this.$emit('update:modelValue', this.isOpen)
      }
    },
}
</script>

<template>
  

  <div :disabled="disabled" :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
    :id="componentId"

    @click="onchange($event)"
    @mouseleave.prevent="this.componentRaiseEvent('mouseleave',{event: $event})"
    @mouseover.prevent="this.componentRaiseEvent('mouseover',{event: $event})"
    @keydown.prevent="this.componentRaiseEvent('keydown',{event: $event})"
    @keypress.prevent="onchange($event)"
    @keyup.prevent="this.componentRaiseEvent('keyup',{event: $event})">

      <div class="--backdrop" @click="close($event)">
      </div>


      <div class="--base">
        <div class="--content">  
          <div class="--header">
            <slot name="header">

            </slot>
          </div>
          <div class="--content-body">
            <slot>

            </slot>
          </div>
          <div class="--footer">
            <slot name="footer">
          
            </slot>
          </div>
        </div>

      </div>
      
      <gnk-loading v-if="this.busy" :target="'#' + componentId + '> .--base'" />
  </div>



</template>

<style  lang="scss">
  .gnkSidebar{
    
    position: fixed;
    height: 100%;
    width: 100%;
    inset: 0;

    display: flex;
    isolation: isolate;
    overflow: hidden;
    z-index: 10000;

    pointer-events:none;

    &>.--backdrop{
      transition: all .25s ease-in-out;

      position: absolute;
      inset: 0;
      height: 100%;
      width: 100%;

      z-index: -1;

      opacity: 0%;
      background-color: -color('LEVEL-0');
    }


    &>.--base{

      position: absolute;
      display: flex;
      overflow: hidden;


      transition: all .4s cubic-bezier(.76,0,.45,.99);


      background: -color('LEVEL-1');

      border : var(--BORDER-SIZE) solid -color('LEVEL-0', 0.8);
      box-shadow: 0px 5px 8px -color('SHADOW', 0);

      &>.--content{
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: auto 1fr auto;

        &>.--header, &>.--content-body, .--footer{
          width: 100%;
          display: flex;
        }

        .gnkListview{
          
          background: unset !important;
          border-radius: unset !important;
          border : unset !important;
          box-shadow: unset !important;

        }
      }
    }


  


  &:is(.--align-left){
    &>.--base{
      border-radius: 0 var(--BORDER-RADIUS) var(--BORDER-RADIUS) 0;
      transform: translate( -360px, 0px);
      
      top:0;
      left:0;

      height: 100%;
      width: calc(100% - 50px);
      max-width: 360px;

    }
  }

  &:is(.--align-right){
    &>.--base{
      border-radius: var(--BORDER-RADIUS) 0 0  var(--BORDER-RADIUS);
      transform: translate(calc(100% + 360px) , 0);

      top:0;
      right:0;

      height: 100%;
      width: calc(100% - 50px);
      max-width: 360px;
    }
  }
  
  &:is(.--align-top){
    &>.--base{
      border-radius: 0 var(--BORDER-RADIUS) var(--BORDER-RADIUS) 0;
      transform: translateX(0, - 360px);

      top:0;
      left:0;

      width: 100%;
      height: calc(100% - 50px);
      max-height: 360px;
    }
  }
  
  &:is(.--align-bottom){
    &>.--base{
      border-radius: 0 var(--BORDER-RADIUS) var(--BORDER-RADIUS) 0;
      transform: translateX(0, calc(100% + 360px));

      bottom:0;
      left:0;

      width: 100%;
      height: calc(100% - 50px);
      max-height: 360px;
    }
  }



&:is(.--open){
    pointer-events:all;
    &>.--base{
      transform: translate(0px, 0px);
      box-shadow: 0px 5px 8px -color('SHADOW', 0.4);
    }

    &>.--backdrop{
      opacity: .5;
      cursor: pointer;
    }
  }


  }
</style>
