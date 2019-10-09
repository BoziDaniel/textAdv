function $(id) {
    return document.getElementById(id);
}

// $ = document.getElementbyId(id)

$('mountain').addEventListener("click", mountain, false);
$('gate').addEventListener('click', town, false);

function mountain() {
    document.body.style.backgroundImage = "url('../static/pictures/mountain.jpg')";
    $('story_text').innerText = "You arrive at the foot of the mountain, you see a single road leading up," +
        " next to the road you see sign but you can’t quite make it out yet.\n";
    remove_button('mountain');
    remove_button('gate');
    create_button('cross_mon', 'mount', 'Try to cross the mountain');
    create_button('read_sign', 'sign', 'Read the sign');
    create_button('back', 'back', 'Back to field');
    $('mount').addEventListener('click', death_mountain, false);
    $('sign').addEventListener("click", read_sign, false);
    $('back').addEventListener("click", back_to_field, false);
}

function death_mountain() {
    document.body.style.backgroundImage = "url('../static/pictures/death.png')";
    remove_button('mount');
    remove_button('sign');
    remove_button('back');
    remove_button('story_text');
    create_element('death', 'death_mnt', 'Death by: Going in the mountains without being ' +
        'prepared. Seriously, you thought that was a good idea?')

}

function read_sign() {
    alert('Mount Killaraus, do not try to cross without proper preparations!')
}

function back_to_field() {
    document.body.style.backgroundImage = "url('../static/pictures/starting_page.png')";
    $('story_text').innerText = 'You are at a crossroads of sort, blue sky, green field nothing out of the ordinary,' +
        ' to your left in the distance you see a mountain, to your right, a town.';
    remove_button('mount');
    remove_button('sign');
    remove_button('back');
    create_button('mountain', 'mountain', 'Go to mountain');
    create_button('gate', 'gate', 'Go to town');
    $('mountain').addEventListener("click", mountain, false);
    $('gate').addEventListener('click', town, false);
}

function town() {
    document.body.style.backgroundImage = "url('../static/pictures/gatekeeper_jency.png')";
    $('story_text').innerText = 'You arrive at the town, the gate is sealed shut and a single guard is standing at his post humming an unfamiliar tune. Upon realizing your approach you are promptly stopped by him.\n' +
        '‘You there! What business do you have in the city?’';
    remove_button('mountain');
    remove_button('gate');
    create_button('greet', 'greet_normal', 'Greet him, and say that you are just looking for work');
    create_button('greet', 'greet_witty', 'Greet him, and say something witty about the boring look of this town');
    create_button('mom_joke', 'mom_joke', 'Ignore his question and say an inappropriate joke about his mother');
    create_button('back', 'back', 'Leave');
}


function create_button(button_name, id_, message) {
    button_name = document.createElement("button");
    button_name.setAttribute("id", id_);
    text_message = document.createTextNode(message);
    let parent = $("start_background");
    button_name.setAttribute('class', 'btn btn-info');
    button_name.setAttribute('type', 'button');
    button_name.appendChild(text_message);
    parent.appendChild(button_name);
}

function create_element(element_name, id_, message) {
    element_name = document.createElement("p");
    element_name.setAttribute("id", id_);
    text_message = document.createTextNode(message);
    let parent = $("start_background");
    element_name.setAttribute('class', 'death_text');
    element_name.appendChild(text_message);
    parent.appendChild(element_name);
}

function remove_button(id_) {
    let button_to_delete = $(id_);
    button_to_delete.remove();
}