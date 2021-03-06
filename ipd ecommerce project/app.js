console.log('This is IPD project');

// Handling switch between login and sign up

const signUpForm = `<div class="input">
                    <input type="text" placeholder="User Name">
                    </div>
                    <div class="input">
                    <input type="email" placeholder="Email">
                    </div>
                    <div class="input">
                    <input type="password" placeholder="Password">
                    </div>
                    <div class="input">
                    <input type="password" placeholder="Repeat password">
                    </div>
                    <div class="input">
                    <input type="submit" value="Register">
                    </div>`;


const LoginForm = `<div class="input">
                    <input type="text" placeholder="User Name">
                    </div>
                    <div class="input">
                    <input type="password" placeholder="Password">
                    </div>
                    <div class="input">
                    <input type="submit" value="Sign In">
                    </div>`;

// Selecting Sign up and login buttons

const logIn = document.querySelector('#login');
const signUp = document.querySelector('#signup');
const form = document.querySelector('.form');
const loginBtn = document.querySelector('#login-btn');
const loginModal = document.querySelector('.login');
const loginContainer = document.querySelector('.login-container');

console.log(logIn, signUp, form);

logIn.addEventListener('click', () => {
    form.innerHTML = LoginForm;
    signUp.classList.add('login-back-color');
    logIn.classList.remove('login-back-color');
    
});

signUp.addEventListener('click', () => {
    form.innerHTML = signUpForm;
    logIn.classList.add('login-back-color');
    signUp.classList.remove('login-back-color');
});

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    console.log('clicked');
});


document.getElementById('main-login').addEventListener('click', function () {
    loginModal.style.display = 'none';
});

document.getElementById('login-container').addEventListener('click', function (e) {
    e.stopPropagation();
});
