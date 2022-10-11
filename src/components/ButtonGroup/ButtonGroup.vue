<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import { setCssVariable, getCssVariable  } from "../../utils/cssUtils"

export default {
    name: 'gnkButtonGroup',
    extends: gnkComponent,
    data() {
        return {
            beingDragged: false,
            childButtons: [],
            childLastChecked: null
        }
    },
    props: {
        draggable: {
            type: Boolean,
            default: false,
        },

        pill: {
            type: Boolean,
            required: false,
            default: false,
        },

        wrap: {
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
        mode: {
            type: String,
            required: false,
            default: 'normal',
            validator: type => {
                return ['normal', 'tabbar'].includes(type.toString())
            }
        }
    },

    computed: {
        componentClassObject() {
            return {
                '--level-3': !this.hasStyle,
                '--beingDragged': this.beingDragged && this.draggable
            }
        },
        /* childIsChecked() {
            return this.childButtons.map(child => child.isolatedCheck)
        }, */
        childChecked() {
            
            return this.childButtons.filter(child => child.isolatedCheck == true )
        }
    },

    watch: {
        childChecked(newValue,oldValue) {
            this.calculateTabbarSelection()
        }
        
    },

    emits: [

    ],

    methods: {
        registerChild(element) {

            if (element?.$options?.name === 'gnkButton') {
                this.childButtons.push(element)
            } 
        },

        calculateTabbarSelection() {
            try {

                let element = this.childChecked[0]?.$el
                let { left: childLeft, width: childWidth } = this.componentElementClientRect(element)

                let { left:parentLeft } = this.componentElementClientRect(this.$el)
                let { left:parentContainerLeft } = this.componentElementClientRect(this.$el.querySelector(".--buttons")[0])
                let childColor = getCssVariable(element,'--background-color') 
                //console.log(this.childChecked[0]?.componentId, left, width)
                
                setCssVariable(this.$el, '--buttons-highlight-background-color', childColor)
                setCssVariable(this.$el, '--buttons-highlight-left', `${Math.abs(parentLeft - childLeft)}px`)
                setCssVariable(this.$el, '--buttons-highlight-margin', `${childWidth / 4}px`)
                setCssVariable(this.$el, '--buttons-highlight-width', `${childWidth}px`)
                setCssVariable(this.$el, '--buttons-highlight-opacity', `1`)



            } catch (error) {
                console.error(error)
            }
            
        },

        startDragging() {
            
        },
        endDragging() {
            
        }
    },

    updated() { 
        this.calculateTabbarSelection()
    },




}
</script>

<template>


    <div
    :draggable="this.draggable"
    :disabled="disabled" 
    :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
    :id="componentId"

    @dragstart="this.dragStart"
    @dragend="this.dragEnd"

    @click="this.componentRaiseEvent('click',$event)"
    @mouseleave="this.componentRaiseEvent('mouseleave',$event)"
    @mouseover="this.componentRaiseEvent('mouseover',$event)"
    @keydown="this.componentRaiseEvent('keydown',$event)"
    @keypress="this.componentRaiseEvent('click',$event)"
    @keyup="this.componentRaiseEvent('keyup',$event)">

        <div class="--base">

            <div v-if="!!this.$slots.title" class="--title">
                <slot name="title">
                </slot>
            </div>

            <div v-if="!!this.$slots.default" class="--buttons">
                <div class="--buttons-glow"></div>
                <slot>
                </slot>
                <div class="--buttons-highlight"></div>
            </div>

            <div class="--ripple" />
            
            <gnk-loading :hidden="!this.busy" :primary="this.primary" :secondary="this.secondary" :info="this.info" :success="this.success" :warning="this.warning" :danger="this.danger" :bug="this.bug" :dark="this.dark" :light="this.light" :square="this.square" :target="'#' + componentId + '> .--base'" />
        
        </div>
        
        <div  v-if="!!this.$slots.badge" class="--badge-holder">
            <slot name="badge" />
        </div>
    </div>


</template>

<style lang="scss">


.gnkButtonGroup{

        //SET CONTAINER AND VARIABLES 
    --border-radius: var(--BORDER-RADIUS);
    --border-style: solid;
    --border-size: 0; //var(--BORDER-SIZE);
    --border-color: #{-color('BASE',1,0,0,2)};

    --background-color:#{-color('BASE')};
    --color:#{-color('CONTRAST-TEXT')};

    --shadow: unset;
    //--inner-shadow: inset 0px 0px 10px  -color('SHADOW', .5);

    --buttons-highlight-width: 50px;
    --buttons-highlight-left: 0px;
    --buttons-highlight-margin: 0px;
    --buttons-highlight-background-color: -color('PRIMARY',.5);
    --buttons-highlight-opacity: 0;

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


    &>.--base>.--ripple,  &>.--base>.--loading{
        border-radius: var(--border-radius);
        inset: 0;
    }
    

    &>.--badge-holder, &>.--base>.--ripple{
        inset: 0;
        border-radius: var(--border-radius);
        pointer-events: none;
        z-index: 4;
    }

    &>.--base{

        height: fit-content;
        width: fit-content;
        max-width: 100%;
        max-height: 100%;

        transition: all .25s ease-in-out;

        font-size: inherit;
        line-height: inherit;

        color: var(--color);
        background: var(--background-color);
        border-radius: var(--border-radius);
        border: var(--border-size) var(--border-style) var(--border-color);
        box-shadow: var(--shadow);   


        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
        height: 100%;
        width: 100%;
        z-index: 1;  

    }

    &>.--base>.--title, &>.--base>.--buttons{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    &>.--base>.--title{
        display: flex;
        align-items: flex-start;

        margin-left: 5px;
        margin-right: 10px;
    }
        
    &>.--base>.--buttons{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100%;


        &>[class*="gnkButton"]{
            //&>.--base{
                //padding-top: 5px;
           // }

            &:is(:active,.--checked){
                --translate-y : 0px;
            }
        }    

        &>[class*="gnkButton"]:not(.--square){
            margin: 0;

            &:is(.gnkButton + .gnkButton):not(:last-child, :first-child){
                &>.--base{
                    border-left: 1px solid -color('BASE', 1, 0, 0, 2);
                    border-right: 1px solid -color('BASE', 1, 0, 0, -5);
                    border-radius: 0;
                }
            }
            &:is(:first-child):not(:last-child){
                &>.--base{
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                    border-right: 1px solid -color('BASE', 1, 0, 0, -5);
                }
            }
            &:is(:last-child):not(:first-child){
                &>.--base{
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                    border-left: 1px solid -color('BASE', 1, 0, 0, 2);
                }
            }

        }




    }



    &:is(.--mode-tabbar){
        --border-size: var(--BORDER-SIZE);
        --shadow: var(--SHADOW);

        &>.--base>.--buttons{
            &>[class*="gnkButton"]{
                --color: var(--color);

                &:is(:active,.--checked){
                    --translate-y : 0px;
                    --color: var(--color);

                    &>.--base{
                        background-color: transparent;
                    }
                }
            }    
            &>.--buttons-glow{

                transition: all .25s cubic-bezier(.25,.1,.4,1.4);
                position: absolute;
                
                height: 100%;
                width: var(--buttons-highlight-width);
                
                top:0;
                left: var(--buttons-highlight-left);

                border-radius: 0 0 var(--BORDER-RADIUS) var(--BORDER-RADIUS);
                
                background: radial-gradient(circle at top, var(--buttons-highlight-background-color) 0%, transparent 80%);
                opacity: calc(var(--buttons-highlight-opacity) - .5); 

                pointer-events: none;
            }
            &>.--buttons-highlight{

                transition: all .25s cubic-bezier(.25,.1,.4,1.4);
                position: absolute;
                
                margin-left: var(--buttons-highlight-margin); 
                
                height: 4px;
                width: calc(var(--buttons-highlight-width) / 2);
                
                top:0;
                left: var(--buttons-highlight-left);

                border-radius: 0 0 var(--BORDER-RADIUS) var(--BORDER-RADIUS);
                background-color: var(--buttons-highlight-background-color);
                opacity: var(--buttons-highlight-opacity); 

                pointer-events: none;
            }
        }
    }


    &:not(.--mode-tabbar){
        
        &:is(.--draggable)>.--base{
            padding-left: 15px;
            
            cursor:pointer;

            &::before{
                

                position: absolute;

                content: '';
                cursor: move;

                top: 25%;
                left: 5px;

                height: 50%;
                width: 2px;

                border-left : 2px dotted -color('MAIN-TEXT',.3);
                border-right : 2px dotted -color('MAIN-TEXT',.3);
            
            }
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

    }



    //FORMAT
    &:is(.--pill) {
        --border-radius: 100vmax;
    }

    &:is(.--wrap) {
        &>.--base>.--buttons{
            flex-wrap: wrap;
        }
    }

    &:is(.--square) {
        --border-radius: 0px;
    }

    &:is(.--block) {
        width: 100% ;
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
        //--shadow:unset;
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
            //--shadow:unset;
        }
    }

    &.--transparent{

        --background-color: transparent;
        --border-style: none;
        --color: #{-color('BASE')};

        &>.--base{
            box-shadow: unset;
        }        

        &:is(:focus-within, :hover, :focus, :active){
            &:not(.darkmode){
                --color: #{-color('MAIN-TEXT')};  
            }

            --color: #{-color('CONTRAST-TEXT')};
            
/*             &>.--base{
                //box-shadow: var(//--shadow);
            } */
        }


    }

    &.--shadow{
        --shadow: 0px 0.25rem 0.5rem #{-color('BASE', 0.4)};
    }


    &:is(.--clear, .--transparent):not(.darkmode):is(.--default){
        --color:-color('MAIN-TEXT');
    }
    &:is(.--clear, .--transparent):is(.darkmode):is(.--default){
        --color:-color('CONTRAST-TEXT');
    }


}


</style>