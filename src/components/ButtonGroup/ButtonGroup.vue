<script>
import mixin from "../ComponentBase/gnkComponent"

export default {
    name: 'gnkButtonGroup',
    mixins: [mixin.gnkComponent],
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

        direction: {
            type: String,
            default: 'horizontal',
            validator(type) {
                return ['horizontal', 'vertical'].includes(type)
            },
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
                '--vertical' : this.direction === 'vertical',
                }
            },
        },
    watch: {
        
        },
    emits: [


        ],
    methods: {
        childValueChange (e) {

            switch (this.toggle) {
                case 'single':

                    this.selectedItems = []
                    this.selectedItem = e.detail.component
                    this.childButtons = this.childButtons.map(button => {
                        if(button.componentId == e.detail.component.componentId) button.checked = true 
                        else button.checked = false
                        return button
                    })


                    break;
                default:
                    if(e.detail.component.checked) this.selectedItems.push(e.detail.component)
                    else this.selectedItems = this.selectedItems.filter(item => item.componentId != e.detail.component.componentId)
                    this.selectedItem = this.selectedItems.slice(-1)
            }

        },

        registerChildToggle(element){
            this.childButtons.push(element)
            element.$el.addEventListener('onchange', this.childValueChange)
        }
    },

        

    provide() {
        return {
            registerChild: this.registerChildToggle
        }
    },



    mounted() { 

        },

}
</script>
<template>

    <div :id="componentId"  :class="[componentName, componentClassObject , componentGeneralClasses]" >
        <div class="--title">
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
    padding: 4px;

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

        &>:first-child:is(.gnkButton):not(&:last-child){
            border-top-left-radius: var(--BORDER-RADIUS);
            border-bottom-left-radius: var(--BORDER-RADIUS);
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;    
        }


        &>.gnkButton:is(.gnkButton + .gnkButton) {
            border-radius: 0;
        }

        &>:last-child:is(.gnkButton):not(&:first-child){
            border-bottom-right-radius: var(--BORDER-RADIUS);
            border-top-right-radius: var(--BORDER-RADIUS);
        }
    }

    .--buttons>.gnkButton{
        margin: 0px;
    }
    
    &.--vertical{
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .--buttons{
            flex-direction: column;
            align-items: center;
            justify-content: center;

            &>:first-child:is(.gnkButton):not(&:last-child){
                border-top-left-radius: var(--BORDER-RADIUS) !important;
                border-bottom-left-radius: 0 !important;
                border-bottom-right-radius: 0 !important;
                border-top-right-radius:  var(--BORDER-RADIUS) !important;    
            }


            &>.gnkButton:is(.gnkButton + .gnkButton) {
                border-radius: 0 !important;
            }

            &>:last-child:is(.gnkButton):not(&:first-child){
                border-bottom-right-radius: var(--BORDER-RADIUS) !important ;
                border-bottom-left-radius: var(--BORDER-RADIUS)  !important;
            }
        }

        
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