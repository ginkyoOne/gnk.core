<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"

export default {
    name: 'gnkCard',
    extends: gnkComponent,
    
    data() {
        return {
            
        }
    },
    props: {
        
        headerBackground: {
            type: String,
            default: null,
            skip: true,
            validator: function(value) {
                return value.length > 0
            }
        },

        headerBackgroundAlt: {
            type: String,
            default: null,
            skip: true,
        },

        headerBackgroundHeight: {
            type: Number,
            default: 450,
            skip: true,
            validator(value) {
                return (value > 125 && value < 500 && !isNaN(value))
            },
        },

        animateInactive: {
            type: Boolean,
            default: false,
            skip: true,
        },

        type: {
            type: String,
            default: 'cardType01',
            validator: function(value) {
                return ['cardType01', 'cardType02', 'cardType03', 'cardType04', 'cardType05'].includes(value)
            }
        },
        overflow: {
            type: String,
            default: 'visible',
            skip: true,
            validator: function(value) {
                return ['hidden', 'scroll', 'visible'].includes(value)
            }
        }
    },

    computed: {
        hasValidHeaderBackground() {
            return (!!this.headerBackground && this.headerBackground.length > 0)
        },

        componentClassObject() {
            return {
                '--separate-title': !(this.hasValidHeaderBackground),
                '--animate': !this.animateInactive,

                '--overflow-hidden': this.overflow == 'hidden',
                '--overflow-scroll': this.overflow == 'scroll',
                '--overflow-visible': this.overflow == 'visible' &&  (this.type === 'cardType01' || !this.hasValidHeaderBackground),


                '--cardType01': this.type === 'cardType01' || !this.hasValidHeaderBackground,
                '--cardType02': this.type === 'cardType02' && this.hasValidHeaderBackground,
                '--cardType03': this.type === 'cardType03' && this.hasValidHeaderBackground,


                //'cardType04': this.type === 'cardType04',
                //'cardType05': this.type === 'cardType05',
                
            }
        },
    },
    emits: ['click', 'mouseover', 'mouseleave', 'mouseover', 'keydown', 'keypress', 'keyup'],   
    
}
</script>

<template>

    <div
	:class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
	:id="componentId"
    
    @click="this.componentRaiseEvent('click',$event)"
    @mouseleave="this.componentRaiseEvent('mouseleave',$event)"
    @mouseover="this.componentRaiseEvent('mouseover',$event)"
    @keydown="this.componentRaiseEvent('keydown',$event)"
    @keypress="this.componentRaiseEvent('keypress',$event)"
    @keyup="this.componentRaiseEvent('keyup',$event)">
    



            <div class="--hero-container" v-if="this.hasValidHeaderBackground || !!this.$slots.interactions" >
                <gnk-image v-if="this.hasValidHeaderBackground" class="--hero-background" :src="headerBackground"
                                :alt="headerBackgroundAlt" animation="zoomIn-light">
                </gnk-image>
                <div v-if="!!this.$slots.interactions" class="--interactions">
                    <slot name="interactions">
                    
                    </slot>
                </div>
            </div>
            <div class="--content">
                <div v-if="!!this.$slots.title" class="--content-title | text-capitalize flex ">
                    <slot name="title">
                    
                    </slot>
                </div>
                <div v-if="!!this.$slots.default" class="--content-body | flex ">
                    <slot>
                    
                    </slot>
                </div>
            </div>
            <div v-if="!!this.$slots.footer" class="--footer | flex">
                <slot name="footer">

                </slot>
            </div>

<!--         <div class="--badge-holder">
            <slot name="badge" />
        </div>
 -->
    </div>


</template>

<style lang="scss">








[class*="--cardType"] {
    transition: all .25s ease-in-out;
    
    overflow: hidden;
    margin:5px;
    margin-bottom: 5px;


    position: absolute;
    inset: 0;
    margin: 0;
    
    display: grid;
    width: 100%;

    transition: all .25s ease-in-out;

    position: relative;

    background: -color('LEVEL-1');
    border-radius: var(--BORDER-RADIUS);

    box-shadow: var(--SHADOW);
    border : var(--BORDER-SIZE) solid -color('LEVEL-0', 0.8);
    
    &:is(.--overflow-hidden){
        &>.--content>.--content-body {
            overflow-y: hidden;
        }
    }

    &:is(.--overflow-scroll){
        &>.--content.--content-body {
            overflow-y: scroll;
        }
    }


    &>.--content {
        grid-area: content;

        transition: all .25s ease;
        padding: 15px;
        width: 100%;
        height: fit-content;
        //max-height:100vmax;
        



        &>.--content-title {
            transition: all .25s ease-in-out;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100% !important;

            &>:first-of-type(h4,h3,h2,h1,p){
                margin-block-start: 10px;
                margin-block-end: 10px;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                font-size: 1.5rem;
                font-weight: bold;
            }
        }
        

        &>.--content-body {
            transition: all .25s ease-in-out; 
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: flex-start;
            justify-content: flex-start;
            width: 100%;
            height:100%;
        }
    }

    &>.--hero-container {
        grid-area: media;

        height: 100%;
        width: 100%;
        background: -color('LEVEL-1');

        border-radius: var(--BORDER-RADIUS);
        overflow: hidden;
        position: relative;

        &>.--hero-background {
            position: relative;
            height: 100%;
            width: 100%;
            min-height: 250px;
            min-width: 200px;
        }

        &>.--interactions {
            position : absolute;
            bottom: 15px;
            right : 15px;

            transition: all .25s ease-in-out;
            
            display: flex;
            flex-direction: row;
            gap: 5px;
        }
    }

    &>.--footer{
        transition: all .25s ease-in-out;
        grid-area: footer;

        background: -color('LEVEL-2');
        border-radius: 0 0 var(--BORDER-RADIUS) var(--BORDER-RADIUS);
        min-height:10%;
        height: fit-content;
        padding: 5px 2px;
    }



    &.--animate:is(:active, :hover) {
        transform: translateY(-10px);
        box-shadow: var(--SHADOW);

        
            &>.--content {
                &>.--content-title {
                    transition: transform .5s .10s ease-in-out;
                    transform: translateY(5px);
                }

                &>.--content-body {
                    opacity: 1;
                    transition: transform .4s .10s ease-in-out;
                    transform: translateY(5px);
                }
            }

            &>.--hero-container>.--interactions {
                transform: translate(0, 0) scale(1.1);
            }
        
    }

    &:focus-within:is(.--animate){
        transform: translateY(-10px);
        box-shadow: 0px 5px 10px -color('SHADOW', 0.8);

        
            &>.--content {
                &>.--content-title {
                    transition: transform .5s .10s ease-in-out;
                    transform: translateY(5px);
                }

                &>.--content-body {
                    opacity: 1;
                    transition: transform .4s .10s ease-in-out;
                    transform: translateY(5px);
                }
            }

            &>.--hero-container>.--interactions {
                transform: translate(0, 0) scale(1.1);
            }
    }

    &:is(.--separate-title){
            .--content-title{

                padding: 10px;
                margin-bottom: 10px;
                &::after{
                    content: '';
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 100%;
                    border-top: var(--BORDER-SIZE) solid -color('LEVEL-4', 0.5);
                    border-bottom: var(--BORDER-SIZE) solid -color('LEVEL-0', 0.5);
                }
            }
    }


    &:is(.--overflow-visible){
        height: max-content !important;
        overflow: initial !important;
        &>.--content{
            &>.--content-body {
                height: max-content !important;
                overflow-y: visible !important;
            }
        }
    }
}

.--cardType01 {
    grid-template-areas:
            "media"
            "content"
            "footer";
    grid-template-rows: auto 1fr auto;
}

.--cardType02 {
    grid-template-areas:
            "media content"
            "footer footer";
    grid-template-columns: 50% 1fr;

    &>.--hero-container {
        border-radius: var(--BORDER-RADIUS) var(--BORDER-RADIUS) 0 0;
        &>.--hero-background{
            border-radius: 0;
        }
    }
}

.--cardType03 {
    overflow: hidden;
    grid-template-rows: 1fr auto;
    grid-template-areas:
            "media"
            "footer";


    &>.--content {
        grid-area: media;
        position: absolute;

        height: 100%;
        width: 100%;
        transform: translateY(calc(100% - var(--LINE-HEIGHT) * 3));

        background: -color('LEVEL-1');
        border-radius: var(--BORDER-RADIUS) var(--BORDER-RADIUS) 0px 0px;

        &>.--content-body {
            opacity: 0;
        }
    }

    &>.--hero-container>.--interactions {
        right:15px;
        top: 15px;
        bottom: auto;
        left: auto;
        z-index: 2;
    }

    &>.--footer{
        z-index: 1;
    }

    &:is(:active, :hover) {   
        .--content {

            //backdrop-filter: saturate(180%) blur(20px);
            background: -color('LEVEL-1', 1);
            transform: translateY(0%);
        }
        .--hero-container>.--interactions {
            transform: translate(-10%, 10%) scale(1.1);
        }
    }
}

.--badge-holder{
    border-radius: inherit !important;
    position: absolute;
    inset: 0;
    margin: 0;
    background: transparent;
}





















.--cardType04 {
    
    background: transparent;
    box-shadow: unset;
    grid-template-areas:
        "media"
        "content"
        "footer";
    grid-template-rows: auto 0 auto;
    transition: transform .25s ease-in-out;

    &>.--content{
        
        opacity: 0;
        z-index: -1;
        place-self: center center;
        width : calc(100% - 20px);
        margin-top: -10px;
        
        background: -color('LEVEL-1');
        border-radius: var(--BORDER-RADIUS) var(--BORDER-RADIUS) 0 0;
        

    }

    &>.--footer{
        width: 100%;
        align-self: start;
        place-self: flex-start center;
        box-shadow: 0px 5px 8px -color('SHADOW', 0.4);

        transition: width .25s ease-in-out;
    }

    &>.--hero-container>.cardInteractions {
        top: 15px;   
        right: 15px;
    }

    &:is(:active, :hover) {

        box-shadow: unset;
        grid-template-rows: auto auto auto;

        &>.--content {
            //backdrop-filter: saturate(180%) blur(20px); 
            animation-direction: normal ;
            animation: card4 1s ease-in-out;
            opacity:1;
            z-index: 1;
        }
        
    
        &>.--hero-container>.cardInteractions {
            top: 15%;
            right: 5%;
        }

        &>.--footer{
            width: calc(100% - 20px);
            box-shadow: 0px 5px 10px -color('SHADOW', 0.8);
        }
    }
    @keyframes card4 {
        0% {

            opacity: 0.0;
            z-index: -1;

        }
        50%{
            z-index: 0;
            transform: translateY(10px);
        }

        100% {
            opacity: 1.0;
            z-index: 1;
            transform: translateY(0px);
        }

    }
}

.--cardType05 {
    grid-template-areas:
        "media content"
        "footer footer";
    grid-template-columns: 60% 1fr;

    &>.--content {
        margin-left: 15px !important;
    }

    &>.--hero-container {
        border-radius: var(--BORDER-RADIUS) var(--BORDER-RADIUS) var(--BORDER-RADIUS) 0;
    }
}





</style>