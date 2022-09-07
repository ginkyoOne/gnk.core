<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"


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

        hideOnScroll: {
            type: Boolean,
            default: false,
            skip: true,
        },

        OnScrollThreshold: {
            type: Number,
            default: 50,
            skip: true,
        },

        showTitleOnScroll: {
            type: Boolean,
            default: false,
            
        },

        solidOnScroll: {
            type: Boolean,
            default: true,
            skip: true,
        },

    },

    computed: {
        componentClassObject() {
            return {
                '--hide-on-scroll': (this.hideOnScroll && this.hide),
                '--show-title': this.showTitleOnScroll,
                '--solid-on-scroll': (this.solidOnScroll && this.hide),
            }
        },
    },




    methods: {    
        handleScroll(event) {
            (event.target.scrollTop > this.OnScrollThreshold) ? this.hide = true : this.hide = false;
        }
    },

    mounted() {
            
            window.addEventListener('scroll', this.handleScroll, true)

        },

}
</script>
<template>
    <div v-show="!hide"

    :id="componentId"
    :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
    class="grid flex-centered">

        <div class="--content | row flex-centered">

                <div class="--left | col-3 flex-centered flex-left">
                    <slot name="left"></slot>
                </div>


                <div class="col-6">
                    <div class="--title |  flex-centered">
                        <slot name="title"></slot>
                    </div>
                </div>

                <div class="--right | col-3 flex-centered flex-right">
                    <slot name="right"></slot>
                </div>    
        </div>    
    </div> 
</template>


<style lang="scss">

    .gnkNavbar{
        transition: all 0.3s ease-in-out;

        display: flex  !important;

        background: -color('BASE', 0);
        //box-shadow: var(--SHADOW);
        
        margin:0px;
        padding: 0px;
        
        width: 100%;
        min-height: 44px;
        
        transform: translateY(0%);
        


        &>.--content{
            align-items: center;
        }

        &>.--content>.--title{
            position: absolute;
            left:50%;
            transform:translateX(-50%);
            text-align: center;
        }

        &.--hide-on-scroll{
            transform: translateY(-100%);
        }

        &.--solid-on-scroll{
            background: -color('BASE');
            box-shadow: var(--SHADOW);
        }
    }

</style>