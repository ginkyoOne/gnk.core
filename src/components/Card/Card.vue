<script>
import gnk from "../../index"
import mixin from "../../mixin/gnkComponent"
import imageData from "../../utils/imageData"

export default {
    name: 'gnkCard',
    mixins: [mixin.gnkComponent],
    

    data() {
        return {
            uid: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>(c ^(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)),
            mediaSrc: null,
            mediaAlt: null,
            mediaHeight: null,
            mediaWidth: null,
            mediaDirection: null,
            expanded: false,

            modalPosition:null,
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


        },
    computed: {
            componentClassObject(){
                return {

                }
            },
            modalPositionObject(){
                return {
                '--top' : this.modalPosition['top'],
                '--left' : this.modalPosition['left'],
                '--width' : this.modalPosition['width'],
                '--height' : this.modalPosition['height'],
                }
            },
        },
    
    emits: ['open', 'close', 'click'],

    methods: {
        onClick(event) {
            console.log(event)
            this.$emit('click', event)
        },
        
        open(){
            if(!this.expanded && !!this.$slots.expanded){
                this.expanded = true
                this.$emit('open', this.uid)
            }   
        },
        close(){
            this.expanded = false;
            this.$emit('close', this.uid)
        },



        getModalPosition(){
            let modalPosition = this.$refs.cardConteiner.getBoundingClientRect()
            this.modalPosition = {
                top: modalPosition.top + 'px',
                left: modalPosition.left + 'px',
                width: modalPosition.width + 'px',
                height: modalPosition.height + 'px',
            }
        },

        async getMediaInfo(){
            try{
                let imageMeta = await imageData.getImageMeta(this.media)
                this.mediaSrc = imageMeta.src
                this.mediaAlt = ''
                this.mediaHeight = imageMeta.height
                this.mediaWidth = imageMeta.width
                this.mediaCenter = ((this.mediaWidth > this.mediaHeight) ? ((this.mediaHeight < 300 ) ? '100% auto' :  'auto 100%' ) : 'auto 100%')
            
            }catch(e){
                console.log(e)
            }
        },


        onBeforeEnter(el) {
            console.log('onBeforeEnter')
            
            if(this.expanded){
                let modalPosition = this.$refs.cardConteiner.getBoundingClientRect()
                this.modalPosition = {
                    top: modalPosition.top + 'px',
                    left: modalPosition.left + 'px',
                    width: modalPosition.width + 'px',
                    height: modalPosition.height + 'px',
                }
            }
        },

        onAfterEnter(el) {
            console.log('onAfterEnter')

            if(this.expanded){
                this.modalPosition= {
                    top: '0px',
                    left: '0px',
                    width: '100%',
                    height: '100%',
                }
            }
        },

        onBeforeLeave(el) {
            console.log('onBeforeLeave')

            if(!this.expanded){
                let modalPosition = this.$refs.cardConteiner.getBoundingClientRect()
                this.modalPosition = {
                    top: modalPosition.top + 'px',
                    left: modalPosition.left + 'px',
                    width: modalPosition.width + 'px',
                    height: modalPosition.height + 'px',
                }
                //console.log(this.modalPosition)
            }
        },

        onAfterLeave(el) {   
            
        },



    },



    async mounted() { 
        //GET ELEMENT POSITION
        this.getModalPosition()
        
        //GET MEDIA DATA    
        this.getMediaInfo()
    },
}
</script>

<template>


    <div @click.stop="open" ref="cardConteiner" class="gnk-card container" :class="[componentGeneralClasses]">
        
        <div class=" --card-container">
            
            <div class=" --card-header">
                <div v-if="!!this.media" :style="{ backgroundImage: 'url(../../assets/placeholder-1024x512.png)', backgroundSize: 'cover' }">
                    <div class=" --media col-12 " :style="{ backgroundImage: 'url('  + mediaSrc +  ')', backgroundSize: 'cover' }">            
                    </div>
                </div>
                <div class="--card-title col-12 pad-lr-15 flex"  v-if="!!this.$slots.title">
                    <h4>
                        <slot name="title"> 
                        </slot>
                    </h4>
                </div>
            
            </div>
            <div class="row --card-body" v-if="!!this.$slots.default">
                <div class="--card-content col-12  pad-10 pad-t-5 flex">
                    <slot>

                    </slot>
                </div>
            </div>
            <div class="row"  v-if="!!this.$slots.footer">

                <div class="columns">
                    <div class="--card-footer col-12 flex position-centered pad-1">
                        <slot name="footer">    
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <transition
    @before-enter="onBeforeEnter"
    @after-enter="onAfterEnter"
    @before-leave="onBeforeLeave"
    @after-leave="onAfterLeave"
    enter-active-class="modal_open" 
    leave-active-class="modal_close">
        
        <div ref="cardConteinerFull" v-if="expanded" class="gnk-card --card-expanded container" :style="modalPositionObject" :class="[componentGeneralClasses]">
            
            <div class="row --card-container">
                
                <div class="row --card-header">

                    <gnkButton v-if="expanded" disableRipple="true" data-animation-offset="10" circular light class="--close-expanded-card fadeIn" @click.stop="close">
                            <b>x</b>
                    </gnkButton>

                    <div v-if="!!this.mediaHeight" class="row --media" :style="{ backgroundImage: 'url('  + mediaSrc +  ')', backgroundSize: 'cover' }">                        
                    </div>
                    
                    <div class="--card-title col-12 pad-lr-15 flex"  v-if="!!this.$slots.title">
                        <h4>
                            <slot name="title"> 
                            </slot>
                        </h4>
                    </div>
                
                </div>
                <div class="row --card-body" >
                    <div v-if="!!this.$slots.default" class="--card-content col-12  pad-10 pad-t-5">
                        <slot>
                        </slot>
                    </div>
                    <div class="--card-content-expanded col-12  pad-10 pad-t-5 flex">
                        <slot name="expanded">


                        </slot>
                    </div>
                </div>
                <div class="row"  v-if="!!this.$slots.footer">

                    <div class="columns">
                        <div class="--card-footer col-12 flex position-centered pad-1">
                            <slot name="footer">

                                
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>

</template>

<style lang="scss">
@import "../../scss/base"; 

.gnk-card{
    transition:all 1s ease-in-out !important;
    position: relative;

    border-radius: var(--BORDER-RADIOS);
    overflow-y: auto;
    max-height: 100% !important;

    &.--card-expanded{

        transition: all 1s ease-in-out;
        position: absolute ;
        z-index: 9999;

        box-sizing: border-box;
        overflow:hidden;

        top:var(--top);
        left:var(--left);
        height:var(--height);
        width:var(--width);

    }

    .--card-container{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        overflow-y:auto;
    }

    .--card-header{
        width:100% !important;
        .--close-expanded-card{
            position: absolute;
            top: 15px;
            right:15px;
        }
        
        .--media{
            position: relative;
            height: 150px;
            width: 100% !important;

        }

        .--card-title{
            border-radius: var(--BORDER-RADIOS)  var(--BORDER-RADIOS) 0 0 ;
            background: -color('BASE'); 

            position: relative;
            padding: 20px 15px;
            width: 100%;
            margin-top: -10px;
        }
    }
    
    .--card-body{
        display:flex;
        flex-direction: column;

        background: -color('BASE'); 
        padding: 5px;
        height:100%;
        overflow-y: auto;

        .--card-content{
            border-radius: var(--BORDER-RADIOS);
            background-color: -color('GRAY-1');
        }
        .--card-content-expanded{
            border-radius: var(--BORDER-RADIOS);
            background-color: -color('GRAY-1');
            height:100%;
        }
    }

    .--card-footer{

        background: -color('BASE'); 
        border-radius: 0 0 var(--BORDER-RADIOS) var(--BORDER-RADIOS);
    }
}


@keyframes modal_open {
    from {
        opacity: 0;
        top:var(--top);
        left:var(--left);
        height:var(--height);
        width:var(--width);
    }
    to {
        opacity: 1;
        top:0px;
        left:0px;
        height:100%;
        width:100%;
    }
}
.modal_open {
    pointer-events: none;
    animation-fill-mode: both;
    animation-name: modal_open;  
    animation-duration: 0.3s;
}

@keyframes modal_close {
    from {
        opacity: 1;
        top:0px;
        left:0px;
        height:100%;
        width:100%;
    }
    to {
        top:var(--top);
        left:var(--left);
        height:var(--height);
        width:var(--width);
        opacity: 1;
        z-index: -1;
    }
}
.modal_close {
    pointer-events: none;
    animation-fill-mode: both;
    animation-name: modal_close;
    animation-duration: 0.2s;
}




@keyframes fadeIn {
    from {
        pointer-events: none;
        opacity: 0;
    }
    to {
        pointer-events: auto;
        opacity: 1;
    }
}
.fadeIn {
    animation-delay: calc(0.5s * attr(data-animation-offset number 1));
    animation-fill-mode: both;
    animation-name: fadeIn;
    animation-duration: 0.3s;
}

@keyframes fadeOut {
    from {
        pointer-events: none;
        opacity: 1;
    }
    to {
        pointer-events: none;
        opacity: 0;
    }
}
.fadeOut {
    animation-delay: calc(0.5s * attr(data-animation-offset number 1));
    animation-fill-mode: both;
    animation-name: fadeOut;
    animation-duration: 0.3s;
}



</style>