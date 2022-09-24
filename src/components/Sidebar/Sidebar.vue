<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import createRipple from "../../utils/ripple"
import Tooltip from "../Tooltip/Tooltip.vue"

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
            default: "right",
            skip: true,
            validator: (value) => ["left", "center", "right"].includes(value)
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
              "--open" : this.modelValue,
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
      top:0;
      left:0;

      height: 100%;
      width: calc(100% - 50px);
      max-width: 360px;

      display: flex;


      transition: all .25s ease-in-out;


      background: -color('LEVEL-1');
      border-radius: var(--BORDER-RADIUS);

      border : var(--BORDER-SIZE) solid -color('LEVEL-0', 0.8);

      transform: translateX(-100vmax);
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
      }
    }


  &:is(.--open){
    pointer-events:all;
    &>.--base{
      transform: translate(0);
      box-shadow: 0px 5px 8px -color('SHADOW', 0.4);
    }

    &>.--backdrop{
      opacity: .5;
      cursor: pointer;
    }
  }

  }
</style>
