import { ref, reactive } from 'vue'
const Store = reactive({
    //TEMPLATE
    colorMode : ref('light'),
    
    //TEMPLATE
    alternateColorMode(isDark = null) {

        this.colorMode = isDark === null ? this.colorMode === 'light' ? 'dark' : 'light' : isDark

        document.querySelector('body').setAttribute("gnk-theme-colorMode", this.colorMode);
        localStorage.setItem('gnk-theme-colorMode', this.colorMode)

    },













    //SwipeManager
    swipeCapturedBy: null,

})

Store.alternateColorMode(localStorage.getItem('gnk-theme-colorMode'))
export default Store