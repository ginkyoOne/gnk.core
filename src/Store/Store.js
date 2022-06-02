import { reactive } from 'vue'
const Store = reactive({
    //TEMPLATE
    colorMode: 'light',

    //TEMPLATE
    alternateColorMode(isDark = null) {
        console.log('here')

        this.colorMode = isDark === null ? this.colorMode === 'light' ? 'dark' : 'light' : isDark

        console.log('alternateColorMode', this.colorMode)

        document.querySelector('body').setAttribute("gnk-theme-colorMode", this.colorMode);
        localStorage.setItem('gnk-theme-colorMode', this.colorMode)
    },













    //SwipeManager
    swipeCapturedBy: null,

})

Store.alternateColorMode(localStorage.getItem('gnk-theme-colorMode'))
export default Store