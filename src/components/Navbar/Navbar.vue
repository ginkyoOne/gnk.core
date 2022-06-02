<script>
import mixin from "../ComponentBase/gnkComponent"


export default {
    name: 'gnkNavbar',
    mixins: [mixin.gnkComponent],
    emits: ['onsubmit','onchange', 'onclick','ondblclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onwheel', 'onfocus', 'onblur','onkeydown','onkeypress','onkeyup'],


    data() {
        return {
        }
        },

    props: {

        },

    computed: {
        componentClassObject() {
            return {
                'container': true,
                'flex': true,
            }
        },
    },




    methods: {

        },

    mounted() {
            document.body.style.paddingTop = (this.$el.offsetHeight - 3) + 'px' 
        },

}
</script>
<template>
    <div
    :id="componentId"
    :class="[componentName, componentClassObject , componentGeneralClasses]">
        <div class="col-2 flex-centered flex-left">
            <slot name="left"></slot> 
        </div>
        <div class="col-8 flex-centered">
            <slot name="title"></slot>
        </div>
        <div class="col-2 flex-centered flex-right">
            <slot name="right"></slot>
        </div>    
    </div>    
</template>
<style lang="scss">

    .gnkNavbar{
        background: -color('BASE');
        position: fixed;
        inset: 0px;
        bottom: auto;
        z-index: 2;
        box-shadow: var(--SHADOW);
        min-height: 44px;
    }

</style>