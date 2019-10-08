function $(id) {
    return document.getElementById(id);
}

$(menu).addEventListener('click', play, false);

function play() {
    document.body.style.backgroundImage = "../../pictures/starting_page.png";
}
