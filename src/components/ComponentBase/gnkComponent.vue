<script>
import gnk from "../../index"
import createRipple from "../../utils/ripple"

export default {
    name: 'gnkComponent',
    data(){
        return {
            store: gnk.Store,
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

        //COMPONENTE CLASSES
        componentName() {
            return this.$options.name + ' |'
        },

        //GENERIC CLASSES
        componentGeneralClasses() {
            let componentProps = {}
            for (let prop in this.$options.props) {
                if (!this.$options.props[prop]?.skip) componentProps['--' + prop] = this[prop]
            }
            componentProps['|'] = true
            return componentProps
        },


    },






    methods: {
        
        hello() {
            console.log('hello from mixin!')
        },

        //GET ELEMENTE SIZE ON SCREEN
        componentElementClientRect() {
            let modalPosition = this?.$el?.getBoundingClientRect()
            return {
                top: (!modalPosition ? 0 : modalPosition.top),
                left: (!modalPosition ? 0 : modalPosition.left),
                width: (!modalPosition ? 0 : modalPosition.width),
                height: (!modalPosition ? 0 : modalPosition.height),
            }
        },

        componentRaiseEvent(eventName, data) {
            let event = new CustomEvent(eventName, { detail: { target: this.$el, component: this, ...data } })
            this.$emit(eventName, event)
            //this.$el.dispatchEvent(event)
        },



        //SHORTHAND FOR CONVERTING OBJECTS PROPERTIES TO ARRAY
        objectToArray(obj) {
            return Object.keys(obj)
                .map(function (key) {
                    return obj[key];
                });
        },

    },


    mounted() {
        if (typeof this.registerChild == 'function'  ) this.registerChild(this)
    },





















    provide() {
        return {
            registerChild: ( typeof this.registerChild == 'function' ? this.registerChild : null)
        }
    },
    inject: {
        registerChild: {
            default: null
        },
    },
}

</script>