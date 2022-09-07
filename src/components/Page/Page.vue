<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"

export default {
    name: 'gnkPage',
    extends: gnkComponent,
    data() {
        return {
            childElements: [],
            loaded: false,
            parentPage: null,
            }
    },
    props: {
        title: {
            type: String,
            required: false,
            default: "page",
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
        
    },
    emits: [


    ],
    methods: {
        registerChilds(element){

        },
    },

        

    provide() {
        return {
            uiLevel: this.uiLevel
        }
    },



    mounted() { 
        this.loaded = true;
        },

}
</script>
<template>
    <div :id="componentId" class="grid col-12" :class="[componentName + ' |', componentClassObject , componentGeneralClasses]">
        
            <transition name="next">
                <slot v-if="loaded" name="navbar">

                </slot>
            </transition>

        <slot>

        </slot>
    </div>
</template>
<style lang="scss">





















    .gnkPage{

        background: -color('LEVEL-0');
        height:100%;
        width: 100%;        
        overflow: hidden;
        overflow-y: scroll;



        &> :first-child {
            padding: 2%;
            padding-top:100px;
            padding-bottom:50px;
            height: auto;

        }
    }
</style>

