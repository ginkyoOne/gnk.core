<script>
import sleep from '../../utils/sleep'
import mixin from "../ComponentBase/gnkComponent"

export default {
    name: 'gnkApp',
    mixins: [mixin.gnkComponent],
    data() {
        return {
            childElements: [],

            transitionName: "",
            transitioning: false,
        }
    },

    props: {

        
    },
    computed: {
        componentClassObject() {
            return {
                    
                }
            },

        hasRouter() {
            return !!this.$router
        },
    },
    watch: {
        async $route(to, from) {
            this.transitionName = (to.path == from.path ? null : !(to.name == 'Home') ? "next" : "prev");
        }
    },
    emits: [


    ],
    methods: {
        registerChilds(element){
            element.$options.name == 'gnkPage' ? this.childElements.push(element) : null
        },
    },

        

    provide() {
        return {
            registerChild: this.registerChilds
        }
    },



    mounted() { 

        },

}

</script>
<template>
    <gnkSwipeManager @swipedRight="this?.$router?.go(-1)" @swipedLeft="this?.$router?.go(+1)">
        
        <div class="--content" v-if="hasRouter">
            <router-view v-slot="{ Component }">
                <transition :name="transitionName || 'fade'">
                    
                    <component :is="Component" />

                </transition>
            </router-view>
        </div>

        <div class="--content" v-else>
            <div class="container">
                <slot>

                </slot>
            </div>
        </div>
    </gnkSwipeManager>
</template>
<style lang="scss" scoped>
    .gnkSwipeManager{
        overflow: hidden;
        height: 100% !important;
    }

    .--content {
        height: 100%;
        display: grid;
        grid-template: "main";
        flex: 1;
        position: relative;
        overflow: hidden;
        &> * {
            grid-area: main; /* Transition: make sections overlap on same cell */
            flex: 1 1 auto;
            position: relative;
            height: 100%; /* To be fixed */
        }

        & > :first-child {
            z-index: 1; /* Prevent flickering on first frame when transition classes not added yet */
        }
    }



    /* Transitions */



    //TOP PAGE
    .next-enter-from {
        transform: translateX(+100%);
    }

    .next-enter-active {
        transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: 1;
    }

    .next-enter-to {
        transform: translateX(0);
        
    }

    .prev-leave-from {
        transform: translateX(0%);
    }

    .prev-leave-active {
        transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: 1;
    }

    .prev-leave-to {
        transform: translateX(100%);
    }






    //BOTTOM PAGE
    .next-leave-from {
        transform: translateX(0);
        filter:brightness(1);
    }

    .next-leave-active {
        transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: 0;
        filter:brightness(0.8);
    }

    .next-leave-to {
        transform: translateX(-25%);
        filter:brightness(0.6);
    }

    .prev-enter-from {
        transform: translateX(-25%);
        filter:brightness(0.6);
    }

    .prev-enter-active {
        transition: all 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
        z-index: 0;
        filter:brightness(0.8);
    }

    .prev-enter-to {
        transform: translateX(0%);
        filter:brightness(1);
    }

    






    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }


</style>