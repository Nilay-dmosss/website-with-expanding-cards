const paneller = document.querySelectorAll('.panel');
paneller.forEach(panel => {
    panel .addEventListener('click',() =>{
        // removeActiveClasses();
        klasSil();
        panel.classList.add('aktif');

    });   
});
function klasSil(){
    paneller .forEach(panel => {
    panel.classList.remove('aktif');       
});
};
//toggle menu
function toggleMenu() {
    const menu=document.querySelector(".menu");
    const icon=document.querySelector(".icon");
    menu.classList.toggleMenu("open");
    icon.classList.toggleMenu("open");
}