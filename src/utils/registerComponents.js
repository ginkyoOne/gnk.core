import Store from "../Store/Store"
function registerModuleComponents(components) {
    
    window.APP.provide('store', Store )

    if (!components) {
        return;
    }
    for (var componentName in components) {
        if (components.hasOwnProperty(componentName)) {
            window.APP.component(componentName, components[componentName]);
        }
    }
}

export default registerModuleComponents 
