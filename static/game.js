function $(id) {
    return document.getElementById(id);
}
// $ = document.getElementbyId(id)

$('mountain').addEventListener("click", mountain, false);

function mountain(){
    document.body.style.backgroundImage = "url('../static/pictures/mountain.jpg')";
    debugger;
    $('story_text').innerText = "You arrive at the foot of the mountain, you see a single road leading up," +
        " next to the road you see sign but you can’t quite make it out yet.\n";
    $('mountain').innerText = 'Try to cross the mountain.';
    let read_sign = document.createElement("button");
    read_sign.setAttribute("id", 'read_sign');
    let message = document.createTextNode("Read the sign");
    let parent = $("start_background");
    read_sign.appendChild(message);
    parent.appendChild(read_sign);
    read_sign.addEventListener("click", function (e) {
        let alert = document.createElement("div");
        alert.setAttribute("id", "popup");
        alert.setAttribute("class", "alert alert-primary");
        alert.setAttribute("role", "alert");
        $("popup").innerText("Mount Killaraus, do not try to cross without proper preparations!");
    });
};
