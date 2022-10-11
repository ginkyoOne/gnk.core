<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import { setCssVariable, getCssVariable } from "../../utils/cssUtils"

export default {
    name: 'gnkNavbar',
    extends: gnkComponent,
    emits: ['onsubmit','onchange', 'onclick','ondblclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onwheel', 'onfocus', 'onblur','onkeydown','onkeypress','onkeyup'],
    
    data() {
        return {
            pageScrollPosition: 0,
            hide: false,
        }
    },

    props: {

        OnScrollThreshold: {
            type: Number,
            default: 25,
            skip: true,
        },

        hideOnScroll: {
            type: Boolean,
            default: false,
            skip: true,
        },

        solidOnScroll: {
            type: Boolean,
            default: true,
            skip: true,
        },

        size:{
            type: String,      
            required: false,
            default: '',
            validator(type) {
                return ['xl', 'l', ''].includes(type.toString())
            },
        },


    },

    computed: {
        componentClassObject() {
            return {
                '--hide-on-scroll': (this.hideOnScroll && this.hide),
                '--solid-on-scroll': (this.solidOnScroll && this.hide),
            }
        },
    },

    watch: {
        async $route(to, from) {
            this.hide = !(this.store.routing.pushRouteToHistory(to, from) != 0) 
            if (!this.hide) {
                setCssVariable(this.$el, '--title-large-translate', `0px`)
                setCssVariable(this.$el, '--title-large-opacity', 1)
            }
        }
    },


    methods: {    
        handleScroll(event) {
            (event.target.scrollTop > this.OnScrollThreshold) ? this.hide = true : this.hide = false;
            if (this.size != '') {

                let targetTranslate = (event.target.scrollTop > 0 ? (event.target.scrollTop < 50 ? event.target.scrollTop : 50) : 0)
                let targetopacity = (1 / targetTranslate)
                

                setCssVariable(this.$el, '--title-large-translate', `${(targetTranslate * 1.3) * -1}px`)
                setCssVariable(this.$el, '--title-large-opacity', (targetopacity < 0.05 ? 0 : targetopacity))
                
            }
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll, true)
    },

}
</script>
<template>
    <div
    :id="componentId"
    :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
    class="grid flex-centered">

        <div class="--content | row flex-centered p-l-10">

                <div class="--left | col-3 flex-centered flex-left">
                    <slot name="left"></slot>
                </div>

                <div class="--title | col-6 flex-centered">
                    <slot></slot>
                </div>
            
                <div class="--right | col-3 flex-centered flex-right">
                    <slot name="right"></slot>
                </div>    
        </div>

        <div v-if="!!this.$slots.subnavbar && this.size != ''" class="--subnavbar | row col-12 flex-center">
            <slot name="subnavbar">
            </slot>
        </div>    

        <div v-if="!!this.$slots.default && this.size != '' " class="--title-large | row col-12 flex-left p-10">
            <h1 v-if="this.size == 'xl'">
                <slot>
                </slot>
            </h1>
            <h2 v-else>
                <slot>
                </slot>
            </h2>
        </div> 
    </div> 
</template>


<style lang="scss">

    .gnkNavbar{
        --title-large-translate : 0px;
        --title-large-opacity : 1;

        transition: all 0.3s ease-in-out;
        display: flex  !important;

        margin:0px;
        padding: 0px;
        
        width: 100%;
        min-height: 44px;
        
        transform: translateY(0%);
        
        isolation: isolate;


        &>.--content, &>.--subnavbar{
            transition: all 0.3s ease-in-out;
            align-items: center;
            background: -color('LEVEL-2', 0);
        }
        &>.--subnavbar{
            z-index: 1;
        }

        &>.--content>.--title{
            text-align: center;

            transition: all 0.3s ease-in-out;
        }

        &>.--title-large{
            transition: opacity 0.1s ease-in-out;
            text-transform:capitalize;
            padding: 10px 20px 10px 50px;
            opacity: var(--title-large-opacity);
            transform: translateY(var(--title-large-translate));
            z-index: -1;
        }

        &:is(.--size-xl, .--size-l){
            &>.--content>.--title{
                opacity: calc(1 - var(--title-large-opacity));
            }
        }

        &:is(.--hide-on-scroll){
            transform: translateY(-100%);
        }

        &:is(.--solid-on-scroll){
            &>.--content, &>.--subnavbar{
                background: -color('LEVEL-2', 1);
                box-shadow: var(--SHADOW);
            }
        }


    }

</style>