var alert;
const delay = ms => new Promise(res => setTimeout(res, ms));


function ElementId(id) {
    return document.getElementById(id);
}
// $ = document.getElementbyId(id)

ElementId('mountain').addEventListener("click", mountain, false);
ElementId('gate').addEventListener('click', town, false);

function mountain(){
    document.body.style.backgroundImage = "url('../static/pictures/mountain.jpg')";
    ElementId('story_text').innerText = "You arrive at the foot of the mountain, you see a single road leading up," +
        " next to the road you see sign but you can’t quite make it out yet.\n";
    remove_all_buttons('remove')
    create_button('cross_mon', 'mount', 'Try to cross the mountain');
    create_button('read_sign', 'sign', 'Read the sign');
    create_button('back', 'back', 'Back to field');
    ElementId('mount').addEventListener('click', death, false);
    ElementId('sign').addEventListener("click", read_sign, false);
    ElementId('back').addEventListener("click", back_to_field, false);

    // read_sign.addEventListener("click", function (e) {
    //     let alert = document.createElement("div");
    //     alert.setAttribute("id", "popup");
    //     alert.setAttribute("class", "alert alert-primary");
    //     alert.setAttribute("role", "alert");
    //     $("popup").innerText("Mount Killaraus, do not try to cross without proper preparations!");
    }

function death() {

}
    
    
function read_sign() {
    alert('Mount Killaraus, do not try to cross without proper preparations!')
}


function back_to_field() {
    document.body.style.backgroundImage = "url('../static/pictures/starting_page.png')";
    ElementId('story_text').innerText = 'You are at a crossroads of sort, blue sky, green field nothing out of the ordinary,' +
        ' to your left in the distance you see a mountain, to your right, a town.';
    remove_all_buttons('remove')
    create_button('mountain', 'mountain', 'Go to mountain');
    create_button('gate', 'gate', 'Go to town');
    ElementId('mountain').addEventListener("click", mountain, false);
    ElementId('gate').addEventListener('click', town, false);
}

function town() {
    document.body.style.backgroundImage = "url('../static/pictures/gatekeeper_jency.png')";
    ElementId('story_text').innerText = 'You arrive at the town, the gate is sealed shut and a single guard is standing at his post humming an unfamiliar tune. Upon realizing your approach you are promptly stopped by him.\n' +
        '‘You there! What business do you have in the city?’';
    remove_all_buttons('remove')
    create_button('greet', 'greet_normal', 'Greet him, and say that you are just looking for work');
    create_button('greet', 'greet_witty', 'Greet him, and say something witty about the boring look of this town');
    create_button('mom_joke','mom_joke', 'Ignore his question and say an inappropriate joke about his mother');
    create_button('back', 'back', 'Leave');
    ElementId('greet_normal').addEventListener('click', market, false);
    // $('mountain').addEventListener("click", mountain, false);
    // $('mountain').addEventListener("click", mountain, false);
    // $('mountain').addEventListener("click", mountain, false);
    // $('mountain').addEventListener("click", mountain, false);
}

function back_to_town(){
    document.body.style.backgroundImage = "url('../static/pictures/gatekeeper_jency.png')";
    ElementId('story_text').innerText = 'You arrive at the town, the gate is sealed shut and a single guard is standing at his post humming an unfamiliar tune. Upon realizing your approach you are promptly stopped by him.\n' +
        '‘You there! What business do you have in the city?’';
    remove_all_buttons('remove')
    create_button('greet', 'greet_normal', 'Greet him, and say that you are just looking for work');
    create_button('greet', 'greet_witty', 'Greet him, and say something witty about the boring look of this town');
    create_button('mom_joke','mom_joke', 'Ignore his question and say an inappropriate joke about his mother');
    create_button('back', 'back', 'Leave');
    ElementId('greet_normal').addEventListener('click', market, false);


}

function market(){
 document.body.style.backgroundImage = "url('../static/pictures/ricsi_Attila_market.png')";
 ElementId('story_text').innerText = 'You arrive at the town, the gate is sealed shut and a single guard is standing at his post humming an unfamiliar tune. Upon realizing your approach you are promptly stopped by him.\n' +
     '‘You there! What business do you have in the city?’\n'
    remove_all_buttons('remove')
    create_button('vendors_check', 'vendors', 'Check one of the vendors');
    create_button('go_to_inn', 'inn', 'Go to the inn sir');
    create_button('leave_town', 'leave', 'Leave town right now sir');
    ElementId('leave').addEventListener('click', back_to_town, false)
    ElementId('vendors').addEventListener('click', function(e){
        let alertbox = document.getElementById('alertbox');
        alertbox.removeAttribute('hidden');
        alertbox.innerText = 'I came to this market to beg for money';
        setTimeout(hide, 3500)



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

function remove_button(id_) {
    let button_to_delete = $(id_);
        button_to_delete.remove();
}

function hide(){
    let alertbox = document.getElementById('alertbox');
    alertbox.innerText = 'Get OUT of here scum! SCRAM to the inn or leave town!'
    alertbox.removeAttribute('hidden');
    alertbox.removeAttribute('alert-info');
    alertbox.setAttribute('class', ' alert alert-warning font-weight-bold ');
    setTimeout(hidenow, 3500);
}
function hidenow(){
    let alertbox = document.getElementById('alertbox');
    alertbox.setAttribute('hidden', true)
}

function alertMessage(message){
    let alertbox = document.getElementById('alertbox');
        alertbox.removeAttribute('hidden');
        alertbox.innerText = message;
        setTimeout(hide, 3500)
}

function remove_all_buttons(class_) {
    let buttons = document.getElementsByClassName('remove')

    while(buttons[0]){
        buttons[0].parentNode.removeChild(buttons[0])
    }

}