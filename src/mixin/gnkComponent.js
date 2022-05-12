
const gnkComponent = {
    mounted() {
    console.info('gnkComponent mounted')
    },
    methods: {
        hello() {
        console.log('hello from mixin!')
                }
    },
    props: {
        primary: {
            type: Boolean,
            required: false,
            default: false,
        },
        info: {
            type: Boolean,
            required: false,
            default: false,
        },
        success: {
            type: Boolean,
            required: false,
            default: false,
        },
        warning: {
            type: Boolean,
            required: false,
            default: false,
        },
        danger: {
            type: Boolean,
            required: false,
            default: false,
        },
        bug: {
            type: Boolean,
            required: false,
            default: false,
        },
        dark: {
            type: Boolean,
            required: false,
            default: false,
        },
        light: {
            type: Boolean,
            required: false,
            default: false,
        },



        disabled: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
    computed: {
        componentGeneralClasses() {
            return {
                
                '--info': this.info,
                '--primary': this.primary,
                '--success': this.success,
                '--warning': this.warning,
                '--danger': this.danger,
                '--bug': this.bug,

                '--dark': this.dark,
                '--light': this.light,

                '--circle': this.circular,
                '--square': this.square,

                '--block': this.block,

                '--disabled': this.disabled,
            }
        } 

    },
}

export default{
    gnkComponent
}
