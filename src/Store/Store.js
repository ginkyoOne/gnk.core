import { setColors } from '../utils/colorsUtils'
import { computed, watch, reactive, readonly } from 'vue'

const state = reactive({
    //IS BUSY
    busy: false,
    loading: false,

    //SwipeManager
    swipeCapturedBy: null,
})

const ui = reactive({
    
    currentRoute: '',

    //Dropdown Level
    //! starts at 8000
    //? {uid : '', level : 8000 }
    dropDownLevel: [],
    dropDownStartingLevel:8000,

    registerDropdown(uid) {

        let element = this.dropDownLevel.find((element) => element.uid == uid)
        if (element === undefined) {

            this.dropDownLevel.push({ uid: uid, zLevel: (this.dropDownLevel.length > 0 ? this.dropDownLevel[0].zLevel : this.dropDownStartingLevel) + 1 })
            return this.dropDownLevel[this.dropDownLevel.length - 1].zLevel

        } else return element.zLevel

    },
    dropDropdown(uid) {
        this.dropDownLevel.splice(this.dropDownLevel.indexOf((element) => element.uid == uid))
    },
    
    
    //Modal Level
    //! starts at 8000
    //? {uid : '', level : 8000 }
    modalLevel: [],
    modalStartingLevel: 99000,

    registerModal(uid) {

        let element = this.dropDownLevel.find((element) => element.uid == uid)
        if (element === undefined) {

            this.dropDownLevel.push({ uid: uid, zLevel: (this.dropDownLevel.length > 0 ? this.dropDownLevel[0].zLevel : this.modalStartingLevel) + 1 })
            return this.dropDownLevel[this.dropDownLevel.length - 1].zLevel

        } else return element.zLevel

    },

    dropModal(uid) {
        this.dropDownLevel.splice(this.dropDownLevel.indexOf((element) => element.uid == uid))
    },
    
    
    //Dropdown Level
    //! starts at 8000
    //? {uid : '', level : 8000 }
    menuLevel: [],
    menuStartingLevel: 9000,

    registerMenu(uid) {

        let element = this.dropDownLevel.find((element) => element.uid == uid)
        if (element === undefined) {

            this.dropDownLevel.push({ uid: uid, zLevel: (this.dropDownLevel.length > 0 ? this.dropDownLevel[0].zLevel : this.menuStartingLevel) + 1 })
            return this.dropDownLevel[this.dropDownLevel.length - 1].zLevel

        } else return element.zLevel

    },

    dropMenu(uid) {
        this.dropDownLevel.splice(this.dropDownLevel.indexOf((element) => element.uid == uid))
    }

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

        document.querySelector('body').setAttribute("gnk-theme-colorMode", newValue);
        localStorage.setItem('gnk-theme-colorMode', newValue)
    }
)
watch(

    () => theme.colorPrimary,
    (newValue = null, prevValue = null) => {

        if (newValue === prevValue) return
        setColors({ PRIMARY: newValue })
    }
)
watch(

    () => theme.colorInfo,
    (newValue = null, prevValue = null) => {
        if (newValue === prevValue) return
        setColors({ INFO: newValue })
    }
)
watch(

    () => theme.colorSuccess,
    (newValue = null, prevValue = null) => {
        if (newValue === prevValue) return
        setColors({ SUCCESS: newValue })
    }
)
watch(

    () => theme.colorWarning,
    (newValue = null, prevValue = null) => {
        if (newValue === prevValue) return
        setColors({ WARNING: newValue })
    }
)
watch(

    () => theme.colorDanger,
    (newValue = null, prevValue = null) => {
        if (newValue === prevValue) return
        setColors({ DANGER: newValue })
    }
)
watch(

    () => theme.colorBug,
    (newValue = null, prevValue = null) => {
        if (newValue === prevValue) return
        setColors({ BUG: newValue })
    }
)









theme.colorMode = ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light')

export default {
    state,
    theme,
    ui,

}