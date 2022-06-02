<script>

import mixin from "../ComponentBase/gnkComponent"
import imageData from "../../utils/imageData"

export default {
    name: 'gnkCard',
    mixins: [mixin.gnkComponent],
    
    data() {
        return {
            
        }
    },
    props:{
        headerBackground: {
            type: String,
            default: null,
            /* validator: function(value) {
                return imageData.validate(value)
            } */
        },
        headerBackgroundAlt: {
            type: String,
            default: null,
        },
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
        alternateDarkMode() {
            this.store.alternateColorMode()
        }
    }



}
</script>

<template>

    <div :id="componentId"  :class="[componentName, componentClassObject , componentGeneralClasses]" @click="alternateDarkMode">
        
        <header class="--header col-12 container">
            <div v-if="!!this.$slots.title || !!this.$slots.subtitle" class="--header-title">
                <div v-if="!!this.$slots.title"  class="--title col-12">
                    <slot name="title"></slot>
                </div>
                <div v-if="!!this.$slots.subtitle" class="--subtitle col-12 flex">
                    <slot name="subtitle"></slot>
                </div>
            </div>
            <img loading="lazy" class="col-12" v-if="!!headerBackground" :src="headerBackground" :alt="headerBackgroundAlt">
        </header>

        <div v-if="!!this.$slots.default" class="--content col-12 flex">
            <slot>teste</slot>
        </div>  

        <div v-if="!!this.$slots.expanded" class="--expanded col-12 flex">
                <slot name="expanded"></slot>
        </div>

        <footer v-if="!!this.$slots.footer" class="--footer col-12 container">
            <div class="--footer-content col-12 flex">
                <slot name="footer"></slot>
            </div>
        </footer>

    </div>
    


</template>

<style lang="scss" scoped>

.gnkCard{
    position: relative;
    background: -color('BASE');
    border-radius: var(--BORDER-RADIUS);
    overflow: hidden;
    box-shadow: var(--SHADOW);


    &>*{
        width: 100%;
    }

    .--header{
        display: grid;
        align-items: end;
        overflow: hidden;
        max-height: 250px;
        &>*{
            grid-column: 1 / -1;
            grid-row: 1 / -1;
            z-index: 1;
        }
        &>img{

            transition : all 0.3s ease-in-out;
            width: 100%;
            min-height: 100px;
            max-height: 250px;

            object-fit: cover;
            z-index: 0;
            &:is(:hover, :focus){
                transform: scale(1.1);
                filter: contrast(120%);

            }
        }
    }

    .--content, .--footer,.--expanded, .--header-title{
        height: fit-content;
        width: 100%;
        padding: 8px;
    }

    .--header-title{
        color: -color('TEXT');
        text-shadow: 0px 2px 5px -color('LIGHT');
    }


    .--content,.--expanded{
        overflow-y: auto;
        background-color: -color('LEVEL-1');
    }

    .--footer{
        padding: 2px 8px;
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        height: fit-content;
        background-color: -color('LEVEL-2');
        border-top: 1px solid -color('LEVEL-3');
        z-index: 1;
    }
}



.--open{
    top:0px;
    left: 0px;
    width: 100%;
    height: 100%;
    

    opacity: 1;
    transition: all .3s ease-in-out;
}

</style>