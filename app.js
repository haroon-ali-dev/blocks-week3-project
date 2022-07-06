var name2, comment, i, profile_pic, d_o_b, age;

function getNumberOrString(value) {
    // Convert a string value to a number if possible
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
        return value
    } else {
        return number_value
    }
}

// Describe this function...
function calculate_age() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    var i_inc = 1;
    if (d_o_b > 2022) {
        i_inc = -i_inc;
    }
    for (i = d_o_b; i_inc >= 0 ? i <= 2022 : i >= 2022; i += i_inc) {
        if (--window.LoopTrap <= 0) throw "Infinite loop.";
        age = (typeof age === 'number' ? age : 0) + 1;
    }
}

// Describe this function...
function create_comment() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    comment = getNumberOrString(document.getElementById('add-comment-field').value);
    display_comments();
}

// Describe this function...
function display_comments() {
    if (--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_container_comment = document.getElementById('container-comment');
    element_container_comment.replaceChildren();
    let new_div4 = document.createElement('div');
    new_div4.setAttribute("class", 'comment-card animate__animated animate__tada');
    let new_div5 = document.createElement('div');
    new_div5.setAttribute("class", 'comment-card-profile');
    let new_span4 = document.createElement('span');
    new_span4.setAttribute("class", 'comment-name');
    new_span4.innerText = name2;

    new_div5.appendChild(new_span4);
    let new_span5 = document.createElement('span');
    new_span5.setAttribute("class", 'comment-age');
    new_span5.innerText = age;

    new_div5.appendChild(new_span5);
    let new_img = document.createElement('img');
    new_img.setAttribute("class", 'comment-pic');
    new_img.setAttribute("src", profile_pic);

    new_div5.appendChild(new_img);

    new_div4.appendChild(new_div5);
    let new_div6 = document.createElement('div');
    new_div6.setAttribute("class", 'comment-card-comment');
    let new_span6 = document.createElement('span');
    new_span6.setAttribute("class", 'comment');
    new_span6.innerText = comment;

    new_div6.appendChild(new_span6);

    new_div4.appendChild(new_div6);

    element_container_comment.appendChild(new_div4);
}


name2 = '';
profile_pic = '';
d_o_b = '';
age = 0;
comment = '';


document.getElementById('register-name-btn').addEventListener('click', (event) => {
    name2 = getNumberOrString(document.getElementById('register-name-field').value);
    let element_container_register = document.getElementById('container-register');
    element_container_register.replaceChildren();
    let new_span = document.createElement('span');
    new_span.setAttribute("class", 'register-title animate__animated animate__fadeIn');
    new_span.innerText = 'A Link For Your Profile Pic?';

    element_container_register.appendChild(new_span);
    let new_input = document.createElement('input');
    new_input.setAttribute("class", 'animate__animated animate__fadeIn');
    new_input.setAttribute("id", 'register-profile-pic-field');

    element_container_register.appendChild(new_input);
    let new_button = document.createElement('button');
    new_button.setAttribute("class", 'animate__animated animate__fadeIn');
    new_button.setAttribute("id", 'register-pic-btn');
    new_button.innerText = 'Next';

    new_button.addEventListener('click', (event) => {
        profile_pic = getNumberOrString(document.getElementById('register-profile-pic-field').value);
        let element_container_register2 = document.getElementById('container-register');
        element_container_register2.replaceChildren();
        let new_span2 = document.createElement('span');
        new_span2.setAttribute("class", 'register-title animate__animated animate__fadeIn');
        new_span2.innerText = 'What Year Were You Born?';

        element_container_register2.appendChild(new_span2);
        let new_input2 = document.createElement('input');
        new_input2.setAttribute("class", 'animate__animated animate__fadeIn');
        new_input2.setAttribute("id", 'register-d-o-b-field');

        element_container_register2.appendChild(new_input2);
        let new_button2 = document.createElement('button');
        new_button2.setAttribute("class", 'animate__animated animate__fadeIn');
        new_button2.setAttribute("id", 'register-d-o-b-btn');
        new_button2.innerText = 'Next';

        new_button2.addEventListener('click', (event) => {
            d_o_b = getNumberOrString(document.getElementById('register-d-o-b-field').value);
            calculate_age();
            let element_container = document.getElementById('container');
            element_container.replaceChildren();
            let new_div = document.createElement('div');
            new_div.setAttribute("class", 'animate__animated animate__fadeInDown');
            new_div.setAttribute("id", 'container-post-comments');
            let new_span3 = document.createElement('span');
            new_span3.setAttribute("id", 'post');
            new_span3.innerText = '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler';

            new_div.appendChild(new_span3);
            let new_div2 = document.createElement('div');
            new_div2.setAttribute("id", 'container-comment');
            let new_div3 = document.createElement('div');
            new_div3.setAttribute("id", 'container-add-comment');
            let new_input3 = document.createElement('input');
            new_input3.setAttribute("id", 'add-comment-field');

            new_div3.appendChild(new_input3);
            let new_button3 = document.createElement('button');
            new_button3.innerText = 'Submit Comment';

            new_button3.addEventListener('click', (event) => {
                create_comment();

            });
            new_div3.appendChild(new_button3);

            new_div2.appendChild(new_div3);

            new_div.appendChild(new_div2);

            element_container.appendChild(new_div);

        });
        element_container_register2.appendChild(new_button2);

    });
    element_container_register.appendChild(new_button);

});