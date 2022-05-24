import gnk from "../index"
const gnkComponent = {
    inject: {
        registerChild: {
            default: null
        },
    },
    data(){
        return {
            store: gnk.Configs,
        }
    },
    methods: {

        hello() {
            console.log('hello from mixin!')
        },



        //GET ELEMENTE SIZE ON SCREEN
        componentElementClientRect() {
            let modalPosition = this.$el.getBoundingClientRect()
            return {
                top: modalPosition.top,
                left: modalPosition.left,
                width: modalPosition.width,
                height: modalPosition.height,
            }
        },

        //SHORTHAND FOR CONVERTING OBJECTS PROPERTIES TO ARRAY
        objectToArray(obj) {
            return Object.keys(obj)
                .map(function (key) {
                    return obj[key];
                });
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


        circular: {
            type: Boolean,
            required: false,
            default: false,
        },
        square: {
            type: Boolean,
            required: false,
            default: false,
        },
        block: {
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

        //COMPONENTE ID
        componentId() {
            return `${this.$options.name}_${([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16))}`
        },

        //GENERIC CLASSES
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
        },


    },

    mounted() {
        (typeof this.registerChild === 'function' && this.type === 'toggle') ? this.registerChild(this) : null
    },

}

export default{
    gnkComponent
}
