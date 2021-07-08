let arrowDown = document.querySelector('.title>img')

const arrowMoving = function(){
    arrowDown.classList.add('arrowDown')
}
setInterval(arrowMoving, 400)