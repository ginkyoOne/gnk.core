  <script>
  import gnkComponent from "../ComponentBase/gnkComponent.vue"
  import createRipple from "../../utils/ripple"


  export default {
    name: 'gnkButton',
    extends: gnkComponent,
    emits: ['onsubmit','onchange', 'onclick','ondblclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onwheel', 'onfocus', 'onblur','onkeydown','onkeypress','onkeyup'],

    data() {
      return {
      }
    },

    props: {

      type: {
        type: String,
        required: false,
        skip: true,
        default: 'button',
        /* validator(type) {
          return ['submit', 'button', 'reset', 'toggle'].includes(type.toString())
        }, */
      },



      to: {
        type: String,
        skip: true,
        require: false,
        default: '',
      },

      href: {
        type: String,
        default: '',
        require: false,
        skip: true

      },

      blank: {
        type: Boolean,
        default: false,
        require: false,
        skip: true
      },




      pill: {
          type: Boolean,
          required: false,
          default: false,
      },

      circular: {
          type: Boolean,
          required: false,
          default: false,
      },



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



      size:{
        type: String,      
        required: false,
        default: '',
      /*  validator(type) {
          return ['xl', 'l', 'small', 'mini'].includes(type)
        }, */
      },

      align: {
        type: String,
        default: 'middle',
        required: false,

        validator(type) {
          return ['left', 'right','middle', 'vertical'].includes(type)
        },
      },

      animationType:{
        type: String,      
        required: false,
        default: '',
/*         validator(type) {
          return ['slide-up','slide-down','slide-left','slide-right', 'fade', 'scale', 'rotate'].includes(type)
        }, */
      },
      
      animateInactive:{
        type: Boolean,
        required: false,
        default: false,
      },

    },

    computed: {
      componentClassObject() {
        return {
          '--dark': !this.hasStyle,
          '--checked': this.type == 'toggle' && this.isCheched,
        }
      },
    },

    methods: {

    },

    watch: {

    },
    
    mounted() {
    
    },

  }
  </script>

<template>

  <div 
    
    :disabled="disabled" 
    :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
    :id="componentId"

    @click.prevent="onChecked('click',$event)"
    @mouseleave.prevent="this.componentRaiseEvent('mouseleave',$event)"
    @mouseover.prevent="this.componentRaiseEvent('mouseover',$event)"
    @keydown.prevent="this.componentRaiseEvent('keydown',$event)"
    @keypress.prevent="onChecked('keypress', $event)"
    @keyup.prevent="this.componentRaiseEvent('keyup',$event)">

        <button
          ref="internalButton"
          :id="componentId"
          :type="this.type"
        />


        <div class="--base">

          <div v-if="!!this.$slots.checked" class="--button-on">
            <slot name="checked">
            </slot>
          </div>

          <div v-if="!!this.$slots.loading" class="--button-busy">
            <slot name="loading">
            </slot>
          </div>

          <div class="--button-default">
            <slot>
            </slot>
          </div>
          
          <div v-if="!!this.$slots.animate" class="--button-off">
            <slot name="animate">
            </slot>
          </div>

          <div class="--ripple" />
          
          <gnk-progressbar v-if="this.loading" :class="componentGeneralClasses" loading/>
          <gnk-loading :hidden="!this.busy" :primary="this.primary" :secondary="this.secondary" :info="this.info" :success="this.success" :warning="this.warning" :danger="this.danger" :bug="this.bug" :dark="this.dark" :light="this.light" :square="this.square" :target="'#' + componentId + '> .--base'" />
        
        </div>
        
          <div  v-if="!!this.$slots.badge" class="--badge-holder">
            <slot name="badge" />
          </div>


  </div>
</template>

<style lang="scss">

.gnkButton{

    //SET CONTAINER AND VARIABLES 
    --border-radius: var(--BORDER-RADIUS);
    --border-style: solid;
    --border-size: var(--BORDER-SIZE);
    --border-color: #{-color('BASE',1,8,0,8)};

    --background-color:#{-color('BASE')};
    --color:#{-color('CONTRAST-TEXT')};

    --shadow: var(--SHADOW-COMPONENT);
    --inner-shadow: inset 0px 0px 10px  -color('SHADOW', .5);



    --leftRightPadding: 12px;
    --topBottomPadding: 8px;

    --translate-x: 0px;
    --translate-y: 0px;



    transition: all .25s ease-in-out;
    transform: translateX(var(--translate-x)) translateY(var(--translate-y));
        
    height: fit-content;
    width: fit-content;

    font-size: 1rem;
    line-height: 1.1rem;

    display: flex;
    flex-direction: row;
    align-items: center;


    //HIDE BUTTON(FOR ARIA READERS)
    &>button{
        display: none;
    }

    //SET BUTTON BASE
    &>.--base{  
      height: 100%;
      width: 100%;

      transition: all .25s ease-in-out;

      overflow: hidden;
      isolation: isolate;

      font-size: inherit;
      line-height: inherit;

      color: var(--color);
      background: var(--background-color);
      border-radius: var(--border-radius);
      border: var(--border-size) var(--border-style) var(--border-color);
      box-shadow: var(--shadow);   


      display: grid;
      grid: 1fr / 1fr;
      align-items: center;
      
      height: 100%;
      width: 100%;
      z-index: 1;  

      cursor:pointer; 

    }

    //DAFAULT DEFENITIONS OF ALL LAYERS
    
    &>.--base>.--ripple,  &>.--base>.--loading,&>.--base>.--button-on,&>.--base>.--button-off, &>.--base>.--button-busy,&>.--base>.--button-checked, &>.--base>.--button-default {
        border-radius: var(--border-radius);
        grid-column: 1;
        grid-row: 1;
    }

    &>.--badge-holder, &>.--base>.--ripple{
        inset: 0;
        border-radius: var(--border-radius);
        pointer-events: none;
        z-index: 4;
    }

    //ANIMATION BUTTON STATES 
    &>.--base>.--button-default, &>.--base>.--button-on, &>.--base>.--button-off, &>.--base>.--button-busy,&>.--base>.--button-checked{
      transition: all .25s ease-in-out;

      color:inherit;
      padding: var(--topBottomPadding)  var(--leftRightPadding);
      z-index: 2;

      display: flex;
    
      gap: 5px;
      
      height:100%;
      width: 100%;

      font-size: inherit;
      line-height: inherit;
      text-shadow: 0px 0px 2px #{-color('BASE',.5,8,0,0)};

    }
    &>.--base>.--button-on, &>.--base>.--button-off, &>.--base>.--button-busy,&>.--base>.--button-checked{
      position: absolute;
      z-index: 3;
    }
    &>.--base>.--button-on{
      transform: translateX(-100%);  
    }
    &>.--base>.--button-off, &>.--base>.--button-busy,&>.--base>.--button-checked{
      transform: translateX(100%);  
    }
    


    //BUSY STATUS AND LOADING STATUS
    &>.--base>.gnkLoading, &>.--base>.gnkProgressbar{
        position: absolute;
        inset: 0;
    }
    &>.--base>.gnkLoading{
      z-index: 4;
    }
    //LOADING STATUS
    &>.--base>.gnkProgressbar{
      margin: 0 !important;
      height:100%!important;
      border: unset !important;
      z-index: 1;
    }



 
    
 //TEXT

  &:is(.--align-middle) {
    &>.--base>.--button-default, &>.--base>.--button-on, &>.--base>.--button-off, &>.--base>.--button-busy,&>.--base>.--button-checked{
      flex-direction: row;
      align-items:center;
      justify-content:center;
      text-align: center;
    }
  }
  &:is(.--align-left) {
    &>.--base>.--button-default, &>.--base>.--button-on, &>.--base>.--button-off, &>.--base>.--button-busy,&>.--base>.--button-checked{
      flex-direction: row;
      align-items:flex-start;
      justify-content: center;
      text-align: left;
    }
  }
  &:is(.--align-right) {
    &>.--base>.--button-default, &>.--base>.--button-on, &>.--base>.--button-off, &>.--base>.--button-busy,&>.--base>.--button-checked{
      flex-direction: row;
      align-items:flex-end;
      justify-content: center;
      text-align: right;
    }
  }
  &:is(.--align-vertical) {
    &>.--base>.--button-default, &>.--base>.--button-on, &>.--base>.--button-off, &>.--base>.--button-busy,&>.--base>.--button-checked{
      flex-direction: column;
      align-items:center;
      justify-content: center;
      text-align: center;
    }
  }



//FORMAT
  &:is(.--pill) {
    --border-radius: 100vmax;
  }

  &:is(.--circular) {
    --border-radius: 100vmax;
    aspect-ratio: 1/1;
  }

  &:is(.--square) {
    --border-radius: 0px;
  }

  &:is(.--block) {
    width: 100% ;
  }



  // SIZING
  &:is(.--size-xl) {
      font-size: 1.4rem;
      line-height: 1.5rem;
      --leftRightPadding: 20px;
      --topBottomPadding: 15px;
      --border-radius: calc(var(--BORDER-RADIUS) + 8px );
  }

  &:is(.--size-l) {
      font-size: 1.2rem;
      line-height: 1.3rem;
      --leftRightPadding: 15px ;
      --topBottomPadding: 10px;
      --border-radius: calc(var(--BORDER-RADIUS) + 3px );
  }

  &:is(.--size-small) {
      font-size: .8rem;
      line-height: .9rem;
      --leftRightPadding: 10px ;
      --topBottomPadding: 5px;
      --border-radius: calc(var(--BORDER-RADIUS) - 3px );
  }

  &:is(.--size-mini) {
      font-size: .6rem;
      line-height: .7rem;
      --leftRightPadding: 8px ;
      --topBottomPadding: 3px;
      --border-radius: calc(var(--BORDER-RADIUS) - 5px );
  }
  


  //STYLE

    &.--border{
        //--border-size: calc(var(--BORDER-SIZE) * 2);
        &:not([gnk-theme-colorMode="dark"]){
          --border-color:#{-color('BASE',1,8,0,-5)};
        }
        --background-color: transparent;
    }

    &.--gradient{
        --background-color: linear-gradient(30deg, #{-color('BASE', 1)} 50%, #{-color('BASE', 1, 45, 15, 10)} 100%);
    }

    &.--clear{
      --background-color: transparent;
      --border-style: unset;
      --shadow:unset;
      --inner-shadow:unset;
      --color: #{-color('BASE')};

      .--ripple{
        opacity: 0;
      }
      
      &:is(:focus-within, :hover, :focus, :active){
        &:not(.darkmode){
          --color: #{-color('MAIN-TEXT')};  
        }

        --color: #{-color('CONTRAST-TEXT')};
        --background-color: transparent;
        --border-style: unset;
        --inner-shadow:unset;
      }

    }

    &.--transparent{

        --border-style: none;
        --color: #{-color('BASE')};

        &>.--base{
          box-shadow: unset;
          background-color: transparent;
        }        

      &:is(:focus-within, :hover, :focus, :active){
        &:not(.darkmode){
          --color: #{-color('MAIN-TEXT')};  
        }

        --color: #{-color('CONTRAST-TEXT')};
        
        &>.--base{
          box-shadow: var(--shadow);
        }
      }


    }

    &.--shadow{
        --shadow: 0px 0.25rem 0.5rem #{-color('BASE', 0.4)};
    }


    &:is(.--clear, .--transparent):not(.darkmode):is(.--default,.--light,.--dark){
      --color:-color('MAIN-TEXT');
    }
    &:is(.--clear, .--transparent):is(.darkmode):is(.--default,.--light,.--dark){
      --color:-color('CONTRAST-TEXT');
    }


 //STATUS
    &:is(:focus-within, :hover, :focus){
      --translate-y : -1px;
    }

    &:is(:active,.--checked){
      --border-color: #{-color('BASE',1,8,0,12)};
      --background-color: #{-color('BASE',1,0,0,-10)};
      --color: #{-color('CONTRAST-TEXT',.6)};
      --translate-y : 1px;
      --shadow: unset;
      &>.--base{
          box-shadow: var(--inner-shadow);
      }
    }

    &:is(:disabled, .--disabled,.--busy,.--loading){
      cursor:not-allowed;
      pointer-events: none;
    }

    &:is(:disabled, .--disabled){
      --shadow: unset;
      --border-style: unset;

      &>.--base{
        opacity: .6;
        filter:brightness(50%);
      }
    }

    &:is(.--busy,.--loading){
      cursor:progress;
    }


//'slide-up','slide-left', 'fade', 'scale', 'rotate'


  &:is(.--animationType-slide-up):not(.--animateInactive){
    &>.--base>.--button-default{
      transform: translateY(0);
      opacity: 1;
    }
    &>.--base>.--button-off, &>.--base>.--button-on, &>.--base>.--button-busy{
      transform: translateY(100%);
      opacity: 0;
    }

    &:is(:hover){
      &>.--base>.--button-default{
        transform: translateY(-100%);
        opacity: 0;
      }

      &>.--base>.--button-off{
        transform: translateY(0);
        opacity: 1;
      }
    }

    &:is(.--checked){
      &>.--base>.--button-default, &>.--base>.--button-off, &>.--base>.--button-busy{
        transform: translateY(-100%);
        opacity: 0;
      }

      &>.--base>.--button-on{
        transform: translateY(0);
        opacity: 1;
      }
    }
    &:is(.--loading,.--busy){
      &>.--base>.--button-default,&>.--base>.--button-off, &>.--base>.--button-on{
        transform: translateY(-100%);
        opacity: 0;
      }

      &>.--base>.--button-busy{
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  &:is(.--animationType-slide-down):not(.--animateInactive){
    &>.--base>.--button-default{
      transform: translateY(0);
      opacity: 1;
    }
    &>.--base>.--button-off, &>.--base>.--button-on, &>.--base>.--button-busy{
      transform: translateY(-100%);
      opacity: 0;
    }

    &:is(:hover){
      &>.--base>.--button-default{
        transform: translateY(100%);
        opacity: 0;
      }

      &>.--base>.--button-off{
        transform: translateY(0);
        opacity: 1;
      }
    }

    &:is(.--checked){
      &>.--base>.--button-default,&>.--base>.--button-off, &>.--base>.--button-busy{
        transform: translateY(100%);
        opacity: 0;
      }

      &>.--base>.--button-on{
        transform: translateY(0);
        opacity: 1;
      }
    }
    &:is(.--loading,.--busy){
      &>.--base>.--button-default,&>.--base>.--button-off, &>.--base>.--button-on{
        transform: rotateZ(100%);
        opacity: 0;
      }

      &>.--base>.--button-busy{
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  &:is(.--animationType-slide-left):not(.--animateInactive){
    &>.--base>.--button-default{
      transform: translateX(0);
      opacity: 1;
    }
    &>.--base>.--button-off, &>.--base>.--button-on, &>.--base>.--button-busy{
      transform: translateX(100%);
      opacity: 0;
    }
    
    &:is(:hover){
      &>.--base>.--button-default{
        transform: translateX(-100%);
        opacity: 0;
      }
      &>.--base>.--button-off{
        transform: translateX(0);
        opacity: 1;
      }
    }

    
    &:is(.--checked){
      &>.--base>.--button-default,&>.--base>.--button-off, &>.--base>.--button-busy{
        transform: translateX(-100%);
        opacity: 0;
      }

      &>.--base>.--button-on{
        transform: translateX(0);
        opacity: 1;
      }
    }
    &:is(.--loading,.--busy){
      &>.--base>.--button-default,&>.--base>.--button-off, &>.--base>.--button-on{
        transform: translateX(-100%);
        opacity: 0;
      }

      &>.--base>.--button-busy{
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
  &:is(.--animationType-slide-right):not(.--animateInactive){
    &>.--base>.--button-default{
      transform: translateX(0);
      opacity: 1;
    }
    &>.--base>.--button-off, &>.--base>.--button-on, &>.--base>.--button-busy{
      transform: translateX(-100%);
      opacity: 0;
    }
    
    &:is(:hover){
      &>.--base>.--button-default{
        transform: translateX(100%);
        opacity: 0;
      }
      &>.--base>.--button-off{
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    &:is(.--checked){
      &>.--base>.--button-default,&>.--base>.--button-off, &>.--base>.--button-busy{
        transform: translateX(100%);
        opacity: 0;
      }

      &>.--base>.--button-on{
        transform: translateX(0);
        opacity: 1;
      }
    }
    &:is(.--loading,.--busy){
      &>.--base>.--button-default,&>.--base>.--button-off, &>.--base>.--button-on{
        transform: translateX(100%);
        opacity: 0;
      }

      &>.--base>.--button-busy{
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
  &:is(.--animationType-fade):not(.--animateInactive){
    &>.--base>.--button-default{
      opacity: 1;
    }
    &>.--base>.--button-off, &>.--base>.--button-on, &>.--base>.--button-busy{
      opacity: 0;
      transform: translateX(0);
    }
    
    &:is(:hover){
      &>.--base>.--button-default{
        opacity: 0;
      }
      &>.--base>.--button-off{
        opacity: 1;
      }
    }
    &:is(.--checked){
      &>.--base>.--button-default,&>.--base>.--button-off, &>.--base>.--button-busy{
        opacity: 0;
      }

      &>.--base>.--button-on{
        opacity: 1;
        transform: translateX(0);
      }
    }
    &:is(.--loading,.--busy){
      &>.--base>.--button-default,&>.--base>.--button-off, &>.--base>.--button-on{
        opacity: 0;
      }

      &>.--base>.--button-busy{
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
  &:is(.--animationType-scale):not(.--animateInactive){
    &>.--base>.--button-default{
      transform: scale(1);
      opacity: 1;
    }
    &>.--base>.--button-off, &>.--base>.--button-on, &>.--base>.--button-busy{
      transform: scale(0);
      opacity: 0;
    }
    
    &:is(:hover){
      &>.--base>.--button-default{
        transform: scale(0);
        opacity: 0;
      }
      &>.--base>.--button-off{
        transform: scale(1);
        opacity: 1;
      }
    }
    &:is(.--checked){
      &>.--base>.--button-default,&>.--base>.--button-off, &>.--base>.--button-busy{
        transform: scale(0);
        opacity: 0;
      }

      &>.--base>.--button-on{
        transform: scale(1);
        opacity: 1;
      }
    }

    &:is(.--loading,.--busy){
      &>.--base>.--button-default,&>.--base>.--button-off, &>.--base>.--button-on{
        transform: scale(0);
        opacity: 0;
      }

      &>.--base>.--button-busy{
        transform: scale(1);
        opacity: 1;
      }
    }

  } 
  &:is(.--animationType-rotate):not(.--animateInactive){
    &>.--base>.--button-default{
      transform: rotateZ(0);
      opacity: 1;
    }
    &>.--base>.--button-off, &>.--base>.--button-on, &>.--base>.--button-busy{
      transform: rotateZ(-180deg);
      opacity: 0;
    }
    
    &:is(:hover){
      &>.--base>.--button-default{
        transform: rotateZ(180deg);
        opacity: 0;
      }
      &>.--base>.--button-off{
        transform: rotateZ(0);
        opacity: 1;
      }
    }

    &:is(.--checked){
      &>.--base>.--button-default,&>.--base>.--button-off, &>.--base>.--button-busy{
        transform: rotateZ(180deg);
        opacity: 0;
      }

      &>.--base>.--button-on{
        transform: rotateZ(0);
        opacity: 1;
      }
    }
    &:is(.--loading,.--busy){
      &>.--base>.--button-default,&>.--base>.--button-off, &>.--base>.--button-on{
        transform: rotateZ(180deg);
        opacity: 0;
      }

      &>.--base>.--button-busy{
        transform: rotateZ(0);
        opacity: 1;
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
}

</style>






