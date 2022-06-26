<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import createRipple from "../../utils/ripple"
import imageData from "../../utils/imageData"

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
        },

        headerBackgroundAlt: {
            type: String,
            default: null,
        },

        headerBackgroundHeight: {
            type: Number,
            default: 450,
            validator(value) {
                return (value > 125 && value < 500 && !isNaN(value))
            },
        },

        interactionsPosition: {
            type: String,
            default: 'default',
            validator(type) {
                return ['default', 'topRight', 'topLeft', 'bottomRight', 'bottomLeft', 'hide'].includes(type)
            },
        },

        animateInactive: {
            type: Boolean,
            default: false,
            
        },




        type: {
            type: String,
            default: 'cardType01',
            validator: function(value) {
                return ['cardType01', 'cardType02', 'cardType03', 'cardType04', 'cardType05'].includes(value)
            }
        },
    },

    computed: {
        componentClassObject() {
            return {
                'cardType01': this.type === 'cardType01',
                'cardType02': this.type === 'cardType02',
                'cardType03': this.type === 'cardType03',
                

                //'cardType04': this.type === 'cardType04',
                //'cardType05': this.type === 'cardType05',
                
            }
        },
    },

}
</script>

<template>


    <div @click.stop="onClick($event)" :class="[componentName, componentClassObject , componentGeneralClasses]"
        :id="componentId">
        <div class="--hero-container">
            <div class="--hero-background">
            </div>
            <div v-if="!!this.$slots.interactions" class="--interactions">
                <slot name="interactions"></slot>
            </div>
        </div>
        <div class="--content">
            <div v-if="!!this.$slots.title" class="--content-title">
                <h3 class="text-capitalize">
                    <slot name="title"></slot>
                </h3>
            </div>
            <div v-if="!!this.$slots.default" class="--content-body">
                <slot>teste</slot>
            </div>
        </div>
        <div v-if="!!this.$slots.footer" class="--footer flex">
            <slot name="footer">

            </slot>
        </div>
    </div>


</template>

<style lang="scss">








[class*="cardType"] {
    display: grid;
    width: 100%;
    margin: 10px;
    margin-bottom: 5px;


    transition: all .25s ease-in-out;

    position: relative;

    background: -color('LEVEL-1');
    border-radius: var(--BORDER-RADIUS);

    box-shadow: 0px 5px 8px -color('SHADOW', 0.4);
    border : 1px solid -color('LEVEL-0', 0.8);
    overflow: hidden;
    

    &>.--content {
        grid-area: content;

        transition: all .25s ease;
        padding: 15px;
        padding-top: 5px;
        padding-bottom: 30px;
        margin-bottom: 30px;

        overflow: visible;
        width: 100%;
        height: auto;
        max-height:100vmax;
        

        &>.--content-title {
            transition: all .25s ease-in-out;
            display: block;
            margin-block-start: 10px;
            margin-block-end: 10px;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            font-size: 1.5rem;
            font-weight: bold;
            width: 100%;
        }

        &>.--content-body {
            transition: all .25s ease-in-out; 
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            height:100%;
            overflow-y: scroll;
        }
    }

    &>.--hero-container {
        grid-area: media;

        height: 100%;
        width: 100%;
        min-height: 250px;
        min-width: 200px;

        background: -color('LEVEL-1');

        border-radius: var(--BORDER-RADIUS);
        overflow: hidden;
        position: relative;

        &>.--hero-background {
            transition: all .25s ease;
            position: relative;
            height: 100%;
            width: 100%;
            background: url('https://source.unsplash.com/random/900×700/?experimental') no-repeat;
            background-size: cover;
            background-position: center;
            filter: brightness(90%);
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

    &:is(:active, :hover) {
        transform: translateY(-10px);
        box-shadow: 0px 5px 10px -color('SHADOW', 0.8);

        &>.--content {
            &>.--content-title {
                transition: transform .5s .10s ease-in-out;
                transform: translateY(10px);
            }

            &>.--content-body {
                opacity: 1;
                transition: transform .4s .10s ease-in-out;
                transform: translateY(10px);
            }
        }


        &>.--hero-container>.--hero-background {
            transform: scale(1.1);
            filter: brightness(100%);
        }

        &>.--hero-container>.--interactions {
            transform: translate(0, 0) scale(1.1);
        }
    }
}

.cardType01 {
    grid-template-areas:
            "media"
            "content"
            "footer";
}

.cardType02 {
    grid-template-areas:
            "media content"
            "footer footer";
    grid-template-columns: 60% 1fr;
    &>.--content{
        margin-left: 15px !important;
    }
    &>.--hero-container {
        border-radius: var(--BORDER-RADIUS) var(--BORDER-RADIUS) var(--BORDER-RADIUS) 0;
    }
}

.cardType03 {
    overflow: hidden;
    grid-template-areas:
            "media"
            "footer";


    &>.--content {
        grid-area: media;
        position: absolute;

        height: 100%;
        width: 100%;
        transform: translateY(calc(100% - var(--LINE-HEIGHT) * 3));

        z-index: 1;

        background: -color('LEVEL-1');
        border-radius: var(--BORDER-RADIUS) var(--BORDER-RADIUS) 0px 0px;


        &>.--content-title {
            transform:translateY(-0.5rem)
        }

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
        &>.--content {
            //backdrop-filter: saturate(180%) blur(20px);
            background: -color('LEVEL-1', 1);
            transform: translateY(0%);
        }
        &>.--hero-container>.--interactions {
            transform: translate(-10%, 10%) scale(1.1);
        }
    }
}

.cardType04 {
    
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



.cardType05 {
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