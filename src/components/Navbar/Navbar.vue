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
            },
        },

    computed: {
        componentClassObject() {
            return {
                '--hide-on-scroll': this.hideOnScroll && this.hide,
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
    :class="[componentName, componentClassObject , componentGeneralClasses]"
    class="grid flex-centered">

        <div class="--content | row flex-centered">
            <div class="col-3 flex-centered flex-left">
                <gnk-buttonGroup clear>
                    <gnk-button clear>
                            <span class="material-symbols-rounded">
                                menu
                            </span>
                    </gnk-button>

                    <slot name="left">
                    
                    </slot> 
                </gnk-buttonGroup>
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
        background: -color('BASE');
        box-shadow: var(--SHADOW);
        
        margin:0px;
        padding: 0px;
        
        width: 100%;
        min-height: 44px;
        
        


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
            transition: transform 0.3s ease-in-out;
            transform: translateY(-100%);
        }
    }

</style>