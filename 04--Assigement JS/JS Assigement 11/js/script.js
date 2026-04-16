// Current URL
const currentUrl = () => {
    alert(window.location.href)
}

// Go To Google
const goToGoogle = () => {
    window.location.href = "https://www.google.com";
}

// Replace URL
const replaceUrl = () => {
    window.location.replace("https://www.youtube.com");
}
 
// Open Popop
var popup;
const openPopup = () => {
    popup = window.open("", "Popup Window", "width=500,height=300   ")
}

// Fill Content In Popup
document.getElementById("contentInPopup").onclick = function () {
    popup.document.write("<h1>Hello From Popup</h1>");
}

// Assign URL To Popup
document.getElementById("assignUrl").onclick = function () {
    popup.location.href = "https://www.wikipedia.org"
}

const closePopup = () => {
    popup.close();
}
document.getElementById("contentInPopup").onclick = function () {
    if (popup && !popup.closed) {
        popup.document.write("<h1>Hello From Popup</h1>");
    } else {
        alert("Please open popup first!");
    }
}
document.getElementById("assignUrl").onclick = function () {
    if (popup && !popup.closed) {
        popup.location.href = "https://www.wikipedia.org";
    } else {
        alert("Please open popup first!");
    }
}