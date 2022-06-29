<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"

export default {
    name: 'gnkButtonGroup',
    extends: gnkComponent,
    data() {
        return {
            childButtons:[],
            selectedItems: [],
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

        
        },
    computed: {
        componentClassObject() {
            return {
                '--draggable' : this.draggable,
                }
            },
        },
    watch: {
            childButtons() {
                console.log('childButtons', this.childButtons)
            },
        },
    emits: [

        ],
    methods: {
        childValueChange (e) {
 
        },

        registerChildToggle(element){
            this.childButtons.push(element)
            element.$el.addEventListener('onchange', this.childValueChange)
        }
    },



    mounted() { 

        },

}
</script>
<template>

    <div :id="componentId" :class="[componentName, componentClassObject , componentGeneralClasses]">
        <div class="--title" v-if="!!this.$slots.title">
            <h4>
                <slot name="title">

                </slot>
            </h4>
        </div>
        <div class="--buttons">
            <slot>

            </slot>
        </div>
    </div>

</template>
<style lang="scss">






    


.gnkButtonGroup{
    background: -color('LEVEL-2');
    border-radius: var(--BORDER-RADIUS);

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    height: fit-content;

    position:relative;

    border-color: -color('TEXT');
    
    .--title{
        color: -color('TEXT');
        padding: 0px 12px;
        display: flex;
        flex-direction: row;    
        justify-content: center;
        align-items: center;
        text-align: left;
        position:relative;
        border-color: -color('TEXT');
    }

    .--buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: fit-content;
        height: fit-content;


        &>:first-child:is(.gnkButton):not(&:last-child, .--square){
            border-top-left-radius: var(--BORDER-RADIUS);
            border-bottom-left-radius: var(--BORDER-RADIUS);
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;  
            border-right: 1px solid -color('BASE', 1, 0, 0, -10);
        }


        &>.gnkButton:is(.gnkButton + .gnkButton) {
            border-radius: 0;
            border-right: 1px solid -color('BASE', 1, 0, 0, -10);
            border-left: 1px solid -color('BASE', 1, 0, 0, 2);
        }

        &>:last-child:is(.gnkButton):not(&:first-child, .--square){
            border-bottom-right-radius: var(--BORDER-RADIUS);
            border-top-right-radius: var(--BORDER-RADIUS);
            border-left: 1px solid -color('BASE', 1, 0, 0, 2);
        }
    }

    .--buttons>.gnkButton{
        margin: 0px;
    }

    &:is(.--draggable){
        .--title::before{

        content: '';
        cursor: move;
        position: absolute;
        top: 25%;
        left: 0px;

        height: 50%;
        width: 2px;
        border-left: 1px;
        border-right: 1px;
        border-top: 0px;
        border-bottom: 0px;
        border-style: solid;
        border-color: -color('LEVEL-3');
        }
    }

}


</style>