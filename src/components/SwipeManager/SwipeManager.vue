<script>
import gnkComponent from "../ComponentBase/gnkComponent.vue"
import { sleep } from "../../utils/sleep"
import { lockScroll, unlockScroll } from "../../utils/scrollLock"
export default {
    name: 'gnkSwipeManager',
    extends: gnkComponent,
    data() {
        return {
            swipe:{
                direction: '',
                passive: false,
                start : {x: 0, y: 0},
                end : {x: 0, y: 0},
                distance : {x: 0, y: 0},
                time:{
                    start: 0,
                    end: 0,
                    elapsed: 0
                }
            },
            busy: false,
            
        }
    },
    props: {
        threshold: {
            type: Number,
            default: 100
        },
        restraint: {
            type: Number,
            default: 100
        },
        allowedTime: {
            type: Number,
            default: 300
        },
        allowedInterval: {
            type: Number,
            default: 50
        },
        captureDirection: {
            type: String,
            default: 'none',
            validator(type) {
                return ['none','all', 'left', 'right', 'top', 'bottom', 'horizontal', 'vertical'].includes(type)
            },
        },

    },
    computed: {
        componentClassObject() {
            return {


                }
            },
    },
    watch: {
        captureDirection: function (newValue) {
            if (this.disabled !== newValue) {
                this.swipe = {
                    direction: '',
                    passive: false,
                    start: { x: 0, y: 0 },
                    end: { x: 0, y: 0 },
                    distance: { x: 0, y: 0 },
                    time: {
                        start: 0,
                        end: 0,
                        elapsed: 0
                    }
                }
            }
        },
        disabled: function(newValue) {
            if(this.disabled !== newValue ){
                this.swipe ={
                    direction : '',
                    start : {x: 0, y: 0},
                    end : {x: 0, y: 0},
                    distance : {x: 0, y: 0},
                    time:{
                        start: 0,
                        end: 0,
                        elapsed: 0
                    }
                }
            }
        },
    },
    emits: [
        'swiped',
        'swiping',
        'swipedLeft',
        'swipedRight',
        'swipedUp',
        'swipedDown',
        'touchDown',
        'touchUp',
        'touchMove',

    ],
    methods: {
        
        observeSwipe(element, callback = null){

            element.addEventListener('touchstart', (e) => {
                if (this.disabled) return
                if (this.captureDirection == 'none') return

                //CLEAR DATA
                this.swipe = {
                    direction: '',
                    start: { x: 0, y: 0 },
                    end: { x: 0, y: 0 },
                    distance: { x: 0, y: 0 },
                    time: {
                        start: 0,
                        end: 0,
                        elapsed: 0
                    }
                }

                this.swipe.start.x = e.touches[0].clientX
                this.swipe.start.y = e.touches[0].clientY
                this.swipe.time.start = new Date().getTime()
                

                this.$emit('touchDown', ...this.objectToArray(this.swipe))
            }, {passive: false})

            element.addEventListener('touchmove', (e) => {
                if (this.disabled) return
                if (this.captureDirection == 'none') return
                if (this.swipe.passive) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                
                
                this.swipe.end.x = e.touches[0].clientX
                this.swipe.end.y = e.touches[0].clientY
                this.swipe.distance.x = this.swipe.end.x - this.swipe.start.x
                this.swipe.distance.y = this.swipe.end.y - this.swipe.start.y

                
                this.swipe.time.elapsed = (new Date().getTime()) - this.swipe.time.start
                if (Math.abs(this.swipe.distance.x) > Math.abs(this.swipe.distance.y) && this.swipe.distance.x > this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
                    this.swipe.direction = 'right'
                    this.swipe.passive = (this.captureDirection == this.swipe.direction || this.captureDirection == 'horizontal') ? true : false

                } else if (Math.abs(this.swipe.distance.x) > Math.abs(this.swipe.distance.y) && this.swipe.distance.x < -1 * this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
                    this.swipe.direction = 'left'
                    this.swipe.passive = (this.captureDirection == this.swipe.direction || this.captureDirection == 'horizontal') ? true : false

                } else if (Math.abs(this.swipe.distance.y) > Math.abs(this.swipe.distance.x) && this.swipe.distance.y > this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
                    this.swipe.direction = 'down'
                    this.swipe.passive = (this.captureDirection == this.swipe.direction || this.captureDirection == 'vertical') ? true : false

                } else if (Math.abs(this.swipe.distance.y) > Math.abs(this.swipe.distance.x) && this.swipe.distance.y < -1 * this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
                    this.swipe.direction = 'up'
                    this.swipe.passive = (this.captureDirection == this.swipe.direction || this.captureDirection == 'vertical') ? true : false
                }

                this.$emit('touchMove', ...this.objectToArray(this.swipe))
                this.$emit('swiping', ...this.objectToArray(this.swipe))

            }, {passive: false})

            element.addEventListener('touchend', async (e) => {
                if (this.disabled) return
                if (this.captureDirection == 'none') return

                this.swipe.time.end = new Date().getTime()
                this.swipe.time.elapsed = this.swipe.time.end - this.swipe.time.start

                switch (true) {
                    case this.swipe.direction == 'right' && (this.captureDirection == 'right' || this.captureDirection == 'horizontal'):
                        this.$emit('swipedRight', ...this.objectToArray(this.swipe))
                        break;
                    case this.swipe.direction == 'left' && (this.captureDirection == 'left' || this.captureDirection == 'horizontal'):
                        this.$emit('swipedLeft', ...this.objectToArray(this.swipe))
                        break;
                    case this.swipe.direction == 'down' && (this.captureDirection == 'down' || this.captureDirection == 'vertical'):
                        this.$emit('swipedDown', ...this.objectToArray(this.swipe))
                        break;
                    case this.swipe.direction == 'up' && (this.captureDirection == 'up' || this.captureDirection == 'vertical'):
                        this.$emit('swipedUp', ...this.objectToArray(this.swipe))
                        break;
                    default:
                        return
                        break;
                }

                if (this.swipe.direction) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    this.$emit('touchUp', ...this.objectToArray(this.swipe))
                    this.$emit('swiped', ...this.objectToArray(this.swipe))

                    if(callback instanceof Function) callback(this.swipe.direction)
                }

                await sleep(this.allowedInterval);

            }, {passive: true})
        
        },

    },
    mounted() { 
        this.observeSwipe(this.$el);
    },
}
</script>
<template>
    <div :id="componentId" class="p-0 m-0 fill" :class="[componentName, componentClassObject , componentGeneralClasses]">
        <slot>

        </slot>
    </div>
</template>
<style lang="scss">

    .gnkSwipeManager{
        display: flex;
        position : relative;
        width:100%;
        margin:0px;
        padding: 0px;
    }
</style>