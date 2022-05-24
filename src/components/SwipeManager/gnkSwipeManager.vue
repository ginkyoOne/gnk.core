<script>
import mixin from "../../mixin/gnkComponent"
import imageData from "../../utils/imageData"

export default {
    name: 'gnkSwipeManager',
    mixins: [mixin.gnkComponent],
    data() {
        return {
            swipe:{
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

        
    },
    computed: {
        componentClassObject() {
            return {


                }
            },
    },
    watch: {
        
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
                this.swipe.direction = ''
                this.swipe.start.x = e.touches[0].clientX
                this.swipe.start.y = e.touches[0].clientY
                this.swipe.time.start = new Date().getTime()
                //e.preventDefault()

                this.$emit('touchDown', ...this.objectToArray(this.swipe))

            }, {passive: true})

            element.addEventListener('touchmove', (e) => {
                this.swipe.end.x = e.touches[0].clientX
                this.swipe.end.y = e.touches[0].clientY
                this.swipe.distance.x = this.swipe.end.x - this.swipe.start.x
                this.swipe.distance.y = this.swipe.end.y - this.swipe.start.y
                //e.preventDefault()

                this.swipe.time.end = new Date().getTime()
                this.swipe.time.elapsed = this.swipe.time.end - this.swipe.time.start

                if (Math.abs(this.swipe.distance.x) > Math.abs(this.swipe.distance.y) && this.swipe.distance.x > this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
                    this.swipe.direction = 'right'
                    this.$emit('swipedRight', ...this.objectToArray(this.swipe))

                } else if (Math.abs(this.swipe.distance.x) > Math.abs(this.swipe.distance.y) && this.swipe.distance.x < -1*this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
                    this.swipe.direction = 'left'
                    this.$emit('swipedLeft', ...this.objectToArray(this.swipe))

                } else if (Math.abs(this.swipe.distance.y) > Math.abs(this.swipe.distance.x) && this.swipe.distance.y > this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
                    this.swipe.direction = 'down'
                    this.$emit('swipedDown', ...this.objectToArray(this.swipe))

                } else if (Math.abs(this.swipe.distance.y) > Math.abs(this.swipe.distance.x) && this.swipe.distance.y < -1*this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
                    this.swipe.direction = 'up'
                    this.$emit('swipedUp', ...this.objectToArray(this.swipe))
                }


                this.$emit('touchMove', ...this.objectToArray(this.swipe))
                this.$emit('swiping', ...this.objectToArray(this.swipe))
        
            }, {passive: true})

            element.addEventListener('touchend', (e) => {
                this.swipe.time.end = new Date().getTime()
                this.swipe.time.elapsed = this.swipe.time.end - this.swipe.time.start

                if (Math.abs(this.swipe.distance.x) > Math.abs(this.swipe.distance.y) && this.swipe.distance.x > this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
                    this.swipe.direction = 'right'
                    this.$emit('swipedRight', ...this.objectToArray(this.swipe))

                } else if (Math.abs(this.swipe.distance.x) > Math.abs(this.swipe.distance.y) && this.swipe.distance.x < -1*this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
                    this.swipe.direction = 'left'
                    this.$emit('swipedLeft', ...this.objectToArray(this.swipe))

                } else if (Math.abs(this.swipe.distance.y) > Math.abs(this.swipe.distance.x) && this.swipe.distance.y > this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
                    this.swipe.direction = 'down'
                    this.$emit('swipedDown', ...this.objectToArray(this.swipe))

                } else if (Math.abs(this.swipe.distance.y) > Math.abs(this.swipe.distance.x) && this.swipe.distance.y < -1*this.threshold && this.swipe.time.elapsed <= this.allowedTime) {
                    this.swipe.direction = 'up'
                    this.$emit('swipedUp', ...this.objectToArray(this.swipe))
                }
                if (this.swipe.direction) {
                    this.$emit('touchUp', ...this.objectToArray(this.swipe))
                    this.$emit('swiped', ...this.objectToArray(this.swipe))

                    if(!callback) callback(this.swipe.direction)
                }

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
                //e.preventDefault()


            }, {passive: true})

            
        },

    },
    mounted() { 
        this.observeSwipe(this.$el);
    },
}
</script>
<template>
    <div class="gnkSwipeManager"  :id="componentId" :class="[componentClassObject , componentGeneralClasses]">
        <slot>

        </slot>
    </div>
</template>
<style lang="scss">
    


</style>