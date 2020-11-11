let toggled = document.querySelectorAll("span");

function colorSwap(event){
    toggled.forEach(item => {
        item.classList.remove('active')
    })
    event.target.classList.add('active')
}

toggled.forEach(btn => {
    btn.addEventListener('click', ()=>{
        colorSwap(event)
    })
})