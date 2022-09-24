<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"

export default {
    name: 'gnkApp',
    extends: gnkComponent,
    data() {
        return {
            childElements: [],
            transitionName: "",
            routeHistoryStartingPoint: '',
            routeHistory: [],
            observer: null,
        }
    },

    props: {
        loading: {
            type: Boolean,
            default: false,
        },
        busy: {
            type: Boolean,
            default: false,
        },
        showHeader: {
            type: Boolean,
            default: true,
        },
        showFooter: {
            type: Boolean,
            default: true,
        },
        showSidebar: {
            type: Boolean,
            default: true,
        },
        showSidebarToggle: {
            type: Boolean,
            default: true,
        },


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
            if (this.routeHistory.length > 35) {
                this.routeHistory = this.routeHistory.slice(15)
            }

            //CHECK IF THERS A STARTING POINT
            if (!this.routeHistoryStartingPoint) {

                this.routeHistory.push(to.name)
                this.routeHistoryStartingPoint = to.name
            }

            //CHECK IF ITS THE STARTING POINT
            if (to.name == this.routeHistoryStartingPoint) {
                this.routeHistory = []
                this.transitionName = 'prev'  
                return
            } 

            if (this.routeHistory.at(-1) == to.name && this.routeHistory.length > 1) {
                this.routeHistory.pop()
                this.transitionName = 'prev'
                return
            }

            if (to.name == from.name) return

            this.routeHistory.push(from.name)    
            this.transitionName = 'next';
        }
    },


    methods: {
        registerChilds(element){
            if(element?.$options?.name == 'gnkPage') this.childElements.push(element)
        },

    },

    provide() {
        return {
            uiLevel: 0
        }
    },


}

</script>
<template>
    <div
        :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
        :id="componentId"
        class="fill">

        <div v-if="!!this.$slots.slideSidebar"  class="--slideSidebar | ">
            <slot name="slideSidebar">
                overflow-vertical
            </slot>
        </div>

        <div class="--header | grid">
            <div class="row">
                <div class="col-12">
                    
                    <gnk-Progressbar v-show="loading" loading square class="full-width" />

                </div>
            </div>
            <div class="row">
                <div class="col-12" v-if="showHeader">

                    <gnkNavbar >
                        <template #left>
                            <gnk-buttonGroup v-if="showSidebarToggle" clear>
                                <gnk-button size="xl" clear>
                                    <span class="material-symbols-rounded">
                                        menu
                                    </span>
                                </gnk-button>
                            </gnk-buttonGroup>
                        </template>


                        <template #title>
                            <h4>{{$route?.meta.title}}</h4>
                        </template>


                        <template #right>
                            <gnk-buttonGroup clear>
                                <gnk-button size="xl" clear>
                                    <span class="material-symbols-rounded">
                                        search
                                    </span>
                                </gnk-button>
                            </gnk-buttonGroup>
                        </template>

                    </gnkNavbar>


                </div>
            </div>
        </div>


        <div class=" --body | fill grid">
            <div class="row fill">

                <div v-if="!!this.$slots.sidebar"  class="--sidebar | lg-hide-smaller col-4 overflow-vertical">
                    <slot name="sidebar">
                        overflow-vertical
                    </slot>
                </div>


                <gnkSwipeManager
                    @swipedLeft="this?.$router?.go(+1)"
                    @swipedRight="this?.$router?.go(-1)"
                    class="col-block grid"
                    captureDirection="horizontal">

                    <div class="--gnkApp-content | col-12">
                        <slot>

                            <router-view v-if="hasRouter" v-slot="{ Component }">
                                <transition :name="transitionName || 'fade'">
                                    <component :is="Component" />
                                </transition>
                            </router-view>

                        </slot>
                    </div>


                </gnkSwipeManager>

            </div>
        </div>





    </div>
</template>
<style lang="scss">



.gnkApp{
    position: relative;
    height: 100%;

    &>.--slideSidebar{
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
    }
    
    &>.--header{
        position:absolute;
        top:0px;
        left:0px;
        z-index: 99;
        //background: -color('LEVEL-2');

        & .gnkProgressbar{
            margin: 0!important;
        }
    }

    &>.--body{
        position: relative;
        width: 100%;
        height: 100%!important;
        overflow: hidden;

        .--sidebar{
            height: 100% !important;
            border-right: 1px solid -color('BASE',1,0,0,1.5);
            box-shadow: var(--SHADOW);

        }


        .--gnkApp-content {
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