<script>
import sleep from '../../utils/sleep'
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
        }
    },

    props: {
        loading: {
            type: Boolean,
            default: true,
        },
        busy: {
            type: Boolean,
            default: false,
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
        console.log(this.store)

            
        },

}

</script>
<template>
    <div :id="componentId" class="fill" :class="[componentName, componentClassObject , componentGeneralClasses]">

        <div class="--header grid">
            <div class="row">
                <div class="col-12">
                    <gnk-progress v-show="false" gradient loading square class="full-width">
                    </gnk-progress>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <gnkNavbar>
                        <template #left>
                            <gnkButton transparent @click="$router.go(-1)">
                                <span class="material-symbols-rounded">
                                    arrow_back_ios
                                </span> Back
                            </gnkButton>

                        </template>
                        <template #title>
                            <h4>{{$route?.meta.title}}</h4>
                        </template>
                        <!--                         <template #right>
                            <gnkSwitch lable="night" :state="store.colorMode == 'light'"
                                @onChanged="store.alternateColorMode()" />
                        </template> -->
                    </gnkNavbar>

                </div>
            </div>
        </div>


        <div class=" --body fill grid">
            <div class="row fill">
                <div class="--sidebar lg-hide sm-hide xs-hide col-4 overflow-vertical">
                    <slot name="sidebar">
                        overflow-vertical
                    </slot>
                </div>

                <gnkSwipeManager class="col-block grid" captureDirection="horizontal" @swipedRight="this?.$router?.go(-1)"
                    @swipedLeft="this?.$router?.go(+1)">


                    <div class="--gnkApp-content col-12">
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

    
    &>.--header{
        position:absolute;
        top:0px;
        left:0px;
        z-index: 99;
    }

    &>.--body{
        position: relative;
        width: 100%;
        height: 100%!important;
        overflow: hidden;

        &>.--sidebar{
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