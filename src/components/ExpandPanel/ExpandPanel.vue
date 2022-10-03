<script>

import gnkComponent from "../ComponentBase/gnkComponent.vue"
import createRipple from "../../utils/ripple"


export default {
    name: "gnkExpandPanel",
    extends: gnkComponent,
    emits: ['update:expand', 'mouseleave', 'mouseover', 'keydown', 'keypress', 'keyup', 'click', 'onClick'],

    data() {
        return {
            isolatedIsExpanded: this.expand
        };
    },
    props: {
        expand: {
            default: false,
            required: false,
            skip: true
        },
        position: {
            type: String,
            skip:true,
            default: "top-right",
            validator: (value) => {
                return ["none", "top-right", "top-left", "bottom-right", "bottom-left"].includes(value);
            }
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
        transparent:{
            type: Boolean,
            required: false,
            default: false,
        },
        shadow:{
            type: Boolean,
            required: false,
            default: false,
        },

    },
    computed: {
        componentClassObject() {
            return {
                '--dark': !this.hasStyle,
                '--open': this.isOpen,
            };
        },
        componentStyleObject() {
            return {};
        },
        
        isOpen() {
            

            switch (true) {
                case Array.isArray(this.expand):
                    this.isolatedIsExpanded = this.expand.includes(this.componentId)
                    break;

                case typeof this.expand == "boolean":
                    this.isolatedIsExpanded = this.expand;
                    break;

                default:
                    this.isolatedIsExpanded = this.expand === this.componentId
                    break;
            }
            return this.isolatedIsExpanded

        }
    },
    methods: {
        onToggle(event) {

            this.isolatedIsExpanded = !this.isolatedIsExpanded

            switch (true) {
                case (this.expand === null):
                    this.$emit('update:expand', this.isolatedIsExpanded);
                    break;

                case Array.isArray(this.expand):
                    if (this.expand.includes(this.componentId)) {
                        this.expand.splice(this.expand.indexOf(this.componentId), 1)
                    }else{
                        this.expand.push(this.componentId)
                        this.expand.sort()
                    }
                    
                    this.$emit('update:expand', this.expand);
                    break;

                case typeof this.expand == "boolean":
                    this.$emit('update:expand', this.isolatedIsExpanded);
                    break;

                default:
                
                    this.$emit('update:expand', (this.expand == this.componentId ? '' : this.componentId));
            }

            createRipple.createRipple(event)
        }
    },

    mounted() {
        
    },
}
</script>

<template>


    <div
        :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
        :id="componentId"
        :style="componentStyleObject">





        <div class="--base">
            <div ref="title" class="--title">
                <div class="--ripple" />
                <gnk-button  :primary="this.primary" :secondary="this.secondary" :info="this.info" :success="this.success" :warning="this.warning" :danger="this.danger" :bug="this.bug" :dark="this.dark" :light="this.light" :square="this.square" clear block 
                @click="onToggle($event)">
                    <template #>
                        <slot name="title">
                            title
                        </slot>        
                    </template>
                </gnk-button>
                <span class="--icon | material-symbols-rounded" @click="onToggle($event)" >
                        expand_less
                </span>
            </div>
            <div  class="--content">
                <div ref="contentBody" class="--content-body">                
                    <slot>
                    
                    </slot>
                </div>
                <div ref="contentFooter" class="--footer">
                    <slot name="footer"> 
                        
                    </slot>
                </div>
            </div>
        </div>

        <div class="--badge-holder">
            <slot name="badge" />
        </div>

        <gnk-loading v-if="this.busy" :target="'#' + componentId + '> .--base'" />

    </div>



</template>

<style lang="scss">

.gnkExpandPanel{

    --content-height: auto;

    transition: all .25s ease-in-out;

    display: flex;
    flex-direction: row;
    align-items: center;


    color: -color('MAIN-TEXT');
    

    &>.--badge-holder, &>.--base>.--title>.--ripple{
        inset: 0;
        border-radius: var(--border-radius);
        pointer-events: none;
    }

    &>.--base{
        transition: all .25s ease-in-out;

        overflow: hidden;
        isolation: isolate;

        position: relative;

        height: fit-content;
        width: 100%;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        
        border-radius: var(--BORDER-RADIUS);
        border: var(--BORDER-SIZE) solid -color('LIGHT');
        box-shadow: var(--SHADOW-COMPONENT);

        background-color:  -color('BASE');


        &>.--title, &>.--content, &>.--content>.--content-body, &>.--content>.--footer{
            margin: 0 !important;
            display: flex;

            width:  100%;
            padding: 5px 2px ;
        }

        &>.--title{
            //background-color: -color('CONTRAST-TEXT',.1);
            color: -color('CONTRAST-TEXT');

            padding: 0px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-items: center;
            

            &>.gnkButton{
                color: inherit !important;
                &>.--content-holder>[class*=--content-step]{
                    color : inherit  !important;
                    justify-content: flex-start;
                }

                &:active{
                    transform: scale(1);
                }
            }
            &>.--icon{
                position: absolute;
                right: 15px;
                top:auto;
                left: auto;

                transition: all .5s ease-in-out;
                transform: rotate(0) scale(1);

                cursor: pointer;
            }
        }

        &>.--content{
            transition: max-height .5s ease-in-out, opacity .25s ease-in-out;

            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2,auto);
            max-height: 100vmax;
            opacity: 1;
            padding: 0;

            &>.--content-body{
                transition: opacity .4s ease-in-out;
                display: flex;
                background-color:  -color('CONTRAST-TEXT',.03);
                color: -color('CONTRAST-TEXT');
                p{
                    color: -color('CONTRAST-TEXT',.7);
                }
            }

            &>.--footer{
                transition: opacity .2s ease-in-out;
                width: 100%;
            }
        }

        &>.gnkLoading .--loading{
            left: auto;
            right: 5%;
        }

    }

    &:not(.--open){
        &>.--base>.--content{
            max-height:0px;
            pointer-events: none;

            &>.--content-body, &>.--footer{
                opacity: 0;
            }
        }

        &>.--base>.--title>.--icon{
            transform: rotate(180deg) scale(1.5);
        }
    }


    &:is(:disabled, .--disabled,.--busy,.--loading){
        cursor:not-allowed;
        pointer-events: none;
    }



    //STYLES          

    
    &.--square {
        &>.--base{
            border-radius: 0px;
        }
    }

    &.--border{
        &>.--base{
            border-width: calc(var(--BORDER-SIZE) * 2);
            background-color: transparent;
        }
    }

    &.--gradient{
        &>.--base{
            background-image: linear-gradient(30deg, -color('BASE', 0) 50%, -color('BASE', 1, 45, 15, 10) 100%);
        }
    }

    &.--transparent{
        &>.--base{
            background-color: transparent;
            border: none;

            &>.--title, &>.--content>.--footer{
                background-color: transparent;
            }
        }
    }

    &.--shadow{
        &>.--base{
            box-shadow: 0px 0.25rem 0.5rem -color('BASE', 0.4);
        }
    }

}


</style>