<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import { setCssVariable, getCssVariable } from "../../utils/cssUtils"

export default {
    name: 'gnkPage',
    extends: gnkComponent,
    data() {
        return {
            childElements: [],
            loaded: false,
            parentPage: null,
            parentTopPadding: 0,
            parentBottomPadding: 0,

        }
    },
    props: {

    },
    watch: {
        parentTopPadding() {
            this.updateContentPadding()  
        },
        parentBottomPadding() {
            this.updateContentPadding()
        }
    },

    updated() { 
        this.updateContentPadding()
    },

    computed: {
        componentClassObject() {
            return {
                '--level-0': true,
            }
        },
    },

    methods: {
        updateContentPadding() {

            let { height: headerHeight } = this.componentElementClientRect(this.$refs.header)
            let { height: footerHeight } = this.componentElementClientRect(this.$refs.footer)
            
            setCssVariable(this.$refs.content, '--padding-top', `${(this.parentTopPadding > 0 ? this.parentTopPadding : headerHeight)}px`)
            setCssVariable(this.$refs.content, '--padding-bottom', `${this.parentBottomPadding > 0 ? this.parentBottomPadding : footerHeight}px`)
        }
    },

    mounted() { 
        this.updateContentPadding()
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
        
            <div ref="header" class="--header">
                <slot name="header">

                </slot>
            </div>
            
            
            <div ref="content" class="--content | g-10">
                <slot>

                </slot>
            </div>
            
            <div ref="footer" class="--footer">
                <slot name="footer">

                </slot>
            </div>

        </div>
        <gnk-loading :hidden="!this.busy" primary :target="'#' + componentId + '> .--base'" />
    </div>
</template>
<style lang="scss">

.gnkPage{

    --border-color: #{-color('BASE',1,8,0,8)};
    --background-color:#{-color('BASE')};
    --color:#{-color('MAIN-TEXT')};

    --padding-top: 0px;
    --padding-bottom: 0px;


    transition: all .25s ease-in-out;

    background: -color('BASE');
    height:100% !important;
    width: 100%;       
    overflow: hidden;
    overflow-y: scroll;

    &>.--base{
        display: grid;
        width: 100%;
        height: fit-content;
    }

    &>.--base>.--header, &>.--base>.--footer, &>.--base>.--content{
        display: flex;
        grid-row: 1;
        grid-column: 1;
    }

    &>.--base>.--header, &>.--base>.--footer{
        position: fixed;
        
        width:calc(100% - 5px);
        height: fit-content;

        z-index: 1;
    }

    &>.--base>.--header{
        top:0;
        left: 0;
    }

    &>.--base>.--footer{
        bottom: 0;
        left: 0;
    }

    &>.--base>.--content{
        padding: 0;
        margin: 0;

        padding-top: var(--padding-top);
        padding-bottom: var(--padding-bottom);
        height: fit-content;
        width: 100%;
    }


    


}
</style>


