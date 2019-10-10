var alert;
const delay = ms => new Promise(res => setTimeout(res, ms));


function ElementId(id) {
    return document.getElementById(id);
}



function main() {
    ElementId('music').setAttribute('src', 'static/music/rivendell.mp3');
    ElementId('back_to_menu').addEventListener("mouseover", open_door, false);
    ElementId('back_to_menu').addEventListener('mouseout', close_door, false);
    ElementId('mountain').addEventListener("click", mountain, false);
    ElementId('gate').addEventListener('click', town, false);
}

function open_door() {
    ElementId('back_to_menu').setAttribute('src', 'static/pictures/main_menu_open .png')
}

function close_door() {
    ElementId('back_to_menu').setAttribute('src', 'static/pictures/main_menu_closed.png')
}

function mountain() {
    ElementId('music').setAttribute('src', 'static/music/Dragonforce.mp3');
    document.body.style.backgroundImage = "url('../static/pictures/mountain.jpg')";
    ElementId('story_text').innerText = "You arrive at the foot of the mountain, you see a single road leading up," +
        " next to the road you see sign but you can’t quite make it out yet.\n";
    remove_all_buttons('remove');
    create_button('cross_mon', 'mount', 'Try to cross the mountain');
    create_button('read_sign', 'sign', 'Read the sign');
    create_button('back', 'back', 'Back to field');

    ElementId('mount').addEventListener('click', death_mountain, false);
    ElementId('sign').addEventListener("click", read_sign, false);
    ElementId('back').addEventListener("click", back_to_field, false);
}

function death_mountain() {
    ElementId('music').setAttribute('src', 'static/music/death.mp3');
    document.body.style.backgroundImage = "url('../static/pictures/death.png')";
    remove_all_buttons('remove');
    remove_element('story_text');
    create_paragraph('death', 'death_mnt', 'Death by: Going in the mountains without being ' +
        'prepared. Seriously, you thought that was a good idea?');
    create_button('try_again', 'try_again', 'Try again?');
    ElementId('try_again').addEventListener("click", try_again, false);
}

function read_sign() {
    alert('Mount Killaraus, do not try to cross without proper preparations!');
}

function try_again() {
    window.location.reload(true);
}

function back_to_field() {
    ElementId('music').setAttribute('src', 'static/music/rivendell.mp3');
    document.body.style.backgroundImage = "url('../static/pictures/starting_page.png')";
    ElementId('story_text').innerText = 'You are at a crossroads of sort, blue sky, green field nothing out of the ordinary,' +
        ' to your left in the distance you see a mountain, to your right, a town.';
    remove_all_buttons('remove');
    create_button('mountain', 'mountain', 'Go to mountain');
    create_button('gate', 'gate', 'Go to town');
    ElementId('mountain').addEventListener("click", mountain, false);
    ElementId('gate').addEventListener('click', town, false);
}

function town() {
    ElementId('music').setAttribute('src', 'static/music/hello.mp3');
    setTimeout(function () {
        ElementId('music').setAttribute('src', 'static/music/gate.mp3');
    }, 2500);
    document.body.style.backgroundImage = "url('../static/pictures/gatekeeper_jency.png')";
    ElementId('story_text').innerText = 'You arrive at the town, the gate is sealed shut and a single guard is standing at his post humming an unfamiliar tune. Upon realizing your approach you are promptly stopped by him.\n' +
        '‘You there! What business do you have in the city?’';
    remove_all_buttons('remove');
    create_button('greet', 'greet_normal', 'Greet him, and say that you are just looking for work');
    create_button('greet', 'greet_witty', 'Greet him, and say something witty about the boring look of this town');
    create_button('mom_joke', 'mom_joke', 'Ignore his question and say an inappropriate joke about his mother');
    create_button('back', 'back', 'Leave');
    ElementId('greet_normal').addEventListener('click', market, false);
    ElementId('mom_joke').addEventListener("click", death_guard, false);
    ElementId('back').addEventListener('click', back_to_field, false);
    ElementId('greet_witty').addEventListener('click', bitchslapped_by_guard, false);
}



function bitchslapped_by_guard(){
    alert("The guard backhands you. ‘Don’t get smart with me! Go on in get out of my sight!");
}

function death_guard() {
    ElementId('music').setAttribute('src', 'static/music/death.mp3');
    document.body.style.backgroundImage = "url('../static/pictures/death.png')";
    remove_all_buttons('remove');
    remove_element('story_text');
    create_paragraph('death', 'death_mnt', "Death by: A Stab wound to the stomach, I mean " +
        "you made a joke about an armed guard's mother, what did you expect?");
    create_button('try_again', 'try_again', 'Try again?');
    ElementId('try_again').addEventListener("click", try_again, false);
}

function market(){
    ElementId('music').setAttribute('src', 'static/music/market.mp3');
    document.body.style.backgroundImage = "url('../static/pictures/ricsi_Attila_market.png')";
    ElementId('story_text').innerText = 'You arrive at the town, the gate is sealed shut and a single guard is standing at his post humming an unfamiliar tune. Upon realizing your approach you are promptly stopped by him.\n' +
     '‘You there! What business do you have in the city?’\n';
    remove_all_buttons('remove');
    create_button('vendors_check', 'vendors', 'Check one of the vendors');
    create_button('go_to_inn', 'inn', 'Go to the inn sir');
    create_button('leave_town', 'leave', 'Leave town right now sir');
    ElementId('leave').addEventListener('click', town, false);
    ElementId('inn').addEventListener('click', inn, false)
    ElementId('vendors').addEventListener('click', function(e) {
        let alertbox = document.getElementById('alertbox');
        alertbox.removeAttribute('hidden');
        alertbox.innerText = 'I came to this market to beg for money';
        setTimeout(hide, 3500)
    });
}

function inn() {
    ElementId('music').setAttribute('src', 'static/music/tavern.mp3');
    document.body.style.backgroundImage = "url('../static/pictures/tavern_drunk_dani.png')";
    ElementId('story_text').innerText = 'You entered a small inn, in the corner you can see a drunk guard with a strange device on his head,' +
        ' next to him is the bard that is till playing that all so familiar tune.\n' +
        'The innkeeper shoots you a toothless smile.\n' +
        '‘What can I get you today?’';
    remove_all_buttons('remove');
    create_button('ask_work', 'work', 'Ask about work in the city.');
    create_button('ask_ab_mountain', 'close_mountain', 'Ask about the mountain close by the city');
    create_button('ask_pint', 'pint', 'Ask for a pint');
    create_button('leave_inn', 'leave_inn_id', 'Leave and go back to the market');
    ElementId('leave_inn_id').addEventListener('click', market, false);
    ElementId('pint').addEventListener('click', function (e) {
        let alertbox = document.getElementById('alertbox');
        alertbox.removeAttribute('hidden');
        alertbox.innerText = 'You tried to ask a pint.The inn keep laughs at you, still brandishing his toothless smile. ' +
            '‘Without money? That is a good joke.';
        setTimeout(function(e){
            alertbox.setAttribute('hidden', true)
        }, 3500)

    });
    ElementId('close_mountain').addEventListener('click', function (e) {
        let alertbox = document.getElementById('alertbox');
        alertbox.removeAttribute('hidden');
        alertbox.innerText = 'The mountain is very dangerous adventurer, i recommend u to try a less harder quest.';
        setTimeout(function(e){
            alertbox.setAttribute('hidden', true)
        }, 3500)

    });

     ElementId('work').addEventListener('click', function (e) {
         let alertbox = document.getElementById('alertbox');
        alertbox.removeAttribute('hidden');
        alertbox.innerText = 'Reach level 5 to go to work';
        setTimeout(function(e){
            alertbox.setAttribute('hidden', true)
        }, 3500)
    });
}


function create_button(button_name, id_, message) {
    button_name = document.createElement("button");
    button_name.setAttribute("id", id_);
    text_message = document.createTextNode(message);
    let parent = ElementId("start_background");
    button_name.setAttribute('class', 'btn btn-info remove');
    button_name.setAttribute('type', 'button');
    button_name.appendChild(text_message);
    parent.appendChild(button_name);
}

function create_paragraph(paragraph_name, id_, message) {
    paragraph_name = document.createElement("p");
    paragraph_name.setAttribute("id", id_);
    text_message = document.createTextNode(message);
    let parent = ElementId("start_background");
    paragraph_name.setAttribute('class', 'death_text');
    paragraph_name.appendChild(text_message);
    parent.appendChild(paragraph_name);
}


function hide(){
    let alertbox = ElementId('alertbox');
    alertbox.innerText = 'Get OUT of here scum! SCRAM to the inn or leave town!'
    alertbox.removeAttribute('hidden');
    alertbox.removeAttribute('alert-info');
    alertbox.setAttribute('class', ' alert alert-warning font-weight-bold ');
    setTimeout(hidenow, 3500);
}
function hidenow(){
    let alertbox = ElementId('alertbox');
    alertbox.setAttribute('hidden', true)
}

function alertMessage(message){
    let alertbox = document.getElementById('alertbox');
        alertbox.removeAttribute('hidden');
        alertbox.innerText = message;
        setTimeout(hide, 3500)
}

function remove_element(id_) {
    let delete_element = ElementId(id_);
    delete_element.remove();
}

function remove_all_buttons(class_) {
    let buttons = document.getElementsByClassName('remove');
    while (buttons[0]) {
        buttons[0].parentNode.removeChild(buttons[0])
    }
}

main();