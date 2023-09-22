const OPEN_CLASSNAME = "open";

const textNav = document.getElementById("text_nav");

function toggleMenu () {
    if (textNav.classList.contains(OPEN_CLASSNAME)) {
        textNav.classList.remove(OPEN_CLASSNAME);
    } else {
        textNav.classList.add(OPEN_CLASSNAME);
    }
}