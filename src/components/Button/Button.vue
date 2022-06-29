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
        activeStep: 0,
      }
    },

    props: {

      type: {
        type: String,
        required: false,
        default: 'button',
        validator(type) {
          return ['submit', 'button', 'reset', 'toggle'].includes(type)
        },
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



    },

    computed: {
      buttonType() {
        switch (this.type) {
          case 'submit':
            return 'submit'
          case 'button':
            return 'button'
          case 'reset':
            return 'reset'
          case 'toggle':
            return 'button'
          default:
            break;
        }
      },

      componentClassObject() {
        return {
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

          if(!!event) createRipple.createRipple(event)
          
          if(this.type === 'toggle') {
            this.checked = !this.checked 
            this.componentRaiseEvent('onchange',{newValue: this.checked , oldValue: !this.checked, event: event})
          }
          
          this.componentRaiseEvent('onclick',{event: event})

      },

      onMouseOver(event) {
          event.preventDefault()
          this.componentRaiseEvent('onmouseover',{event: event})
      },
      onMouseOut(event) {
          event.preventDefault()
          this.componentRaiseEvent('onmouseout',{event: event})
      },


    },

    mounted() {

    },

  }
  </script>

  <template>
    <button :checked="checked" :class="[componentName, componentClassObject , componentGeneralClasses]"
      :disabled="disabled" :id="componentId" :style="componentStyleObject" :type="buttonType"
      @click.stop="onClick($event)" @mouseleave="activeStep = 0"
      @mouseover=" activeStep = (!!this.$slots.animate ? 1 : 0 ) ">
  
  
      <transition name="fade">
        <gnk-progress v-if="this.loading" loading class="fill " />
      </transition>
  
  
  
      <div class="--ripple" />


      <div class="--content-holder">
        <div class="--content-step1">
          <slot>
  
  
          </slot>
        </div>
        <div class="--content-step2" v-if="!!this.$slots.animate">
          <slot name="animate">
  
  
          </slot>
        </div>
      </div>
  
  
      <transition name="fade">
        <gnk-loading v-if="this.busy" :target="'#' + componentId" />
      </transition>
  
  
      <div class="--badge-holder">
        <slot name="badge" />
      </div>
  
  
  
  
  
  
      <!--     <div class="--content">
      
                <gnk-Progress loading gradient block v-if="loading"></gnk-Progress> 
      
                <slot>gnkButton</slot>
      
                <gnk-Loading v-if="busy" :target="'#' + componentId" />
            </div>
            <div class="--content-animate" v-if="!!this.$slots.animate">
              <slot name="animate"></slot>
            </div>-->
  
  
    </button>
  </template>

<style lang="scss">
  .gnkButton{
    isolation: isolate;
    user-select: none;
    position: relative;
    display:inline-flex;
    align-items:center;
    justify-content:center;
  
    background-color: -color('BASE');
    color: -color('BASE-TEXT');
  
    border-radius: var(--BORDER-RADIUS);
    border: 1px solid -color('BASE',1,0,0,1.5); 
  
    width: fit-content;
    height: fit-content;
  
    margin:5px;
    padding: 8px 12px;
  
    font-size: .8rem;
  
    //box-shadow: 0px 5px 1rem -color('BASE', 0.4);
    &::after{
      transition: all .2s ease-in-out;
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      z-index: -1;
      transform:scale(0);
    }

    &:is(:disabled, .--disabled){
      pointer-events: none;
      opacity: .8;
      filter:brightness(80%);
    }

          
      
      
    &>.gnkProgress,.gnkLoading,.--badge-holder, .--ripple{
      border-radius: inherit !important;
      position: absolute;
      inset: 0;
    }

    &>.--ripple{
      overflow: hidden;
    }

    &>.--content-holder{
      transition: all .2s ease-in-out;
      border-radius: inherit;
      position: relative;

      display: grid;
      grid: 1fr / 1fr;

      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: inherit !important;
      line-height: inherit !important;

      &>[class*="--content-step"]{
        border-radius: inherit;
        position: relative;
        display: flex;
        grid-column: 1;
        grid-row: 1;

        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        gap: 5px;
        font-size: inherit !important;
        line-height: inherit !important;
      }

      &>.--content-step2{
        border-radius: inherit;
        position: relative;
        opacity: 0;
      }


    }


    

    
    
      // SIZING
    &.--size-xl {
      border-radius: 20px;
      padding: 15px 20px;
      font-size: calc(var(--FONT-SIZE) + 0.2rem);
      line-height: calc(var(--LINE-HEIGHT) + 0.2rem);
    }

    &.--size-l {
      border-radius: 15px;
      padding: 10px 15px;
      font-size: calc(var(--FONT-SIZE) + 0.1rem);
      line-height: calc(var(--LINE-HEIGHT) + 0.1rem);
    }

    &.--size-small {
      border-radius: 9px;
      padding: 5px 10px;
      font-size: calc(var(--FONT-SIZE) - 0.1rem);
      line-height: calc(var(--LINE-HEIGHT) - 0.1rem);
    }

    &.--size-mini {
      border-radius: 7px;
      padding: 3px 8px;
      font-size: calc(var(--FONT-SIZE) - 0.2rem);
      line-height: calc(var(--LINE-HEIGHT) - 0.1rem);
    }
    
    

    //FORMAT 
    &.--pill{
      border-radius: 100vmax;
    }
                          
    &.--circular {
      border-radius: 50%;
      aspect-ratio: 1/1;
    }

    &.--square {
      border-radius: 0px;
    }

    &.--block {
        width: 100% !important;
        display: block !important;
    }
          
            
            
            
            
            
            
            
    &:is(:hover, :focus){
      &>.--content-holder{
        transform: translateY(-10%);
      }
      &::after{
        background-color: -color('BASE', .5,0,0,5);
        transform:scale(1);
      }
    }       

    &:is(:active, :checked) {
      transform: scale(0.95);

      &>.--content-holder {
          transform: scale(0.99);
      }

      &::after {
        background-color: -color('BASE', .5, 0, 0, -5);
      }
    }
            
            
            
            
            
            

    &.--border{
      background-color: transparent;
    }

    &.--gradient{
      background-image: linear-gradient(30deg, -color('BASE', 0) 50%, -color('BASE', 1, 45, 15, 10) 100%);
    }

    &.--transparent{
      background-color: transparent;
      border: none;
    }

    &.--clear{
      background-color: transparent;
      border: none;
    }

        
      
      
      
                
                
                
                
                
                
                
                
          
    //ANIMATIONS
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity .5s ease-in-out;
    }

    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }
                
                
}
                              
          
        
      
    
</style>
