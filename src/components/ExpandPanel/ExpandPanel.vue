<script>

import gnkComponent from "../ComponentBase/gnkComponent.vue"

export default {
    name: "gnkExpandPanel",
    extends: gnkComponent,
    

    data() {
        return {

        };
    },

    props: {
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
            };
        },
        componentStyleObject() {
            return {};
        },

    },

    methods: {

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

                <gnk-button 
                class="--expand-button"
                :primary="this.primary" 
                :secondary="this.secondary" 
                :info="this.info" 
                :success="this.success" 
                :warning="this.warning" 
                :danger="this.danger" 
                :bug="this.bug" 
                :dark="this.dark" 
                :light="this.light" 
                
                :align="left" 

                transparent 
                block 
                square

                @click="onChecked('click',$event)">
                    <template #>
                        <div class="grid row col-12">
                            <div class="col-12">
                                <slot name="title">
                                    teste
                                </slot>        
                            </div>
                            <div class="col">
                                <gnk-icon size="small" class="--expand-icon">
                                    expand_less
                                </gnk-icon>
                            </div>
                        </div>
                    </template>
                </gnk-button>
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

        <gnk-loading v-if="this.busy" :primary="this.primary" :secondary="this.secondary" :info="this.info" :success="this.success" :warning="this.warning" :danger="this.danger" :bug="this.bug" :dark="this.dark" :light="this.light" :square="this.square" :target="'#' + componentId + '> .--base'" />

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
    

    &>.--badge-holder{
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

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-items: center;
            
            padding:0;

            overflow: hidden;

            &>.--expand-button{
                --shadow: unset;
                --inner-shadow: unset;
                --color:  -color('MAIN-TEXT');
                
                &:is(:hover, :active, :focus){
                    --color:  -color('MAIN-TEXT');
                }
            }
            &>.--expand-button .--expand-icon{
                
                transition: all .5s ease-in-out;
                transform: rotate(0) scale(1);

                cursor: pointer;
            }

        }

        &>.--content{
            
            //OPEN ANIMATION
            transition-property:  max-height, opacity;
            transition-timing-function: ease-in-out;
            transition-duration: .6s;
            transition-delay: 0s;
            
            max-height: 100vmax;
            
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2,auto);
            padding: 0;
            
            &>.--content-body, &>.--footer{
                transition-property: opacity, transform;
                transition-timing-function: ease-in-out;

                transform: translateY(0);

            }

            &>.--content-body{
                
                transition-duration: .3s;
                transition-delay: .4s;

                display: flex;
                background-color:  -color('CONTRAST-TEXT',.03);
                color: -color('CONTRAST-TEXT');

                p{
                    color: -color('CONTRAST-TEXT',.7);
                }
            }

            &>.--footer{

                transition-duration: .2s;
                transition-delay: .6s;
                
                transform: translateY(0);

                width: 100%;
            }
        }

        &>.gnkLoading .--loading{
            left: auto;
            right: 30px;
        }

    }

    &:not(.--checked){
        &>.--base>.--content{
            //CLOSE ANIMATION
            transition-delay: .3s;
            max-height:0px;
            pointer-events: none;


            &>.--content-body, &>.--footer{
                transform: translateY(-10px);
                opacity: 0;
            }
            &>.--content-body{
                transition-duration: .3s;
                transition-delay: .2s;
            }
            
            &>.--footer{
                transition-duration: .2s;
                transition-delay: 0s;
            }
        }

        &>.--base>.--title>.--expand-button .--expand-icon{
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

    @keyframes close-fade-out{
        from{
            opacity: 1;
        }
        to{
            opacity: 0;
        }
    }
    @keyframes close-fade-in{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    } 

    @keyframes close-panel{
        from{
            max-height: 100vmax;
        }
        to{
            max-height: 0vmax;
        }
    } 

    @keyframes open-panel{
        from{
            max-height: 0vmax;
        }
        to{
            max-height: 100vmax;
        }
    } 
    

}


</style>