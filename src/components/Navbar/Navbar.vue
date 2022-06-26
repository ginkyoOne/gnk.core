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
            blur: {
                type: Boolean,
                default: true,
            },
            hideOnScroll: {
                type: Boolean,
                default: false,
            },
        },

    computed: {
        componentClassObject() {
            return {
                'container': true,
                '--hide-on-scroll': this.hideOnScroll && this.hide,
                '--blur' : this.blur,
            }
        },
    },




    methods: {
            hideOnScrollHandler(e) {
                this.pageScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                window.addEventListener('scroll', (e) =>{
                    if(!this.hideOnScroll) retunr;
                    let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;   
                    
                    let scrollDirection = currentScrollPosition > this.pageScrollPosition ? 'down' : currentScrollPosition < this.pageScrollPosition ? 'up' : 'none';
                    let elementHeight = this.$el.offsetHeight;
                    let elementTop = this.$el.offsetTop;
                    let elementBottom = elementTop + elementHeight;

                    switch (true) {
                        case scrollDirection === 'down' && elementBottom > window.innerHeight:
                                this.hide = true;
                            break;
                        case scrollDirection === 'up':
                                this.hide = false;
                            break;
                        default:
                            break;
                    }


                }
                );
            },
        },

    mounted() {
            





        },

}
</script>
<template>
    <div
    :id="componentId"
    class="grid"
    :class="[componentName, componentClassObject , componentGeneralClasses]">
        <div class="row">
            <div class="--left col-2 flex-centered flex-left">
                <slot name="left"></slot> 
            </div>
            <div class="--title col-block flex-centered">
                <slot name="title"></slot>
            </div>
            <div class="--right col-2 flex-centered flex-right">
                <slot name="right"></slot>
            </div>    
        </div>
    </div>    
</template>
<style lang="scss">

    .gnkNavbar{
        background: -color('BASE');
        box-shadow: var(--SHADOW);
        
        margin:0px;
        padding: 0px;
        
        width: 100%;
        min-height: 44px;

        &.--title{
            text-align: center;
        }

        &.--hide-on-scroll{
            transition: transform 0.3s ease-in-out;
            transform: translateY(-100%);
        }

        &.--blur{
                -webkit-backdrop-filter: blur(25px);
                backdrop-filter: blur(25px);
                background: -color('LEVEL-1',0.5) !important;
                -webkit-box-shadow: var(--SHADOW);
                box-shadow: var(--SHADOW);
                
        }
    }

</style>