var linksShown = false;
var links = document.getElementsByClassName('nav-links');
function toggleLinks() {
    if (linksShown) {
        for (let i = 0; i < links.length; i++) {
            links[i].style.display = 'none';
        }
        linksShown = false;
    } else {
        for (let i = 0; i < links.length; i++) {
            links[i].style.display = 'block';
        }
        linksShown = true;
    }
}
