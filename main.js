let input = document.querySelector(".input2");
let section = document.querySelector(".section");
let icon = document.querySelector(".tr");


// section.addEventListener('submit' , function(evt){
//     evt.preventDefault();
// });

icon.addEventListener('click' , function(){
    if (input.type === 'text'){
        input.type = 'password';
        icon.className = 'tr fa-sharp fa-regular fa-eye';
    } else {
        input.type = 'text';
        icon.className = 'tr fa-sharp fa-regular fa-eye-slash';
    }
});