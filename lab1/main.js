const OPEN_CLASSNAME = "open";

const textNav = document.querySelector("#text_nav");

function toggleMenu () {
    if (textNav.classList.contains(OPEN_CLASSNAME)) {
        textNav.classList.remove(OPEN_CLASSNAME);
    } else {
        textNav.classList.add(OPEN_CLASSNAME);
    }
}