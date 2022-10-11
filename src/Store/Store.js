import { setColors } from '../utils/colorsUtils'
import { computed, watch, reactive, readonly } from 'vue'

const state = reactive({
    //IS BUSY
    busy: false,
    loading: false,

    //SwipeManager
    swipeCapturedBy: null,

    mainSlideSidebarIsOpen: false
})

const routing = reactive({
    
    routeCurrent: '',
    routeHistory: ['/'],

    pushRouteToHistory(to, from) {
        if (to.fullPath === from.fullPath) return 0

        if (this.routeHistory.length > 35) {
            this.routeHistory = this.routeHistory.slice(15)
        }
        
        let indexOfFrom = this.routeHistory.indexOf(from.fullPath)
        let indexOfTo = this.routeHistory.indexOf(to.fullPath)

        
        if (indexOfFrom > 0 && indexOfTo > -1 && indexOfTo < indexOfFrom) {
            this.routeHistory.splice(indexOfFrom,this.routeHistory.length - (indexOfTo + 1) )            
            return -1  

        } else {
            this.routeHistory.push(to.fullPath)
            return 1
        }
    }

})

const ui = reactive({

    //Dropdown Level
    //! starts at 8000
    //? {uid : '', level : 8000 }
    dropDownLevel: [],
    dropDownStartingLevel:8000,

    registerDropdown(uid) {

        let elementInMemory = this.dropDownLevel.find((element) => element.uid === uid)
        if (elementInMemory === undefined) {

            this.dropDownLevel.push({ uid: uid , zLevel: (this.dropDownLevel.length > 0 ? this.dropDownLevel[0].zLevel : this.dropDownStartingLevel) + 1 })
            return this.dropDownLevel[this.dropDownLevel.length - 1].zLevel

        } else return elementInMemory.zLevel

    },
    dropDropdown(uid) {
        this.dropDownLevel.splice(this.dropDownLevel.indexOf((elementInMemory) => elementInMemory.uid === uid))
    },
    
    
    //Dropdown Level
    //! starts at 9000
    //? {uid : '', level : 9000 }
    menuLevel: [],
    menuStartingLevel: 9000,

    registerMenu(uid) {

        let elementInMemory = this.menuLevel.find((element) => element.uid === uid)
        if (elementInMemory === undefined) {

            this.menuLevel.push({ element: uid, zLevel: (this.menuLevel.length > 0 ? this.menuLevel[0].zLevel : this.menuStartingLevel) + 1 })
            return this.menuLevel[this.menuLevel.length - 1].zLevel

        } else return elementInMemory.zLevel

    },
    dropMenu(uid) {
        this.menuLevel.splice(this.menuLevel.indexOf((elementInMemory) => elementInMemory.uid === uid))
    },
    

    //Modal Level
    //! starts at 10000
    //? {uid : '', level : 10000 }
    sidebarLevel: [],
    sidebarStartingLevel: 10000,

    registerSidebar(uid) {

        let elementInMemory = this.sidebarLevel.find((element) => element.uid === uid)
        if (elementInMemory === undefined) {

            this.sidebarLevel.push({ uid: uid, zLevel: (this.sidebarLevel.length > 0 ? this.sidebarLevel[0].zLevel : this.sidebarStartingLevel) + 1 })
            return this.sidebarLevel[this.sidebarLevel.length - 1].zLevel

        } else return elementInMemory.zLevel

    },
    dropSidebar(uid) {
        this.sidebarLevel.splice(this.sidebarLevel.indexOf((elementInMemory) => elementInMemory.uid === uid))
    },

    

    
    //Modal Level
    //! starts at 99000
    //? {uid : '', level : 99000 }
    modalLevel: [],
    modalStartingLevel: 99000,

    registerModal(uid) {

        let elementInMemory = this.modalLevel.find((element) => element.uid === uid)
        if (elementInMemory === undefined) {

            this.modalLevel.push({ uid: uid, zLevel: (this.modalLevel.length > 0 ? this.modalLevel[0].zLevel : this.modalStartingLevel) + 1 })
            return this.modalLevel[this.modalLevel.length - 1].zLevel

        } else return elementInMemory.zLevel

    },
    
    dropModal(uid) {
        this.modalLevel.splice(this.modalLevel.indexOf((elementInMemory) => elementInMemory.uid === uid))
    },

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
    routing,
}