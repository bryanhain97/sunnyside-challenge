// for performance reasons, it's better to just use CSS for ARROW slide


// create hamburger menu for mobile sized device (max-width: 375px)
const navbar = document.querySelector('.navigation');
let hamburgerMenu = document.createElement('div');
hamburgerMenu.style.width = "35px";
hamburgerMenu.style.height = "35px";
hamburgerMenu.style.display = "flex";
hamburgerMenu.style.flexDirection = "column";
hamburgerMenu.style.justifyContent = "center";
for(let i = 0; i < 3; i++){
    let hamburgerRow = document.createElement('div');
    hamburgerRow.style.width = "80%";
    hamburgerRow.style.height = "3px";
    hamburgerRow.style.display = "flex";
    hamburgerRow.style.justifyContent = "center";
    hamburgerRow.style.backgroundColor = "white";
    hamburgerRow.style.margin = "2px"
    hamburgerRow.style.borderRadius = "3px";
    hamburgerRow.style.alignItems = "space between";
    hamburgerMenu.appendChild(hamburgerRow);
}
// if size of device is below or 375px, insert hamburgerMenu into navbar;
hamburgerMenu.id = "hamburgerMenu";
hamburgerMenu.style.cursor = "pointer"

// SECTION 2 





let x = window.matchMedia('(max-width: 375px)');
function myFunction(x){
    if(x.matches){
        navbar.appendChild(hamburgerMenu);
    }
}
myFunction(x);