<script>
import { root } from "postcss"
import gnkComponent from "../ComponentBase/gnkComponent.vue"

export default {
    name: 'gnkButtonGroup',
    extends: gnkComponent,
    data() {
        return {
            childButtons:[],
            selectedItem: null,
        }
    },
    props: {
        toggle: {
            type: String,
            default: 'default',
            validator: function(value) {
                return ['single', 'default'].includes(value)
            }
        },

        draggable: {
            type: Boolean,
            default: false,
        },


        pill: {
            type: Boolean,
            required: false,
            default: false,
        },

        square: {
            type: Boolean,
            required: false,
            default: false,
        },



        border:{
            type: Boolean,
            required: false,
            default: false,
        },

        gradient:{
            type: Boolean,
            required: false,
            default: false,
        },

        transparent:{
            type: Boolean,
            required: false,
            default: false,
        },

        clear: {
            type: Boolean,
            required: false,
            default: false,
        },

        shadow:{
            type: Boolean,
            required: false,
            default: false,
        },
    },

    computed: {
        selectedItems() {
            return this.childButtons.filter(button => button.checked)
        },
        componentClassObject() {
            return {
                '--draggable' : this.draggable,
                }
        },
    },
        
    watch: {


    },

    emits: [


    ],

    methods: {
        childChanged(event) {

            if (event.newValue == false) return
            
            this.childButtons.forEach(button => {
                if (button.componentId === event.componentId) {
                    this.selectedItem = button
                    return
                }

                button.checked = false
            })

        },

        registerChild(element) {
            if (element?.$options?.name === 'gnkButton') this.childButtons.push(element)
        }
    },



    mounted() { 

    },

}
</script>

<template>

    <div
    	:class="[componentName + ' |', componentClassObject , componentGeneralClasses]"
    	:id="componentId"
        @onchange="childChanged()"
        >
        <div class="--title" v-if="!!this.$slots.title">
            <slot name="title">

            </slot>
        </div>
        <div class="--buttons" >
            <slot>

            </slot>
        </div>
    </div>

</template>

<style lang="scss">


.gnkButtonGroup{
    
    position:relative;
    display: flex;
    flex-direction: row;
    
    width: fit-content;
    height: fit-content;

    justify-content: flex-start;
    align-items: center;


    background-color: -color('LEVEL-2');
    color: -color('BASE-TEXT');

    border: var(--BORDER-SIZE) solid -color('LEVEL-2',1,0,0,1.5); 
    border-radius: var(--BORDER-RADIUS);
    
    font-size: .8rem;
    line-height: 1rem;

    margin-right:5px;
    
    &::after{
        transition: all .2s ease-in-out;
        content: '';
        position: absolute;
        inset: 0;
        border-radius: inherit;
        z-index: -1;
        background-color:inherit;
        transform:scale(0);
    }

    .--title{
        
        
        display: flex;
        position:relative;
        flex-direction: row;    

        justify-content: center;
        align-items: center;
        
        padding: 0px 12px ;
        

        text-align: left;
        
        font-size: inherit;
        line-height: inherit;
        color: inherit;
    }

    .--buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: fit-content;
        height: fit-content;


        &>[class*="gnkButton"]:not(.--square){
            margin: 0;

            &:is(.gnkButton + .gnkButton):not(:last-child, :first-child){
                border-left: 1px solid -color('BASE', 1, 0, 0, 2);
                border-right: 1px solid -color('BASE', 1, 0, 0, -5);
                border-radius: 0;
            }
            &:is(:first-child):not(:last-child){
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                border-right: 1px solid -color('BASE', 1, 0, 0, -5);
            }
            &:is(:last-child):not(:first-child){
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                border-left: 1px solid -color('BASE', 1, 0, 0, 2);
            }
        }

    }

    &:is(.--draggable){
        padding-left: 15px;
        &::before{
            

            position: absolute;

            content: '';
            cursor: move;

            top: 25%;
            left: 5px;

            height: 50%;
            width: 2px;

            border-left : 2px dotted -color('TEXT',.5);
            border-right : 2px dotted -color('TEXT',.5);
        
        }
    }


    //FORMAT 
    &.--pill{
        border-radius: 100vmax;
    }

    &.--square {
        border-radius: 0px;
    }

    &.--block {
        width: 100% !important;
        display: block !important;
    }


    //STYLES

    &.--border{
        background-color: transparent;
    }

    &.--transparent{
        
        &:is(.--info,.--primary, .--success,.--warning,.--danger,.--bug){
            color: -color('BASE');
        }

        background-color: transparent;
        border: none;

        &:is(:active, :checked,:hover, :focus ){
            &::after{
                
                background-color: -color('BASE', .5,0,0,5);
                transform:scale(1);

                &:not(.--info,.--primary, .--success,.--warning,.--danger,.--bug, .--dark, .--light){
                    background-color: -color('LEVEL-2', .5,0,0,1.5);
                }
            }
        }
    }

    &.--clear{

        &:is(.--info,.--primary, .--success,.--warning,.--danger,.--bug){
            color: -color('BASE');
        }
        
        & [class*="gnkButton"]{
            border:unset !important;
        }
        
        background-color: transparent;
        border: none;
    }

    &.--shadow{
        box-shadow: 0px 5px 1rem -color('BASE', 0.4);
    }


}


</style>