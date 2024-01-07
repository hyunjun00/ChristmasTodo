const loginForm=document.querySelector("#login-form");
const loginInput=document.querySelector("#login-form input");
const greeting=document.querySelector("#greeting");
const bgdark=document.querySelector("#bgdark");

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username=loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    bgdark.style.opacity=0;
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText=`Hello ${username}`;
}

const savedUsername=localStorage.getItem(USERNAME_KEY);

function bgOpacity() {
    bgdark.style.opacity=0.7;
}

if(savedUsername===null) {
    loginForm.addEventListener("click",bgOpacity);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}