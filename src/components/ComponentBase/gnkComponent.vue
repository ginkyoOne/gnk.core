<script>
import gnk from "../../index"
import createRipple from "../../utils/ripple"
import { setColors, hexToHsl } from '../../utils/colorsUtils'
import { setCssVariable } from "../../utils/cssUtils"

export default {
    name: 'gnkComponent',
    emits: ['update:modelValue', 'mouseleave', 'mouseover', 'keydown', 'keypress', 'keyup', 'click', 'onClick'],
    
    data(){
        return {
        
        }
    },
    
    props: {
        primary: {
            type: Boolean,
            required: false,
            default: false,
        },
        secondary: {
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


        
        hexColor:{
            type: String,
            required: false,
            default: null,
            skip: true,
        },
    },

    computed: {
        //COMPONENTE ID
        componentId() {
            return `${this.$options.name}_${([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16))}`
        },

        //COMPONENTE CLASSES
        componentName() {
            return this.$options.name 
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

        //HAS STYLE
        hasStyle() {
            return (this.primary==true||this.secondary==true||this.info==true||this.success==true||this.warning==true||this.danger==true||this.bug==true||this.dark==true||this.light==true||this.hexColor!=null)
        }

    },






    methods: {
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

        //RAISE COMPOENT EVENT
        componentRaiseEvent(eventName, data) {
            try {
                let event = new CustomEvent(eventName, { detail: { target: this.$el, component: this, ...data } })
                this.$emit(eventName, event)    
            } catch {   
            }
        },

        //REPLACE BASE COLOR
        setBaseColor(color) {

            let result = hexToHsl(color)
            if(!result) return

            let { H, S, L } = result
            
            setCssVariable(this.$el,'--COLOR-BASE-H', H)
            setCssVariable(this.$el,'--COLOR-BASE-S', S)
            setCssVariable(this.$el,'--COLOR-BASE-L', L)
        },


        //SHORTHAND FOR CONVERTING OBJECTS PROPERTIES TO ARRAY
        objectToArray(obj) {
            return Object.keys(obj)
                .map(function (key) {
                    return obj[key];
                });
        },

    },


    watch:{
        hexColor(newValue) {
            this.setBaseColor(newValue)
        },
    },

    mounted() {
        if (typeof this.registerChild == 'function') this.registerChild(this)

        this.setBaseColor(this?.hexColor)
    },





















    provide() {
        return {

            registerChild: (typeof this.registerChild == 'function' ? this.registerChild : null),
            uiLevel: this.uiLevel + 1,

        }
    },
    inject: ['store'],
}

</script>