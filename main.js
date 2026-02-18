document.addEventListener("DOMContentLoaded", function () {

const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
localStorage.setItem("theme",
document.body.classList.contains("dark-mode") ? "dark" : "light");
});

if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark-mode");
}

const badge = document.getElementById("specialBadge");
if(new Date().getDay() !== 5){ badge.style.display="none"; }

// Active link highlighting
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
let current = "";
sections.forEach(section => {
const sectionTop = section.offsetTop - 100;
if (scrollY >= sectionTop) {
current = section.getAttribute("id");
}
});
navLinks.forEach(link => {
link.classList.remove("active");
if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
}
});
});

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();
const name=document.getElementById("name");
const email=document.getElementById("email");
const message=document.getElementById("message");
const pattern=/^[^ ]+@[^ ]+\.[a-z]{2,}$/;

if(name.value.length<3 || name.value.length>50){
alert("Name must be 3-50 characters");
return;
}

if(!pattern.test(email.value)){
alert("Enter valid email");
return;
}

if(message.value.length<10 || message.value.length>300){
alert("Message must be 10-300 characters");
return;
}

alert("Submitted successfully!");
this.reset();
});

});
