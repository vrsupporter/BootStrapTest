
function ToggleClass(id, classToToggle) {
    document.getElementById(id).classList.toggle(classToToggle)
}

function ToggleClassIfNoHoverSupport(id, classToToggle) {
    if (window.matchMedia('(hover: none)').matches) {
        ToggleClass(id, classToToggle);
    }
}

function RemoveClickOpenedClasses() {
    const idsToAffect = ["projectDropdownHolder"];
    const attributeToRemove = "clickOpened";
    idsToAffect.forEach(id => {
        document.getElementById(id).classList.remove(attributeToRemove);
    });
}
