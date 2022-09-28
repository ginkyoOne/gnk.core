import { setColors } from '../utils/colorsUtils'
import { computed, watch, reactive, readonly } from 'vue'

const state = reactive({
    //IS BUSY
    busy: false,
    loading: false,

    //SwipeManager
    swipeCapturedBy: null,
})



const theme = reactive({
    
    colorMode: '',
    isDarkMode: computed(() => (theme.colorMode == 'dark')),
    
    colorPrimary: '#2773dd',
    colorInfo: '#2651cc',
    colorSuccess: '#43cb75',
    colorWarning: '#ffbb00',
    colorDanger: '#ee2b48',
    colorBug: '#ff2e4e',
    
})


watch(
    () => theme.colorMode,
    (newValue = null, prevValue = null) => {
        
        if (newValue === prevValue) return
        
        console.log(newValue)

        document.querySelector('body').setAttribute("gnk-theme-colorMode", newValue);
        localStorage.setItem('gnk-theme-colorMode', newValue)
    }
)

watch(
    
    () => theme.colorPrimary,
    (newValue = null, prevValue = null) => {
        console.log(newValue)
        
        if (newValue === prevValue) return
        setColors({ PRIMARY: newValue })
    }
)
watch(
    
    () => theme.colorInfo,
    (newValue = null, prevValue = null) => {
        console.log(newValue)
        
        if (newValue === prevValue) return
        setColors({ INFO: newValue })
    }
)
watch(
    
    () => theme.colorSuccess,
    (newValue = null, prevValue = null) => {
        console.log(newValue)
        
        if (newValue === prevValue) return
        setColors({ SUCCESS: newValue })
    }
)
watch(
    
    () => theme.colorWarning,
    (newValue = null, prevValue = null) => {
        console.log(newValue)
        
        if (newValue === prevValue) return
        setColors({ WARNING: newValue })
    }
)
watch(
    
    () => theme.colorDanger,
    (newValue = null, prevValue = null) => {
        console.log(newValue)
        
        if (newValue === prevValue) return
        setColors({ DANGER: newValue })
    }
)
watch(
    
    () => theme.colorBug,
    (newValue = null, prevValue = null) => {
        console.log(newValue)
        
        if (newValue === prevValue) return
        setColors({ BUG: newValue })
    }
)









theme.colorMode = ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light')

export default {
    state,
    theme,

}