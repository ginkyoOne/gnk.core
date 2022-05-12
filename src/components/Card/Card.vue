<template>
    <div class="container gnk-card">
        <div class="columns --title" v-if="!!this.$slots.title">
            <div class="col-12 gap-5  flex">
                <slot name="title" >

                </slot>
            </div>
        </div>
        <div class="columns --content" v-if="!!this.$slots.default">
            <div class="col-12 gap-5 flex" >
                <slot>

                </slot>
            </div>
        </div>
    
        <div class="columns --expandable" v-if="!!this.$slots.expandable">
            <div class="col-12 flex">
                <slot name="expandable" >

                </slot>
            </div>
        </div>

        <div class="columns --footer" :class="footerClass" v-if="!!this.$slots.footer">
            <div class="col-12 flex">
                <slot name="footer">

                </slot>
            </div>
        </div>

    </div>


</template>
<script>
import gnk from "../../index"
import mixin from "../../mixin/gnkComponent"

export default {
    name: 'gnkCard',
    mixins: [mixin.gnkComponent],
    

    data() {
        return {
            isVisible: false,
            }
        },
    props: {



        },
    computed: {
        },
    emits: {
            // no validation
        click: null,
            // with validation
        submit: payload => {
            if (payload.email && payload.password) {
                return true
                } else {
                console.warn(`Invalid submit event payload!`)
                return false
                }
            }
        },
    methods: {
        show() {
            this.isVisible = true
            },
        hide() {
            this.isVisible = false
            },
        },
    mounted() { 
        },


}
</script>

<style lang="scss">
@import "../../scss/base";

.gnk-card {
    border-radius: var(--BORDER-RADIOS);

    background-color: -color('GRAY-1', 1);
    width: 100%;
    overflow: hidden;

    .--title {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        text-align: left;
        
        padding: 8px 12px 0px 12px;
        &::after{
            content: '';
            display: block;
            position: absolute;

            bottom: 0px;
            left: 5px;

            width: calc(100% - 10px);
            height: 1px;
            
            background-color: -color('GRAY-3', 1);
        }

        .--image{
            aspect-ratio: 16/9;
        }
    }

    .--content{
        display: flex;
        flex-direction: columns;
        flex-wrap: wrap;
        width: 100%;
        padding: 8px 12px;
    }

    .--footer{

        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
        text-align: left;
        padding: 8px 12px 8px 12px;
        background-color: -color('BASE', 1);

        &::after{
            content: '';
            display: block;
            position: absolute;

            top: 0px;
            left: 2.5px;

            width: calc(100% - 5px);
            height: 1px;
            
            background-color: -color('GRAY-2', 1);
        }



    }


}




</style>