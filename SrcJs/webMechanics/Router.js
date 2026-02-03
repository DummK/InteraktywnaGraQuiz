export function changeVisibility(from, to) {
    const fromElement = document.getElementById(from);
    const toElement = document.getElementById(to);

    if (fromElement && toElement) {
        fromElement.classList.remove("active");
        toElement.classList.add("active");
    }
}

