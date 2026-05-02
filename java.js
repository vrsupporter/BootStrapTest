function ToggleClass(id, classToToggle) {
    document.getElementById(id).classList.toggle(classToToggle)
}

function ToggleClassIfNoHoverSupport(id, classToToggle) {
    const hoverSupport = window.matchMedia('(hover: hover)').matches
    if (!hoverSupport) {
        ToggleClass(id, classToToggle);
    }
}