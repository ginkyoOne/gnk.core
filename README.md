# Vue 3 UI Framework


vue gnk.core v0.1 alfa
### Built With

* 🖊️ scss
* 🐙 Vue 3
* 💻 Vite
* 💕 Love


- [x] .core.autoLoader(FULL)
- [ ] .core.autoLoader(mobile)
- [ ] .core.autoLoader(WEB)
- [ ] .core.configs
- [x] .core.grid
- [ ] .core.theme
- [ ] Alert
- [ ] Avatar
- [ ] Backdrop
- [ ] Breadcrumb
- [x] Button
- [ ] Calendar/Date picker
- [x] Card/Expandable Card
- [x] Checkbox
- [ ] Chip
- [ ] Collapse
- [ ] Contacts List
- [ ] Data Table
- [ ] Dialogs
- [ ] Divider
- [ ] Dropdown
- [ ] Editable
- [ ] Export pdf/xls
- [x] Images
- [x] Input
- [ ] List
- [x] Loading
- [ ] Navbar
- [ ] Notification
- [x] Number Input
- [ ] Pagination
- [ ] Picker
- [ ] PopOver
- [ ] Popup
- [x] Progress
- [ ] Properties Grid
- [x] Radio
- [x] SearchBar
- [ ] Select
- [ ] Sheet Modal
- [ ] Sidebar
- [ ] Skeleton
- [ ] Slide Pannel
- [ ] Slider
- [ ] Sortable/Drag list
- [ ] Swipeout
- [x] Swiper
- [x] Switch
- [ ] Tabs
- [ ] Textarea
- [ ] Timeline
- [ ] Tooltip
- [ ] Treeview
- [ ] Upload
- [ ] Video player 


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
* Node : 16.10.0
* Vscode

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/ginkyoOne/gnk.core/
```

2. Open VS Code
3. On your project main.js
```sh
import { createApp } from 'vue'
import App from './App.vue'

//IMPORT GNK Framework
import GNK from 'gnk.core'

//IMPORT GNK Framework Styles
import "gnk.core/dist/style.css"

//CREATE APP
let APP = createApp(App)

//REGISTER GNK FULL Framework
GNK.registerModuleComponents(APP, GNK)

//MOUNT APP
APP.mount('#app')
```







<!-- USAGE EXAMPLES -->
## Usage
```sh
    <gnkButton label="Outlined" primary size="xl" > xl</gnkButton>
    <gnkButton label="Outlined" info size="xl" > xl</gnkButton>
    <gnkButton label="Outlined" warning size="l"> l </gnkButton>
    <gnkButton label="Outlined" danger size="default"> default </gnkButton>
    <gnkButton label="Outlined" success size="small"> small </gnkButton>
```

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->


<!-- CONTACT -->
## Contact

Project Link: [https://github.com/ginkyoOne/gnk.core/](https://github.com/ginkyoOne/gnk.core/)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* This is still an alfa version, dont use it in production. 

