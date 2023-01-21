const nav = document.querySelector("nav");

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    const windowPosition = window.scrollY > 0;
    nav.classList.toggle("scrollink-active", windowPosition);
});