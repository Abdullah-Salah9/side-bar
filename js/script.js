const toggle = document.getElementById('toggleBtn');
const sideBar = document.getElementById('sidebar');
const close = document.getElementById('closebtn')

toggle.addEventListener( 'click',()=>{
    sideBar.classList.add('active')
});
close.addEventListener('click',()=>{
    sideBar.classList.remove('active')
})