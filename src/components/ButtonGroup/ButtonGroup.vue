<script>
import mixin from "../../mixin/gnkComponent"
import imageData from "../../utils/imageData"

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
                return ['single', 'multiple', 'default'].includes(value)
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
                    
                    this.selectedItem = e.detail.component
                    this.childButtons = this.childButtons.map(button => {
                        if(button.uid == e.detail.component.uid) button.checked = true 
                        else button.checked = false
                        return button
                    })

                    break;
                case 'multiple':

                    if(e.detail.component.checked) this.selectedItems.push(e.detail.component)
                    else this.selectedItems = this.selectedItems.filter(item => item.uid != e.detail.component.uid)
                    
                    break;
                default:
                    break;
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

    <div class="gnkButtonGroup" :ref="componentId" :id="componentId"  :class="[ componentClassObject , componentGeneralClasses]" >
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
    background: -color('LEVEL-3');
    border-radius: var(--BORDER-RADIOS);
    padding: 8px 16px;

    display: flex;
    flex-direction: row;
    justify-content: center;
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
        width: fit-content;
        height: fit-content;

        &>:first-child:is(.gnk-button):not(&:last-child){
            border-top-left-radius: var(--BORDER-RADIOS);
            border-bottom-left-radius: var(--BORDER-RADIOS);
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;    
        }


        &>.gnk-button:is(.gnk-button + .gnk-button) {
            border-radius: 0;
        }

        &>:last-child:is(.gnk-button):not(&:first-child){
            border-bottom-right-radius: var(--BORDER-RADIOS);
            border-top-right-radius: var(--BORDER-RADIOS);
        }
    }

    .--buttons>.gnk-button{
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

            &>:first-child:is(.gnk-button):not(&:last-child){
                border-top-left-radius: var(--BORDER-RADIOS) !important;
                border-bottom-left-radius: 0 !important;
                border-bottom-right-radius: 0 !important;
                border-top-right-radius:  var(--BORDER-RADIOS) !important;    
            }


            &>.gnk-button:is(.gnk-button + .gnk-button) {
                border-radius: 0 !important;
            }

            &>:last-child:is(.gnk-button):not(&:first-child){
                border-bottom-right-radius: var(--BORDER-RADIOS) !important ;
                border-bottom-left-radius: var(--BORDER-RADIOS)  !important;
            }
        }

        
    }



    &:is(.--draggable){
        .--title::before{

        content: '';
        cursor: move;
        position: absolute;
        top: 10%;
        left: -4px;

        height: 80%;
        width: 5px;
        border-left: 1px;
        border-right: 1px;
        border-top: 0px;
        border-bottom: 0px;
        border-style: solid;
        border-color: -color('TEXT');
        }
    }

}


</style>