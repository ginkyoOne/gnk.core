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
    }
  },

  props: {
    notSync: {
      type: Boolean,
      default: false,
    },
    disableRipple:{
      type: Boolean,
      default: false
    },
        
    title: {
      type: String,
      required: false,
      default: undefined,
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
/*     relief:{
      type: Boolean,
      required: false,
      default: false,
    }, */
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
      validator(type) {
        return ['xl', 'l', 'default', 'small', 'mini'].includes(type)
      },
    },

    busy:{
      type: Boolean,
      required: false,
      default: false,
    },

    loading:{
      type: Boolean,
      required: false,
      default: false,
    },


    animate:{
      type: String,      
      required: false,
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

    floating:{
      type: Boolean,
      required: false,
      default: false,
    },
    flat:{
      type: Boolean,
      required: false,
      default: false,
    },
    type: {
      type: String,
      required: false,
      default: 'button',
      validator(type) {
        return ['submit', 'button', 'reset', 'toggle'].includes(type)
      },
    },


  },

  computed: {
    buttonType() {
      switch (this.type) {
        case 'submit':
            return 'submit'
          break;
        case 'button':
            return 'button'
          break;
        case 'reset':
            return 'reset'
          break;
        case 'toggle':
            return 'button'
        default:
          break;
      }
    },

    componentClassObject() {
      return {

        '--primary' : true,
        '--toggle': this.type === 'toggle',
        '--floating': this.floating,

        '--flat': this.flat,
        '--border': this.border,
        '--gradient': this.gradient,
        '--relief': this.relief,
        '--transparent': this.transparent,
        '--clear': this.clear,
        '--shadow': this.shadow,

        '--size-xl': this.size === 'xl',
        '--size-l': this.size === 'l',
        '--size-small': this.size === 'small',
        '--size-mini': this.size === 'mini',

        '--animate': this.$slots?.animate  ? true : false,

        '--animate-slide-up': this.animate === 'slide-up' && !this.loading && !this.busy && !this.animateInactive ? true : false,
        '--animate-slide-left': this.animate === 'slide-left'  && !this.loading  && !this.busy && !this.animateInactive? true : false,
        '--animate-fade': this.animate === 'fade'  && !this.loading && !this.busy && !this.animateInactive ? true : false,
        '--animate-scale': this.animate === 'scale'  && !this.loading && !this.busy && !this.animateInactive? true : false,
        '--animate-rotate': this.animate === 'rotate'  && !this.loading && !this.busy && !this.animateInactive? true : false,

        '--busy': this.busy,
        '--loading': this.loading,

        '--active': this.checked & this.type == 'toggle' ,

      }
    },
  },


  methods: {

    onClick(event) {
        event.preventDefault()

        if(!this.disableRipple && !!event) createRipple.createRipple(event)
        
        if(this.type === 'toggle') {
          this.checked = !this.checked 
          this.componentRaiseEvent('onchange',{newValue: this.checked , oldValue: !this.checked, event: event})
        }
        
        this.componentRaiseEvent('onclick',{event: event})

    },

  },

  mounted() {

  },

}
</script>

<template>
  <button :ref="componentId" :id="componentId" :class="[componentName, componentClassObject , componentGeneralClasses]"
    :title="title" :aria-label="title" :disabled="disabled" :type="buttonType" @click.stop="onClick($event)"
    :checked="checked">
    <div class="--content">

        <gnk-Progress loading gradient block v-if="loading"></gnk-Progress> 

        <slot>gnkButton</slot>

        <gnk-Loading v-if="busy" :target="'#' + componentId" />
    </div>
    <div class="--content-animate" v-if="!!this.$slots.animate">
      <slot name="animate"></slot>
    </div>
  </button>
</template>

<style lang="scss">

















.gnkButton {
  display: flex;
  align-items: center;
  justify-content: center;


  transition: flex 0.3s ease-out;
  cursor: pointer;

  position: relative;
  height: fit-content;
  width: fit-content;
  margin: 5px;
  padding: 0 !important;

  overflow: hidden !important;
  

  border: var(--BORDER-SIZE) none  -color('BASE');
  border-radius: var(--BORDER-RADIUS);
  
  background-color: -color('BASE', 1);
  color: -color('BASE-TEXT',1);

  transition: transform 0.2s ease;
  transform: translateY(0);







  .--content{
    gap: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;

    padding: 10px 12px;
    height: 100%;
    width: 100%;

    line-height: calc(var(--LINE-HEIGHT));
    
    &>.gnkProgress{
      position: absolute;
      top: 0 !important;
      left: 0 !important;
      height:100%!important;
      z-index: -1;
    }

    >*{
      flex-grow: 0!important;
      font-size: var(--FONT-SIZE) !important;
      line-height: var(--LINE-HEIGHT) !important;
    }
  }

  .--content-animate{
    gap : 5px;
  }

  &:is(:active):not(.--relief){
    transition: filter 0.2s ease-in-out;
    filter: contrast(1.5) grayscale(.1);
    transform:scale(0.98);
  }

  &:disabled{
    pointer-events: none;
    opacity: .35;
  }

  &:is(:hover){
    filter: brightness(1.2);
  }




&.--floating{

  &:is(:hover):not(.disabled, .--relief, .--flat) {
      transition: transform 0.2s ease;
      transform: translateY(-2px);
    
      &:is(.--size-small) {
        box-shadow: 0px 10px 20px -8px -color('BASE', 1);
      }
      &:is(.--size-mini) {
        box-shadow: 0px 10px 20px -6px -color('BASE', 1);
      }
      &:not(.--size-small, .--size-mini) {
        box-shadow: 0px 10px 20px -10px -color('BASE', 1);
      }
  }

}
&.--flat{
  transition: opacity 0.2s ease, color 0.2s ease;

  &:is(.--active){
    background-color: -color('BASE',1);
    color: -color('BASE-TEXT',1);
  }

  &:not(.--active){
    color: -color('BASE', 1) !important;
    background-color: -color('BASE',0.2);
  }

  &:is(:hover):not(.--active){
    color: -color('BASE-TEXT',1) !important;
    background-color: -color('BASE',0.4);
  }

  &:is(:active){
    color: -color('BASE-TEXT',1) !important;
    background-color: -color('BASE',0.9);
  }

}
&.--border{

  transition: border 0.2s ease, background-color 0.4s ease, color 0.2s ease ,transform 0.2s ease !important;

  
  

  &:is(:hover):not(.--active){
    outline: var(--BORDER-SIZE)  solid -color('BASE', 0.6);
    &:not(.disabled, .--flat,.--relief){
      transition: transform 0.2s ease;
      transform: translateY(-2px);
    }
  }


  &:not(.--active){
    outline: var(--BORDER-SIZE)  solid -color('BASE', 1);
    background-color: transparent ;
    color: -color('BASE',1);
  }

  &:is(.--active, :active){
    background-color: -color('BASE', 1);
    color: -color('BUTTON-TEXT',1);
  }

}
&.--gradient:not(.--busy, .--loading){
  
  background-image: linear-gradient(30deg, -color('BASE',0) 30%, -color('BASE', 1 , 45 , 15 , 10) 80%);
  
  &::after {
    transition: opacity 0.5s linear;
    position: absolute;
    content: "";
    inset: 0;
    background-image: linear-gradient(30deg, -color('BASE',1,0,0,-5) 0%, -color('BASE', 1 , 45 , 15 , 10) 60%);
    z-index: -1;
    opacity: 0;
  }

  &:is(:hover, .--active)::after{
    opacity: 1;
  }

}

&.--busy,
&.--loading{
  pointer-events: none;
}


&.--relief{
  
  background: -color('BASE');
  color: -color('BASE-TEXT',1);
  overflow: hidden;
  
  transition: all 0.3s ease;
  
  transform: translateY(-4px) scale(1,1);
  padding-bottom: 4px;
  

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: calc(100% - 4px);

    filter: contrast(2) grayscale(.4);
    border-bottom: 3px solid -color('BASE', 1);
    border-radius: inherit;
    box-sizing: border-box;
    
    z-index: 1;
  }

  &:is(.--active){

    transition: padding 0.3s ease , transform 0.3s ease, margin-bottom 0.3s ease !important;
    padding-bottom: 0px;
    transform: translateY(0px);
    margin-bottom: 9px;

    &::before {
      transition: transform 0.3s ease, border-bottom 0.2s ease , opacity 0.2s ease  !important;
      transform: translateY(4px);
      opacity: 0;
    }
  }
}


&.--shadow{
  transition: box-shadow 0.2s ease, translateY 0.2s ease;
  background:transparent; 
  transform:translateY(0px);

  &:is(:hover):not(.--active){
    transform:translateY(-2px);
    box-shadow: 0px 10px 20px -8px -color('DARK', 1,0,0,-50);
  }

  &:is(:active, .--active){
    transform:translateY(-2px);
    box-shadow: 0px 10px 20px -8px -color('DARK', 1,0,0,-50);
  }

}


&.--transparent{
  background:transparent;
  color: -color('BASE'); 
  
  &::after{
    content: '';
    background: -color('BASE', .2);
    position: absolute;
    box-sizing: border-box;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    border-radius: inherit;

    transition: all .25s ease;
    transform: scale(.5);
    opacity: 0;
    
    z-index: -1;
  }

  &:is(:hover):not(.--active){
    &::after{
      opacity: 0.8;
      transform: scale(1) !important;
    }
  }

  &:is(:active, .--active){
    color: -color('BUTTON-TEXT');
    &::after{
      background: -color('BASE', .4);
      opacity: 1;
      transform: scale(1);
    }
  }

}

&.--clear {
  background: transparent;
  color: -color('BASE');

  &:is(:hover):not(.--active) {
    transform: scale(1.05);
    color: -color('BASE', 1,0,0,10);
  }

  &:is(.--active) {
    color: -color('BASE', 1, 0, 0, 10);

    &::after {
      background: -color('BASE', .4);
      opacity: 1;
      transform: scale(1);
    }
  }

}





&.--animate{
  transition: all 0.2s ease !important;
  .--content-animate{
    display: flex;
    align-items: center;
    justify-content: center;


    height:100%;
    width:100%;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 0;
    
  }
}
&.--animate-fade{
  .--content{
    transition: opacity 0.3s ease;
    opacity: 1;
  }
  .--content-animate{
    transition: opacity 0.3s ease;
    opacity: 0;
  }

  &:is(:hover,:active){

    .--content{
      opacity: 0;
    }
    .--content-animate{
      opacity: 1;
    }
  }
}
&.--animate-slide-up{
  .--content{
    transition: transform 0.3s ease, opacity 0.1s ease;
    transform: translateY(0%);
    opacity: 1;
  }
  .--content-animate{
    opacity: 1;
    transition: transform 0.3s ease, opacity 0.1s ease;
    transform: translateY(100%);
    opacity: 0;
  }

  &:is(:hover,:active){

    .--content{
      transform: translateY(-100%);
      opacity: 0;	
    }
    .--content-animate{
      transform: translateY(0%);
      opacity: 1;
    }
  }
}
&.--animate-slide-left{
  .--content{
    transition: transform 0.3s ease, opacity 0.1s ease;
    transform: translatex(0%);
    opacity: 1;
  }
  .--content-animate{
    opacity: 1;
    transition: transform 0.3s ease, opacity 0.1s ease;
    transform: translatex(100%);
    opacity: 0;
  }

  &:is(:hover,:active){

    .--content{
      transform: translatex(-100%);
      opacity: 0;
    }
    .--content-animate{
      transform: translatex(0%);
      opacity: 1;
    }
  }
}
&.--animate-scale{
  .--content{
    transition: transform 0.3s ease, opacity 0.1s ease;
    transform: scale(1);
    opacity: 1;
  }
  .--content-animate{
    transition: transform 0.3s ease, opacity 0.1s ease;
    transform: scale(0);
    opacity: 0;
  }

  &:is(:hover,:active){

    .--content{
      transform: scale(0);
      opacity: 0;
    }
    .--content-animate{
      transform: scale(1);
      opacity: 1;
    }
  }
}
&.--animate-rotate{
  .--content{
    transition: all 0.3s ease, opacity 0.1s ease;
    transform: rotate(0deg);
    opacity: 1;
  }
  .--content-animate{
    transition: all 0.3s ease, opacity 0.1s ease;
    transform: rotate(180deg);
    opacity: 0;
  }

  &:is(:hover,:active){

    .--content{
      transform: rotate(180deg);
      opacity: 0;
    }
    .--content-animate{
      transform: rotate(0deg);
      opacity: 1;
    }
  }
}




&.--size-xl {
  border-radius: calc(var(--BORDER-RADIUS) + 4px);
  .--content { 
    font-size: calc(var(--FONT-SIZE) + 0.2rem);
    line-height: calc(var(--LINE-HEIGHT) + 0.2rem);
    padding: 15px 20px !important;
  }
}
&.--size-l {
  border-radius: calc(var(--BORDER-RADIUS) + 2px);
  .--content{
    font-size: calc(var(--FONT-SIZE) + 0.1rem);
    line-height: var(--LINE-HEIGHT +0.1rem);
    padding: 10px 15px !important;
  }
}
&.--size-small {
  border-radius: calc(var(--BORDER-RADIUS) - 2px);
  .--content{
    font-size: calc(var(--FONT-SIZE) - 0.1rem);
    line-height: calc(var(--LINE-HEIGHT) - 0.1rem);
    padding: 5px 10px !important;
  }
}
&.--size-mini {
  border-radius: calc(var(--BORDER-RADIUS) - 4px);
  .--content {
    font-size: calc(var(--FONT-SIZE) - 0.2rem);
    line-height: calc(var(--LINE-HEIGHT) - 0.1rem);
    padding: 3px 8px !important;
  }
}


&.--pill {
  border-radius: 100vmax;
  min-width: 100px;
}

&.--circular {
  height:35px;
  max-width:35px !important;
  
  
  border-radius: 50%;
  aspect-ratio: 1/1;
}
&.--square {
  border-radius: 0px;
}

&.--block {
    width: calc(100% - 10px) !important;
    display: block !important;
}







&.--disabled{
  pointer-events: none;
  opacity: .35;
}



}

[gnk-theme-colorMode="light"]{
  .gnk-button:is(:hover){
    filter: brightness(0.95);
  }
  .--shadow{
    color: -color('PRIMARY', 1) !important;        
  }
}



[gnk-them-colorMode="dark"]{
  .--border{
    color: -color('PRIMARY', 1) !important;
  }

}



</style>
