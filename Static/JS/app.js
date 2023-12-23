let nav = document.querySelector('nav')
document.querySelector('.menu-collapse').addEventListener('click',(e)=>{
    nav.classList.toggle('active')
})

document.querySelectorAll('.drop').forEach((e)=>{
    e.children[0].addEventListener('click',(ev)=>{
        e.classList.toggle('active')
    })
    e.children[1].addEventListener('click',(ev)=>{
        e.classList.toggle('active')
    })
})