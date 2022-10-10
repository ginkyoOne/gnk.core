//CSS HELPERS
function setCssVariable(element,propertyName, value) {
    if (typeof element !== 'undefined') {
        element.style.setProperty(propertyName, value)
    }
}

function getCssVariable(element, propertyName) {
    if (typeof element !== 'undefined') {
        return getComputedStyle(element)
            .getPropertyValue(propertyName);
    }
}

export {setCssVariable,getCssVariable}