<script>
import gnk from "../../index"
import createRipple from "../../utils/ripple"
import { setColors, hexToHsl } from '../../utils/colorsUtils'
import { setCssVariable, getCssVariable  } from "../../utils/cssUtils"


export default {
    name: 'gnkComponent',
    emits: ['update:modelValue','update:checked', 'mouseleave', 'mouseover', 'keydown', 'keypress', 'keyup', 'click', 'onClick'],
    
    data(){
        return {
            isolatedCheck: false,
        }
    },
    
    props: {

        type: {
            type: String,
            required: false,
            skip: true,
            default: 'toggle',
        },

        checked: {
            default: undefined,
            require: false,
            skip: true,
            /* validator(type) {
                return ((typeof type == "boolean") || (typeof type == "string") || ( Array.isArray(type)|| ( typeof type == (type)))
            }, */
        },

        value: {
            require: false,
            skip: true,
            default: undefined,
        },




        busy: {
            type: Boolean,
            required: false,
            default: false,
        },
        loading: {
            type: Boolean,
            required: false,
            default: false,
        },



        square: {
            type: Boolean,
            required: false,
            default: false,
        },
        gradient:{
            type: Boolean,
            required: false,
            default: false,
        },
        shadow:{
            type: Boolean,
            required: false,
            default: false,
        },
        border:{
            type: Boolean,
            required: false,
            default: false,
        },


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

        level: {
            type: String,
            required: false,
            default: null,
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
            default: undefined,
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
            //itenerate all props in component
            for (let prop in this.$options.props) {
                //check for skip to be false
                if (!this.$options.props[prop]?.skip) {

                    //prop is a string an not skipable, multiple options
                    
                    //CHECK IF PROP IS EMPTY
                    if ( !(this[prop] === false || this[prop] === '' ||  this[prop] === undefined || this[prop] === null)) {
                        if (this.$options.props[prop]?.type === String) {
                            componentProps['--' + prop + '-' + this[prop]] = true

                        } else {
                            //standard prop
                            componentProps['--' + prop] = this[prop]
                        }
                    }
                } 
            }

            componentProps['--checked']=this.isCheched
            componentProps['--default']=!this.hasStyle
            componentProps['darkmode']=this.store.theme.isDarkMode
            componentProps['|'] = true
            return componentProps
        },

        //HAS STYLE
        hasStyle() {
            return (this.primary==true||this.secondary==true||this.info==true||this.success==true||this.warning==true||this.danger==true||this.bug==true||this.dark==true||this.light==true||this.hexColor!=null||this.level!=null)
        },

        isCheched() {
            if (this?.type == 'toggle') {

                let isolatedValue = (this.value === null || this.value === undefined ? this.componentId : this.value)

                switch (true) {
                    case typeof this.checked == "boolean":
                        this.isolatedCheck = this.checked;
                        break;

                    case Array.isArray(this.checked):
                        this.isolatedCheck = this.checked.includes(isolatedValue)
                        break;

                    case this.checked === undefined || this.checked === null:
                        this.isolatedCheck = this.isolatedCheck
                        break

                    default:
                        this.isolatedCheck = ((JSON.stringify(this.checked) === JSON.stringify(isolatedValue)))
                        break;
                    }
            }
            return this.isolatedCheck
            
        }

    },






    methods: {
        //GET ELEMENTE SIZE ON SCREEN
        componentElementClientRect(el=this?.$el) {
            let modalPosition = el?.getBoundingClientRect()
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

                this.$emit(eventName, data) 
                if (typeof this.$parent.registerChildEvents == 'function') this.$parent.registerChildEvents(this, eventName, data)
                

            } catch(ex) {   
                console.error(ex)
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


        //TOGGLE CHECK STATE
        onChecked(eventName, event) {

            if(this?.href != '') window.open(this.href,(this.black ? "_blank" : "_self"));
            if (this?.to !== '') this.$router.push(this.to)  

                
            if (this?.type == 'toggle') {

                
                this.isolatedCheck = !this.isolatedCheck
                let isolatedValue = (this.value === null || this.value === undefined ? this.componentId : this.value)

                
                switch (true) {
                    case Array.isArray(this.checked):

                        if (this.checked.includes(isolatedValue)) {
                            this.checked.splice(this.checked.indexOf(isolatedValue), 1)
                        }else{
                            this.checked.push(isolatedValue)
                            this.checked.sort()
                        }
                        
                        this.componentRaiseEvent('update:checked', this.checked);
                        break;

                    case typeof this.checked == "boolean":
                        this.componentRaiseEvent('update:checked', this.isolatedCheck);
                        break;

                    case this.checked === undefined || this.checked === null:
                            this.componentRaiseEvent('update:checked', this.isolatedCheck);
                            break

                    default:
                            this.componentRaiseEvent('update:checked', ((JSON.stringify(this.checked) === JSON.stringify(isolatedValue)) ? '' : isolatedValue));
                        
                }

            } else {
                // raise event
                if(this?.type != 'button' && this?.type != 'toggle') this.$refs.internalButton.click()
                this.componentRaiseEvent(eventName, event )

            }

            // if thers an click event show the ripple  
            if(!!event) createRipple.createRipple(event)

        },

    },


    watch:{
        hexColor(newValue) {
            this.setBaseColor(newValue)
        },
    },

    mounted() {
        if (typeof this.registerChild == 'function') this.registerChild(this)
        
        //set hexacolor to
        if (typeof this.hexColor != "undefined") this.setBaseColor(this?.hexColor)

        if (typeof this.updateContentPadding != "undefined") this.updateContentPadding()
        if (typeof this.updateChildContentPadding != "undefined") this.updateChildContentPadding()

        
    },





















    provide() {
        return {
            registerChild: (typeof this?.registerChild == 'function' ? this?.registerChild : null),
        }
    },

    inject: {
        store: {
            default: this.store
        },


        registerChild: {
            default: (typeof registerChild == 'function' && this.$options.provide()?.registerChild === null ? registerChild : null),
        }
    }
}

</script>