<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import { setCssVariable, getCssVariable } from "../../utils/cssUtils"

export default {
    name: 'gnkApp',
    extends: gnkComponent,
    data() {
        return {
            childElement: null,
            transitionName: "",
            routeHistoryStartingPoint: '',
            routeHistory: [],
            observer: null,
        }
    },

    props: {

    },

    computed: {
        componentClassObject() {
            return {
                '--level-0': true,
                '--hide-footer': !!this.childElement?.$slots.footer,
                '--hide-header': !!this.childElement?.$slots.header
            }
        },

        hasRouter() {
            return !!this.$router
        },
    },
    
    watch: {
        childElement(newValue, oldValue) {
            this.updateChildContentPadding()
        },

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

    updated() { 
        this.updateChildContentPadding()
    },

    methods: {
        registerChild(element){
            if (element?.$options?.name === 'gnkPage') {
                this.childElement = element
            } 
        },

        updateChildContentPadding() {
            if (!!this.childElement?.$slots.footer) return

            let { height: headerHeight } = this.componentElementClientRect(this.$refs.header)
            let { height: footerHeight } = this.componentElementClientRect(this.$refs.footer)
            this.childElement.parentTopPadding = headerHeight
            this.childElement.parentBottomPadding = footerHeight
            
        }

    },

    provide() {
        return {
            uiLevel: 0
        }
    },


}

</script>


<template>
    <div :disabled="disabled" 
    :class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
    :id="componentId"

    @click.prevent="this.componentRaiseEvent('click',$event)"
    @mouseleave.prevent="this.componentRaiseEvent('mouseleave',$event)"
    @mouseover.prevent="this.componentRaiseEvent('mouseover',$event)"
    @keydown.prevent="this.componentRaiseEvent('keydown',$event)"
    @keypress.prevent="this.componentRaiseEvent('keypress', $event)"
    @keyup.prevent="this.componentRaiseEvent('keyup',$event)">

        <div class="--base">
            <div v-if="!!this.$slots.slideSidebar"  class="--slide-sidebar | ">
                <slot name="slideSidebar">
                    overflow-vertical
                </slot>
            </div>
        
            <div ref="header" class="--header | grid">
                <div class="row">
                    <div class="col-12">
                        <transition :name="'fade'">
                            <gnk-Progressbar v-show="this.store.state.loading" loading square class="full-width" />
                        </transition>
                    </div>
                </div>

                <div class="--header-content">
                    <slot name="header">

                    </slot>
                </div>
            </div>
            
            
            <div ref="content" class="--content | grid col-12 row">

                <div v-if="!!this.$slots.sidebar" class="--content-sidebar | lg-hide-smaller col-4 overflow-vertical">
                    <slot name="sidebar">
                        overflow-vertical
                    </slot>
                </div>


                <gnk-swipeManager
                    @swipedLeft="this?.$router?.go(+1)"
                    @swipedRight="this?.$router?.go(-1)"
                    class="col-block grid"
                    captureDirection="horizontal">

                    <div class="--content-main | col-12">
                        <slot>

                            <router-view v-if="hasRouter" v-slot="{ Component }">
                                <transition :name="transitionName || 'fade'">
                                    <component :is="Component" />
                                </transition>
                            </router-view>

                        </slot>
                    </div>


                </gnk-swipeManager>

            </div>
            
            <div ref="footer" class="--footer">
                <slot name="footer">

                </slot>
            </div>

        </div>
    </div>
</template>


<style lang="scss">



.gnkApp{
    --border-color: #{-color('BASE',1,8,0,8)};
    --background-color:#{-color('BASE')};
    --color:#{-color('MAIN-TEXT')};


    transition: all .25s ease-in-out;

    background: -color('BASE');
    height:100%;
    width: 100%;       
    overflow: hidden;


    &>.--base{
        
        display: grid;
        height:100%;
        width: 100%;       
        overflow: hidden;
    }

    &>.--base>.--slide-sidebar{
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        pointer-events: none;
    }

    &>.--base>.--header, &>.--base>.--footer, &>.--base>.--content{
        display: flex;
        grid-row: 1;
        grid-column: 1;
    }

    &>.--base>.--header, &>.--base>.--footer{
        position: fixed;
        
        height: fit-content;

        z-index: 1;
    }

    &>.--base>.--header{
        transition: all .25s ease-in-out;
        top:0;
        left: 0;
        width: 100%;

        & .gnkProgressbar{
            position:fixed;
            top:0;
            left:0;
            width: 100%;
            margin: 0!important;
            
            z-index: 100000;
        }

        &>.--header-content{
            transition: all .25s ease-in-out;
            transform: translateY(0);

            display: flex;
            height: fit-content;
            width: 100%;

        }
    }

    &>.--base>.--footer{
        transition: all .25s ease-in-out;
        transform: translateY(0);

        width:calc(100% - 5px);

        bottom: 0;
        left: 0;
    }

    &>.--base>.--content{
        position: relative;
        
        padding: 0;
        margin: 0;

        height: 100%;
        width: 100%;

        overflow: hidden;
    }

    
    &>.--base>.--content>.--sidebar{
        height: 100%;
        width: fit-content;
        border-right: 1px solid -color('LEVE-2',.5);
        box-shadow: var(--SHADOW);
    }

    &>.--base>.--content>.gnkSwipeManager>.--content-main {
        height: 100% !important;
        width: 100%;
        
        display: grid;
        grid-template: "main";

        flex: 1;

        isolation: isolate;
        overflow: hidden !important;

        position: relative;

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


    &:is(.--hide-header){
        &>.--base>.--header>.--header-content{
            transform: translateY(-100%);
        }
    }
    &:is(.--hide-footer){
        &>.--base>.--footer{
            transform: translateY(100%);
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