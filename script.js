const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailVal = email.value.trim();
    var passwordVal = password.value.trim();
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (firstName === '') {
        errorFunc(fname, 'First Name cannot be empty');
    } else {
        successFunc(fname);
    }

    if (lastName === '') {
        errorFunc(lname, 'Last Name cannot be empty');
    } else {
        successFunc(lname);
    }

    if (emailVal === '') {
        errorFunc(email, 'Email cannot be empty');
    } else if (!emailVal.match(emailPattern)) {
        errorFunc(email, 'Looks like this is not an email');
    } else {
        successFunc(email);
    }

    if (passwordVal === '') {
        errorFunc(password, 'Password cannot be empty')
    } else {
        successFunc(password);
    }
})

function errorFunc(req, message) {
    const span = req.nextElementSibling;

    span.innerText = message;
    req.className = 'error';
    span.className = 'error-text';

    if (req === email) {
        req.style.color = "hsl(0, 100%, 74%)";
    }
}

function successFunc(req) {
    req.className = '';
    req.nextElementSibling.className = '';
    req.nextElementSibling.innerHTML = '';
    
    if (req === email) {
        req.style.color = 'hsl(249, 10%, 26%)';
    }
}