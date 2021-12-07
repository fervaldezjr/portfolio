// Scroll Reveal
ScrollReveal().reveal('.headline')
ScrollReveal().reveal('.tagline', { delay: 450 })
ScrollReveal().reveal('.punchline', { delay: 600 })

// Dark Theme
let icon = document.getElementById("icon");

icon.onclick = function (){
    document.body.classList.toggle("dark-theme");
}