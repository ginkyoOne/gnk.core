<<<<<<< Updated upstream:src/mixin/gnkComponent.js
import gnk from "../index"
const gnkComponent = {
    inject: {
        registerChild: {
            default: null
        },
    },
=======
<script>
import gnk from "../../index"
import createRipple from "../../utils/ripple"

export default {
    name: 'gnkComponent',
    emits: ['update:modelValue', 'mouseleave', 'mouseover', 'keydown', 'keypress', 'keyup', 'click'],
    
>>>>>>> Stashed changes:src/components/ComponentBase/gnkComponent.vue
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

<<<<<<< Updated upstream:src/mixin/gnkComponent.js
=======
        //COMPONENTE CLASSES
        componentName() {
            return this.$options.name 
        },

>>>>>>> Stashed changes:src/components/ComponentBase/gnkComponent.vue
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

<<<<<<< Updated upstream:src/mixin/gnkComponent.js
                '--block': this.block,

                '--disabled': this.disabled,
            }
        },


    },

    mounted() {
        (typeof this.registerChild === 'function' && this.type === 'toggle') ? this.registerChild(this) : null
    },

=======
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
            let event = new CustomEvent(eventName, { detail: { target: this.$el, component: this, ...data } })
            this.$emit(eventName, event)
            //this.$el.dispatchEvent(event)
        },


        //CSS HELPERS
        setCssVariable(element,propertyName, value) {
            if (typeof element !== 'undefined') {
                element.style.setProperty(propertyName, value)
            }
        },

        //HEX COLOR TO HSLA
        hexToHsla(hex) {

            //check if hex starts with #, if not add #
            hex = (hex?.charAt(0) == "#") ? hex : '#' + hex

            //Check if hex is valid
            if (/^#[0-9A-F]{6}$/i.test(hex) === false) return null

            // Convert hex to RGB first
            let r = 0, g = 0, b = 0;
            if (hex.length == 4) {
                r = "0x" + hex[1] + hex[1];
                g = "0x" + hex[2] + hex[2];
                b = "0x" + hex[3] + hex[3];
            } else if (hex.length == 7) {
                r = "0x" + hex[1] + hex[2];
                g = "0x" + hex[3] + hex[4];
                b = "0x" + hex[5] + hex[6];
            }

            // Then to HSL
            r /= 255;
            g /= 255;
            b /= 255;
            let cmin = Math.min(r,g,b),
                cmax = Math.max(r,g,b),
                delta = cmax - cmin,
                h = 0,
                s = 0,
                l = 0;

            if (delta == 0)
                h = 0;
            else if (cmax == r)
                h = ((g - b) / delta) % 6;
            else if (cmax == g)
                h = (b - r) / delta + 2;
            else
                h = (r - g) / delta + 4;

            h = Math.round(h * 60);

            if (h < 0) h += 360;

            l = (cmax + cmin) / 2;
            s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
            s = +(s * 100).toFixed(1);
            l = +(l * 100).toFixed(1);

            return { 'H': h, 'S': s + '%', 'L': l + '%' };
        },

        //REPLACE BASE COLOR
        setBaseColor(color) {

            let result = this.hexToHsla(color)
            if(!result) return

            let { H, S, L } = result
            
            this.setCssVariable(this.$el,'--COLOR-BASE-H', H)
            this.setCssVariable(this.$el,'--COLOR-BASE-S', S)
            this.setCssVariable(this.$el,'--COLOR-BASE-L', L)
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
    inject: {
        
    },
>>>>>>> Stashed changes:src/components/ComponentBase/gnkComponent.vue
}

export default{
    gnkComponent
}
