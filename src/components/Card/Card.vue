<template>
    <div class="container gnk-card" :class="[componentClassObject , componentGeneralClasses]">
        <div class="columns" v-if="mediaHeight != 0 " >
            <div class="col-12 gap-5 flex" :class="{'--has-media' : mediaHeight != 0 }" 
                                            :style="{ backgroundImage: 'url('  + mediaSrc +  ')', backgroundSize: 'cover' }">
                <div class="--stats" v-if="!!stats">
                    {{ stats }}
                </div>
                <div class="--media-lable" v-if="!!mediaLable">
                    {{ mediaLable }}
                </div>
            </div>
        </div>
        <div class="columns --subtitle" v-if="!!this.$slots.subtitle" >
            <div class="col-12 gap-5 flex">
                <slot name="subtitle">
                    
                </slot>
            </div>
        </div>
        <div class="columns --title" v-if="!!this.$slots.title" >
            <div class="col-12 gap-5 flex">
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
import imageData from "../../utils/imageData"

export default {
    name: 'gnkCard',
    mixins: [mixin.gnkComponent],
    

    data() {
        return {
            mediaSrc: "",
            mediaAlt: "",
            mediaHeight: "",
            mediaWidth: "",
            mediaDirection: "",

            }
        },

    props: {
        media: {
            type: String,
            default: '',
        },
        mediaLable: {
            type: String,
            default: '',
        },
        stats: {
            type: Number,
            default: null,
        },



        },
    computed: {
            
            

        },
    
    emits: ['click'],

    methods: {
        

        },
    async mounted() { 
        
                let imageMeta = await imageData.getImageMeta(this.media)
                this.mediaSrc = imageMeta.src
                this.mediaAlt = ''
                this.mediaHeight = imageMeta.height
                this.mediaWidth = imageMeta.width
                this.mediaDirection = ((this.mediaWidth > this.mediaHeight) ? ((this.mediaHeight < 300 ) ? '100% auto' :  'auto 100%' ) : 'auto 100%')
    
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
        width: 100%;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        text-align: left;

        padding: 0px 20px 10px 25px !important;

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
    }

    .--subtitle {
        width: 100%;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        text-align: left;

        color: -color('BASE', 1);

        padding: 10px 20px 5px 20px !important;
    }

    .--has-media{
        position: relative;
        height:300px !important;
        background-position: center;
        background-repeat: no-repeat;
        aspect-ratio: 16/9;
        width: 100%;

    }

    .--stats{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        background: -color('BASE');
        border-radius: 50%;
        
        position: absolute;
        padding: 5px;
        height:40px;
        width : 40px;
        top: 20px;
        right: 40px ;
        
        
    }

    .--media-lable{
        background: -color('BASE');
        border-radius: 0px var(--BORDER-RADIOS) 0px 0px;
        position: absolute;
        height: fit-content;
        padding: 5px 20px;
        bottom: 0px;
        left: 0px;
    }

    .--content{
        display: flex;
        flex-direction: columns;
        flex-wrap: wrap;
        width: 100%;
        padding: 20px !important;
    }

    .--footer{

        position: relative;
        padding: 1px 20px 1px 20px !important;
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