//CSS HELPERS
function setCssVariable(element,propertyName, value) {
    if (typeof element !== 'undefined') {
        element.style.setProperty(propertyName, value)
    }
}

export {setCssVariable}